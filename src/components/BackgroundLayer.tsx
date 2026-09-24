import { GitGraphField } from "./GitGraphField";

export function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{ background: "var(--bg)" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <GitGraphField />
    </div>
  );
}
