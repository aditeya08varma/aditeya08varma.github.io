import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects, moreProjects } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="section">
      <span className="eyebrow">Selected work</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card flex flex-col p-5"
          >
            <div className="font-mono text-xs" style={{ color: "var(--brand-a)" }}>{p.subtitle}</div>
            <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{p.description}</p>
            <ul className="mt-3 space-y-1.5 text-xs" style={{ color: "var(--muted)" }}>
              {p.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2">
                  <span style={{ color: "var(--brand-b)" }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
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
          </motion.div>
        ))}
      </div>

      <h3 className="mt-16 text-xl font-bold tracking-tight">More Projects</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card p-5 transition-colors hover:border-[var(--brand-a)]"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm font-semibold">{p.name}</h4>
              <Github size={15} style={{ color: "var(--muted)" }} />
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
