import { useEffect, useRef } from "react";

type Row = { lane: number; branchPoint: boolean };

function buildRows(lanes: number, count: number, seed: number): Row[] {
  let lane = Math.floor(lanes / 2);
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const rows: Row[] = [];
  for (let i = 0; i < count; i++) {
    let branchPoint = false;
    if (rand() < 0.16) {
      const dir = rand() < 0.5 ? -1 : 1;
      const next = Math.min(lanes - 1, Math.max(0, lane + dir));
      if (next !== lane) {
        lane = next;
        branchPoint = true;
      }
    }
    rows.push({ lane, branchPoint });
  }
  return rows;
}

type Strand = {
  rows: Row[];
  laneXs: number[];
  rowHeight: number;
  offset: number;
  speed: number;
  opacity: number;
};

type Point = { x: number; y: number };
type LabelKind = "hash" | "branch" | "diff";
type Label = { x: number; y: number; text: string; kind: LabelKind; born: number; life: number };
type Comet = { x: number; y: number; born: number; life: number };
type Particle = { x: number; y: number; vy: number; r: number; alpha: number };

const HEX = "0123456789abcdef";
function randomHash(len: number) {
  let s = "";
  for (let i = 0; i < len; i++) s += HEX[Math.floor(Math.random() * 16)];
  return s;
}

const BRANCH_NAMES = ["main", "feature/auth", "fix/session", "chore/ci", "release/v2", "refactor/store"];
function randomLabel(): { text: string; kind: LabelKind } {
  const r = Math.random();
  if (r < 0.55) return { text: randomHash(6), kind: "hash" };
  if (r < 0.8) {
    const add = 1 + Math.floor(Math.random() * 80);
    const del = Math.floor(Math.random() * 20);
    return { text: `+${add} −${del}`, kind: "diff" };
  }
  return { text: BRANCH_NAMES[Math.floor(Math.random() * BRANCH_NAMES.length)], kind: "branch" };
}

