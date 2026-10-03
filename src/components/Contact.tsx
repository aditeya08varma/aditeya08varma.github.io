import { motion } from "framer-motion";
import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { profile } from "../data/content";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
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

      <div className="mt-8 flex justify-center">
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-black"
          style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))" }}
        >
          <Download size={16} /> Download Resume
        </a>
      </div>

      <SocialLinks className="mt-8 justify-center" />

      <button
        type="button"
        onClick={copyEmail}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs"
        style={{ color: "var(--muted)" }}
        aria-live="polite"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Email copied" : "Copy email address"}
      </button>
    </section>
  );
}
