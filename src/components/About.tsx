import { motion } from "framer-motion";
import { about, profile } from "../data/content";

export function About() {
  return (
    <section id="about" className="section text-center">
      <span className="eyebrow">~/about</span>

      <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        About Me
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
