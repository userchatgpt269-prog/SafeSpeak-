import { Fingerprint, Globe, Lock, ShieldAlert, Users, Zap } from "lucide-react";
import Reveal from "./reveal";

const FEATURES = [
  {
    icon: Fingerprint,
    title: "Anonymous identity",
    body: "You're given a random alias for every conversation. No names, no profiles to trace.",
  },
  {
    icon: Globe,
    title: "Real-time translation",
    body: "Messages are translated as you type, across dozens of languages, in both directions.",
  },
  {
    icon: ShieldAlert,
    title: "AI safety detection",
    body: "Every conversation is quietly screened for signs of crisis, abuse, or harm as it happens.",
  },
  {
    icon: Users,
    title: "Smart matching",
    body: "You're paired based on what you need to talk about and when you're available — not by chance.",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    body: "Conversations are encrypted in transit and are never sold or shared with advertisers.",
  },
  {
    icon: Zap,
    title: "Instant escalation",
    body: "If something looks serious, a trained human moderator can step in within moments.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Built for the moment you actually need it
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Every feature exists to remove a reason not to reach out.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 80}>
            <div className="h-full rounded-2xl border border-black/5 bg-canvas-card p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
