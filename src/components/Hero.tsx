import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GitCommitHorizontal, CheckCircle2, Download } from "lucide-react";
import { profile, tagPills, terminalLines } from "../data/content";

function TerminalBody() {
  const [shown, setShown] = useState(0);
  const done = shown >= terminalLines.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 300 : 550);
    return () => clearTimeout(t);
  }, [shown, done]);

  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm min-h-[190px]">
      {terminalLines.slice(0, shown).map((line, i) => (
        <div
          key={i}
          style={{
            color: line.prompt
              ? "var(--brand-a)"
              : line.accent
              ? "var(--ok)"
              : "var(--muted)",
          }}
        >
          {line.prompt ? "$ " : "  › "}
          {line.text}
        </div>
      ))}
      {done && (
        <div className="mt-2 flex items-center gap-1.5" style={{ color: "var(--ok)" }}>
          <CheckCircle2 size={13} />
          <span>build passed</span>
          <span className="cursor-blink ml-1" style={{ color: "var(--fg)" }}>
            ▊
          </span>
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const [pillIndex, setPillIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPillIndex((i) => (i + 1) % 2), 2600);
    return () => clearInterval(t);
  }, []);

  const active = pillIndex === 0 ? [tagPills[0], tagPills[1]] : [tagPills[2], tagPills[3]];

  return (
    <section id="top" className="relative">
      <div className="section relative grid gap-10 pb-16 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {profile.location} · {profile.status}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="outline-text block">{profile.firstLine}</span>
            <span className="text-gradient block">{profile.secondLine}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base sm:text-lg"
            style={{ color: "var(--muted)" }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {active.map((pill) => (
              <span key={pill.text} className="chip">
                {pill.plus ? "+ " : "× "}
                {pill.text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-black"
              style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border px-5 py-2.5 text-sm font-semibold"
              style={{ borderColor: "var(--border)" }}
            >
              Get In Touch
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold"
              style={{ borderColor: "var(--border)" }}
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
            style={{ color: "var(--muted)" }}
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: "var(--border)" }}>
              <GitCommitHorizontal size={14} style={{ color: "var(--brand-a)" }} />
              <span className="font-mono text-xs" style={{ color: "var(--fg)" }}>
                build #142 · main
              </span>
              <span
                className="ml-auto flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px]"
                style={{ color: "var(--ok)", background: "color-mix(in srgb, var(--ok) 15%, transparent)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ok)" }} />
                passing
              </span>
            </div>
            <TerminalBody />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
