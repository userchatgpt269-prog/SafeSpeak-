import { EyeOff, Globe, ShieldCheck, UserRound } from "lucide-react";

const ITEMS = [
  { icon: EyeOff, label: "Anonymous by default" },
  { icon: ShieldCheck, label: "AI-monitored for safety" },
  { icon: Globe, label: "Real-time translation" },
  { icon: UserRound, label: "No account required" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/5 bg-canvas-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-ink-muted">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
