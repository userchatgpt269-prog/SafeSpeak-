import Reveal from "./reveal";

const POINTS = [
  "Afraid of being recognized or judged by people you know",
  "No one nearby who speaks your language or understands your situation",
  "Support lines that are closed, slow, or don't fit how you communicate",
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Talking to someone shouldn&apos;t come with a price.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Most people who need to talk hold back — not because they don&apos;t want
            help, but because reaching out feels risky.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="flex flex-col gap-5">
            {POINTS.map((point) => (
              <li
                key={point}
                className="rounded-2xl bg-canvas-card p-5 text-ink-muted shadow-card"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
