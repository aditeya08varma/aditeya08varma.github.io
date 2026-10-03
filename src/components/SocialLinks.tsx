import type { CSSProperties, ReactNode } from "react";
import { profile } from "../data/content";

const GITHUB_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z";

type Item = { label: string; href: string; external: boolean; tile: string; glow: string; icon: ReactNode };

const glyph = (d: string) => (
  <svg viewBox="0 0 24 24" className="h-[1.35rem] w-[1.35rem]" fill="#fff" aria-hidden="true">
    <path d={d} />
  </svg>
);

const ITEMS: Item[] = [
  {
    label: "GitHub",
    href: profile.github,
    external: true,
    tile: "linear-gradient(145deg, #3a3f47 0%, #1b1f24 55%, #0d1117 100%)",
    glow: "rgba(163, 113, 247, 0.55)",
    icon: glyph(GITHUB_PATH),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
    tile: "linear-gradient(145deg, #2f8fe0 0%, #0a66c2 55%, #004182 100%)",
    glow: "rgba(10, 102, 194, 0.65)",
    icon: glyph(LINKEDIN_PATH),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    tile: "linear-gradient(145deg, #ffffff 0%, #eef1f4 100%)",
    glow: "rgba(234, 67, 53, 0.55)",
    icon: (
      <svg viewBox="52 42 88 66" className="h-[1.3rem] w-[1.7rem]" aria-hidden="true">
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
      </svg>
    ),
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {ITEMS.map(({ label, href, external, tile, glow, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="social-btn"
          style={{ background: tile, "--glow": glow } as CSSProperties}
          title={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
