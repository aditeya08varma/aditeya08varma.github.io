import { SkillsStack } from "./SkillsStack";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="text-center">
        <span className="eyebrow">Toolbox</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
      </div>

      <SkillsStack />
    </section>
  );
}
