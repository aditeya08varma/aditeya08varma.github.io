import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { profile, tagPills, currently } from "../data/content";
import { SocialLinks } from "./SocialLinks";

function ProfileCard() {
  return (
    <div className="card relative mx-auto w-full max-w-md overflow-hidden p-7 shadow-2xl md:ml-auto md:mr-0">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-a), transparent)" }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-60 blur-3xl"
        style={{ background: "color-mix(in srgb, var(--brand-a) 16%, transparent)" }}
      />

      <div className="relative flex items-center gap-5">
        <div
          className="shrink-0 rounded-full p-[2px]"
          style={{
            background: "linear-gradient(135deg, #990000 0%, #990000 50%, #FFCC00 100%)",
            boxShadow: "0 8px 20px -8px rgba(153,0,0,0.55)",
          }}
        >
          <div
            className="h-24 w-24 overflow-hidden rounded-full border-[3px] sm:h-28 sm:w-28"
            style={{ borderColor: "var(--card)" }}
          >
            <img
              src={profile.photo}
              alt="Aditeya Varma"
              className="h-full w-full object-cover"
              style={{ transform: "scale(1.7)", transformOrigin: "52% 40%" }}
            />
          </div>
        </div>

        <div className="min-w-0">
          <div className="text-xl font-semibold tracking-tight">Software Engineer</div>
          <div
            className="mt-2 space-y-1 font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: "var(--muted)" }}
          >
            <div>MS CS, USC 2026</div>
            <div className="inline-flex items-center gap-1">
              <MapPin size={11} /> {profile.location}
            </div>
          </div>
        </div>
      </div>

      <dl className="relative mt-6 text-sm">
        {currently.map((c) => (
          <div
            key={c.label}
            className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-t py-3"
            style={{ borderColor: "var(--border)" }}
          >
            <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--brand-a)" }}>
              {c.label}
            </dt>
            <dd style={{ color: "color-mix(in srgb, var(--fg) 78%, var(--muted))" }}>{c.text}</dd>
          </div>
        ))}
      </dl>
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
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}
