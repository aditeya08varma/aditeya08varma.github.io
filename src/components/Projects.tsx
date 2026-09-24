import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects, moreProjects } from "../data/content";

type Project = {
  name: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  tags: string[];
  repo: string;
  live?: string;
};

const allProjects: Project[] = [...featuredProjects, ...moreProjects];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card flex w-[340px] shrink-0 flex-col p-5 sm:w-[380px]">
      {p.subtitle && (
        <div className="font-mono text-xs" style={{ color: "var(--brand-a)" }}>{p.subtitle}</div>
      )}
      <h3 className={`text-lg font-semibold ${p.subtitle ? "mt-1" : ""}`}>{p.name}</h3>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{p.description}</p>
      {p.bullets && (
        <ul className="mt-3 space-y-1.5 text-xs" style={{ color: "var(--muted)" }}>
          {p.bullets.map((b, bi) => (
            <li key={bi} className="flex gap-2">
              <span style={{ color: "var(--brand-b)" }}>▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex gap-3 pt-1">
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--fg)" }}
        >
          <Github size={15} /> View Code
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "var(--brand-a)" }}
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectsCarousel() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = 44; // px/sec
    let raf = 0;
    let lastTime = performance.now();

    function step(time: number) {
      const el2 = viewportRef.current;
      if (el2) {
        const dt = (time - lastTime) / 1000;
        if (!pausedRef.current && !prefersReducedMotion) {
          el2.scrollLeft += speed * dt;
        }
        const half = el2.scrollWidth / 2;
        if (half > 0 && el2.scrollLeft >= half) {
          el2.scrollLeft -= half;
        }
      }
      lastTime = time;
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
    const scheduleResume = () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 1500);
    };

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", scheduleResume);
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", scheduleResume);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", scheduleResume);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", scheduleResume);
    };
  }, []);

  return (
    <div
      ref={viewportRef}
      className="marquee-viewport -mx-4 px-4 sm:-mx-6 sm:px-6"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="marquee-track gap-6 py-1">
        {[...allProjects, ...allProjects].map((p, i) => (
          <ProjectCard key={`${p.name}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="text-center">
        <span className="eyebrow">Selected work</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <ProjectsCarousel />
      </motion.div>
    </section>
  );
}
