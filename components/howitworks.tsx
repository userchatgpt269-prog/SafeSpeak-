import { Ear, Globe2, MessageCircleHeart, ShieldCheck } from "lucide-react";
import Reveal from "./reveal";

const STEPS = [
  {
    icon: MessageCircleHeart,
    title: "Say what's on your mind",
    body: "Open a chat under an anonymous alias — no email, no sign-up, no real name.",
  },
  {
    icon: Ear,
    title: "Get matched with a listener",
    body: "We connect you with someone available to talk, or an AI-assisted companion if no one's free.",
  },
  {
    icon: Globe2,
    title: "Speak your language",
    body: "Messages are translated in real time, so language is never the reason you go unheard.",
  },
  {
    icon: ShieldCheck,
    title: "Stay protected the whole time",
    body: "AI quietly watches for signs of crisis or abuse and can bring in a human moderator instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          How SafeSpeak works
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Four quiet steps between you and someone who&apos;s listening.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 100}>
            <div className="h-full rounded-2xl bg-canvas-card p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <step.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
