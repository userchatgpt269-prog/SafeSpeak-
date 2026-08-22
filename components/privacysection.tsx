import { Eye, ShieldOff, Trash2 } from "lucide-react";
import Reveal from "./reveal";

const POINTS = [
  {
    icon: ShieldOff,
    title: "No real name, ever",
    body: "You're identified only by a randomly generated alias, for every single conversation.",
  },
  {
    icon: Eye,
    title: "We don't sell your data",
    body: "Conversations aren't used for advertising and aren't shared with third parties.",
  },
  {
    icon: Trash2,
    title: "Delete anytime",
    body: "End a chat and its contents whenever you want — nothing lingers by default.",
  },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-bright">
            Privacy first
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            What you say here stays yours
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
