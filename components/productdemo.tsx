import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";
import TranslationDemo from "./translationdemo";

export default function ProductDemo() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal className="text-white">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Language is never the barrier.
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/70">
            SafeSpeak translates every conversation in real time, so you can be
            matched with the right listener — not just the nearest one.
          </p>
          <Link
            href="/chat"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-teal-soft"
          >
            Try it yourself
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <TranslationDemo />
        </Reveal>
      </div>
    </section>
  );
}
