import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open Source" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          Aditeya Varma
        </a>

        <nav className="hidden gap-6 text-sm md:flex" style={{ color: "var(--muted)" }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-inherit">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border md:hidden"
            style={{ borderColor: "var(--border)" }}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t px-5 py-3 md:hidden"
          style={{ borderColor: "var(--border)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
