import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GitPullRequest, ArrowUpRight, BookOpen } from "lucide-react";
import { openSource } from "../data/content";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export function OpenSource() {
  return (
    <section id="open-source" className="section">
      <div className="text-center">
        <span className="eyebrow">Community</span>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Open Source Contributions</h2>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-sm font-semibold"
            style={{ borderColor: "var(--brand-a)", color: "var(--brand-a)" }}
          >
            <Counter to={openSource.mergedPRs} /> Merged PRs
          </motion.span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "var(--muted)" }}>
          {openSource.description}
        </p>
      </div>

      <div className="mt-8 space-y-3">
        {openSource.pullRequests.map((pr, i) => (
          <motion.div
            key={pr.number}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-4"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "color-mix(in srgb, var(--brand-a) 15%, transparent)" }}
              >
                <GitPullRequest size={16} style={{ color: "var(--brand-a)" }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{pr.title}</div>
                <div className="mt-0.5 font-mono text-xs" style={{ color: "var(--muted)" }}>
                  {openSource.repo} #{pr.number} · +{pr.additions} −{pr.deletions}
                </div>
              </div>
              <button
                type="button"
                title="Read the full story"
                aria-label="Read the full story"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(pr.story, "_blank", "noopener,noreferrer");
                }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors hover:border-[var(--brand-a)]"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <BookOpen size={15} />
              </button>
              <ArrowUpRight size={16} className="shrink-0" style={{ color: "var(--muted)" }} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
