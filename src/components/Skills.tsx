import { motion } from "framer-motion";
import { skills } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="section">
      <span className="eyebrow">Toolbox</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card p-5"
          >
            <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--brand-a)" }}>
              {group.label}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
