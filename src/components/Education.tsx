import { motion } from "framer-motion";
import { education } from "../data/content";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="text-center">
        <span className="eyebrow">Academics</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="card flex h-full flex-col p-6">
              <div className="font-semibold">{e.school}</div>
              <div className="mt-1.5 text-sm" style={{ color: "var(--muted)" }}>{e.degree}</div>
              <div
                className="mt-4 space-y-1 border-t pt-4 font-mono text-xs"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <div>{e.dates}</div>
                <div>{e.meta}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
