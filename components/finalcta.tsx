import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-canvas-card px-8 py-16 text-center shadow-mock">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          You don&apos;t have to say it alone.
        </h2>
        <p className="max-w-lg text-lg text-ink-muted">
          No sign-up, no name, no waiting room. Just a conversation, whenever
          you&apos;re ready.
        </p>
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white shadow-lift transition hover:bg-navy-deep"
        >
          Start an anonymous chat
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
