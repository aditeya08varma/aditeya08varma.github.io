import { motion } from "framer-motion";
import { skills } from "../data/content";
import { Layers, Database, BrainCircuit, Server, Network, Wrench, Lightbulb, Code2 } from "lucide-react";

const STACK_ORDER: { label: string; icon: typeof Layers }[] = [
  { label: "Frontend", icon: Layers },
  { label: "Backend & Data", icon: Database },
  { label: "AI & ML", icon: BrainCircuit },
  { label: "Infra & Streaming", icon: Server },
  { label: "Systems & Networking", icon: Network },
  { label: "Tools & Practices", icon: Wrench },
  { label: "Concepts", icon: Lightbulb },
];

export function SkillsStack() {
  const ordered = STACK_ORDER.map((s) => ({ ...s, group: skills.find((g) => g.label === s.label) })).filter(
    (s): s is typeof s & { group: NonNullable<(typeof s)["group"]> } => Boolean(s.group)
  );
  const languages = skills.find((s) => s.label === "Languages")!;

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="relative">
        <div
          className="absolute left-[17px] top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(180deg, var(--brand-a), var(--brand-b), transparent)" }}
          aria-hidden="true"
        />

        <div className="space-y-4">
          {ordered.map(({ label, icon: Icon, group }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative flex items-start gap-4"
            >
              <div
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                style={{ background: "var(--bg)", borderColor: "var(--brand-a)", color: "var(--brand-a)" }}
              >
                <Icon size={15} />
              </div>
              <div className="card min-w-0 flex-1 p-4 sm:p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "var(--brand-a)" }}>
                  {label}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item.name} className="chip text-xs" style={{ color: "var(--fg)" }}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative mt-6 flex items-start gap-4 rounded-2xl p-4 sm:p-5"
        style={{ background: "color-mix(in srgb, var(--brand-a) 10%, var(--card))", border: "1px solid var(--brand-a)" }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg, var(--brand-a), var(--brand-b))", color: "black" }}
        >
          <Code2 size={15} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "var(--brand-a)" }}>
            Foundation: {languages.label}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {languages.items.map((item) => (
              <span key={item.name} className="chip text-xs" style={{ color: "var(--fg)" }}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