export function GitGraphField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let strands: Strand[] = [];
    let labels: Label[] = [];
    let comets: Comet[] = [];
    let particles: Particle[] = [];
    let lastSpawn = 0;
    let lastComet = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : 500;
      canvas!.width = width * devicePixelRatio;
      canvas!.height = height * devicePixelRatio;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const rowHeight = 46;
      const count = Math.ceil(height / rowHeight) + 4;

      const build = (laneCount: number, xStart: number, xEnd: number, seed: number, speed: number, opacity: number): Strand => {
        const laneXs = Array.from({ length: laneCount }, (_, i) =>
          laneCount === 1 ? (xStart + xEnd) / 2 : xStart + (i * (xEnd - xStart)) / (laneCount - 1)
        );
        return {
          rows: buildRows(laneCount, count, seed),
          laneXs,
          rowHeight,
          offset: 0,
          speed,
          opacity,
        };
      };

      strands = [
        build(3, width * 0.04, width * 0.22, 11, 8, 0.5),
        build(3, width * 0.72, width * 0.98, 47, 5.5, 0.35),
        build(2, width * 0.4, width * 0.6, 91, 6.8, 0.22),
        build(2, width * 0.26, width * 0.37, 23, 7.2, 0.28),
        build(2, width * 0.63, width * 0.71, 68, 6.2, 0.24),
      ];
      labels = [];
      comets = [];

      const particleCount = Math.round((width * height) / 26000);
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 2 + Math.random() * 6,
        r: 0.5 + Math.random() * 1.1,
        alpha: 0.15 + Math.random() * 0.35,
      }));
    }

    function drawStrand(strand: Strand, time: number, branchPoints: Point[]) {
      const { rows, laneXs, rowHeight, opacity } = strand;
      const totalHeight = rows.length * rowHeight;
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const lineColor = isLight ? `rgba(90,70,20,${0.16 * opacity})` : `rgba(240,190,110,${0.22 * opacity})`;
      const dotColor = isLight ? `rgba(160,110,10,${0.55 * opacity})` : `rgba(245,170,60,${0.7 * opacity})`;
      const branchColor = isLight ? `rgba(30,120,60,${0.6 * opacity})` : `rgba(100,220,140,${0.85 * opacity})`;
      const pingColor = isLight ? "30,120,60" : "120,230,160";

      const pulsePeriod = 2200;
      const pulsePhase = ((time % pulsePeriod) / pulsePeriod);

      for (const shift of [-totalHeight, 0, totalHeight]) {
        for (let i = 0; i < rows.length - 1; i++) {
          const a = rows[i];
          const b = rows[i + 1];
          const ay = i * rowHeight - strand.offset + shift;
          const by = (i + 1) * rowHeight - strand.offset + shift;
          if (by < -rowHeight || ay > height + rowHeight) continue;

          ctx!.strokeStyle = lineColor;
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.moveTo(laneXs[a.lane], ay);
          if (a.lane === b.lane) {
            ctx!.lineTo(laneXs[b.lane], by);
          } else {
            const midY = (ay + by) / 2;
            ctx!.bezierCurveTo(laneXs[a.lane], midY, laneXs[b.lane], midY, laneXs[b.lane], by);
          }
          ctx!.stroke();

          ctx!.fillStyle = b.branchPoint ? branchColor : dotColor;
          ctx!.beginPath();
          ctx!.arc(laneXs[b.lane], by, b.branchPoint ? 2.6 : 1.8, 0, Math.PI * 2);
          ctx!.fill();

          if (b.branchPoint) {
            if (shift === 0) branchPoints.push({ x: laneXs[b.lane], y: by });
            if (!prefersReducedMotion) {
              const ringRadius = 3 + pulsePhase * 11;
              const ringAlpha = (1 - pulsePhase) * 0.55 * opacity;
              ctx!.strokeStyle = `rgba(${pingColor},${ringAlpha})`;
              ctx!.lineWidth = 1;
              ctx!.beginPath();
              ctx!.arc(laneXs[b.lane], by, ringRadius, 0, Math.PI * 2);
              ctx!.stroke();
            }
          }
        }
      }
    }

    function labelColor(kind: LabelKind, isLight: boolean, alpha: number) {
      if (kind === "branch") {
        return isLight ? `rgba(150,90,10,${alpha * 0.8})` : `rgba(245,180,90,${alpha * 0.9})`;
      }
      if (kind === "diff") {
        return isLight ? `rgba(20,110,60,${alpha * 0.75})` : `rgba(150,240,190,${alpha * 0.85})`;
      }
      return isLight ? `rgba(60,60,70,${alpha * 0.65})` : `rgba(210,212,220,${alpha * 0.75})`;
    }

    function drawComet(c: Comet, time: number, isLight: boolean) {
      const t = (time - c.born) / c.life;
      const y = height + 20 - t * (height + 60);
      const tailLen = 70;
      const color = isLight ? "20,130,110" : "150,240,220";

      const grad = ctx!.createLinearGradient(c.x, y, c.x, y + tailLen);
      grad.addColorStop(0, `rgba(${color},0.85)`);
      grad.addColorStop(1, `rgba(${color},0)`);
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      ctx!.moveTo(c.x, y);
      ctx!.lineTo(c.x, y + tailLen);
      ctx!.stroke();

      ctx!.fillStyle = `rgba(${color},0.95)`;
      ctx!.beginPath();
      ctx!.arc(c.x, y, 2.4, 0, Math.PI * 2);
      ctx!.fill();
    }

    function drawParticles(isLight: boolean) {
      const color = isLight ? "70,70,90" : "200,205,220";
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.y -= p.vy / 60;
          if (p.y < -4) {
            p.y = height + 4;
            p.x = Math.random() * width;
          }
        }
        ctx!.fillStyle = `rgba(${color},${p.alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);
      const branchPoints: Point[] = [];
      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      drawParticles(isLight);

      for (const strand of strands) {
        if (!prefersReducedMotion) {
          const totalHeight = strand.rows.length * strand.rowHeight;
          strand.offset = (strand.offset + strand.speed / 60) % totalHeight;
        }
        drawStrand(strand, time, branchPoints);
      }

      if (!prefersReducedMotion) {
        if (time - lastSpawn > 1100 && branchPoints.length > 0 && labels.length < 7) {
          lastSpawn = time;
          const p = branchPoints[Math.floor(Math.random() * branchPoints.length)];
          const { text, kind } = randomLabel();
          labels.push({ x: p.x, y: p.y, text, kind, born: time, life: 3000 });
        }
        labels = labels.filter((l) => time - l.born < l.life);

        ctx!.font = "10px 'JetBrains Mono', monospace";
        for (const l of labels) {
          const t = (time - l.born) / l.life;
          const alpha = t < 0.15 ? t / 0.15 : t > 0.65 ? Math.max(0, (1 - t) / 0.35) : 1;
          const y = l.y - t * 16;
          ctx!.fillStyle = labelColor(l.kind, isLight, alpha);
          ctx!.fillText(l.kind === "branch" ? `⎇ ${l.text}` : l.text, l.x + 9, y + 3);
        }

        if (time - lastComet > 1500 && comets.length < 4) {
          lastComet = time;
          const strand = strands[Math.floor(Math.random() * strands.length)];
          const laneX = strand.laneXs[Math.floor(Math.random() * strand.laneXs.length)];
          comets.push({ x: laneX, y: height + 20, born: time, life: 1000 + Math.random() * 500 });
        }
        comets = comets.filter((c) => time - c.born < c.life);
        for (const c of comets) drawComet(c, time, isLight);
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
