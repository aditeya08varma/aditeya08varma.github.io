import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="section text-center">
      <span className="eyebrow">Let's talk</span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Get In Touch
      </motion.h2>
      <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--muted)" }}>
        {profile.status}. Reach out, I'd love to talk about systems programming,
        distributed infrastructure, or anything you're building.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-black"
          style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))" }}
        >
          <Mail size={16} /> {profile.email}
        </a>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5" style={{ color: "var(--muted)" }}>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
}
