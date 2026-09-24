import { motion } from "framer-motion";
import { experience } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="text-center">
        <span className="eyebrow">Career so far</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
      </div>

      <div className="relative mt-10 space-y-10 border-l pl-8" style={{ borderColor: "var(--border)" }}>
        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span
              className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2"
              style={{ borderColor: "var(--brand-a)", background: "var(--bg)" }}
            />
            <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>{job.dates}</div>
            <div className="mt-1 text-lg font-semibold">{job.role}</div>
            <div className="font-mono text-sm" style={{ color: "var(--brand-b)" }}>
              {job.org} · {job.location}
            </div>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {job.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2">
                  <span style={{ color: "var(--brand-a)" }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
