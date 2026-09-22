import { motion } from "framer-motion";
import { about, profile } from "../data/content";

export function About() {
  const initials = "AVK";
  return (
    <section id="about" className="section">
      <span className="eyebrow">~/about</span>
      <div className="mt-6 grid gap-10 md:grid-cols-[auto,1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl text-3xl font-bold text-black md:mx-0"
          style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))" }}
        >
          {initials}
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h2>
          <div className="mt-5 space-y-4" style={{ color: "var(--muted)" }}>
            {about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: "var(--brand-b)" }}>
            📌 {profile.status}.
          </p>
        </div>
      </div>
    </section>
  );
}
