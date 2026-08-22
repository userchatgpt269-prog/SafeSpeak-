import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ChatMockup from "./chatmockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal">
            <Sparkles className="h-3.5 w-3.5" />
            AI-assisted, human-centered
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Speak freely.
            <br />
            Stay <span className="text-teal">safe</span>.
          </h1>

          <p className="mt-5 max-w-md text-lg text-ink-muted">
            SafeSpeak is an anonymous space to talk through what&apos;s on your mind —
            with real-time translation, always-on safety monitoring, and no account
            required.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-navy-deep"
            >
              Start an anonymous chat
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-ink-muted transition hover:text-ink"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="animate-float">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
