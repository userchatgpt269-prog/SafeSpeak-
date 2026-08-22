import { AlertTriangle, Radar, ShieldCheck, UserCheck } from "lucide-react";
import Reveal from "./reveal";

const LAYERS = [
  {
    icon: Radar,
    title: "Continuous monitoring",
    body: "AI reviews conversations in real time for language associated with crisis, self-harm, or abuse.",
  },
  {
    icon: AlertTriangle,
    title: "Automatic flagging",
    body: "Concerning messages are flagged instantly and routed to a trained human — never handled silently.",
  },
  {
    icon: UserCheck,
    title: "Human review",
    body: "A real moderator decides what happens next. AI never has the final say on someone's safety.",
  },
  {
    icon: ShieldCheck,
    title: "Zero tolerance",
    body: "Harassment, grooming, or abuse ends a conversation immediately and permanently blocks the account.",
  },
];

export default function SafetySection() {
  return (
    <section id="safety" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">
          Safety, always on
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          A safety net that never clocks out
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Anonymity shouldn&apos;t mean nobody&apos;s watching out for you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {LAYERS.map((layer, index) => (
          <Reveal key={layer.title} delay={index * 90}>
            <div className="h-full rounded-2xl bg-canvas-card p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                <layer.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{layer.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
