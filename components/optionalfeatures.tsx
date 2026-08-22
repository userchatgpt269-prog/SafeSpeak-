import { BellRing, CalendarClock, Compass, LifeBuoy } from "lucide-react";
import Reveal from "./reveal";

const OPTIONS = [
  {
    icon: Compass,
    title: "Topic preferences",
    body: "Tell us what you'd like to talk about so we can match you with someone who gets it.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled check-ins",
    body: "Set up a recurring time to talk with the same listener, if that feels better than starting over.",
  },
  {
    icon: BellRing,
    title: "Mood check-ins",
    body: "Optional daily prompts to notice patterns in how you're doing — visible only to you.",
  },
  {
    icon: LifeBuoy,
    title: "Crisis resource library",
    body: "Quick access to hotlines and local services, available whether or not you're mid-conversation.",
  },
];

export default function OptionalFeatures() {
  return (
    <section className="bg-canvas-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Entirely optional
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Add what helps. Skip what doesn&apos;t.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            SafeSpeak works with none of this turned on. These are here if you want
            more structure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {OPTIONS.map((option, index) => (
            <Reveal key={option.title} delay={index * 90}>
              <div className="flex items-start gap-4 rounded-2xl bg-canvas p-6 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <option.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{option.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {option.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
