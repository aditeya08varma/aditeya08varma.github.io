import { motion } from "framer-motion";
import { education, publications } from "../data/content";
import { FileText, ArrowUpRight } from "lucide-react";

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

      <div className="mt-24">
        <div className="text-center">
          <span className="eyebrow">Research</span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">Publications</h3>
        </div>
        <div className="mt-6 space-y-3">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex gap-4 p-5"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "color-mix(in srgb, var(--brand-a) 15%, transparent)" }}
                >
                  <FileText size={16} style={{ color: "var(--brand-a)" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-semibold leading-snug">{pub.title}</h4>
                    <ArrowUpRight size={16} className="shrink-0" style={{ color: "var(--brand-a)" }} />
                  </div>
                  <div className="mt-1 font-mono text-xs" style={{ color: "var(--muted)" }}>
                    {pub.venue}
                  </div>
                  <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{pub.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
