import { motion } from "framer-motion";
import { about, profile } from "../data/content";

export function About() {
  const initials = "AV";
  return (
    <section id="about" className="section text-center">
      <span className="eyebrow">~/about</span>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-bold text-black"
        style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))" }}
      >
        {initials}
      </motion.div>

      <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Get to know me
      </h2>

      <div
        className="mx-auto mt-6 max-w-2xl space-y-4 text-left"
        style={{ color: "var(--muted)" }}
      >
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
    </section>
  );
}
