"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { LANGUAGES, translateDemoPhrase, type DemoLang } from "@/lib/demo-chat";

export default function TranslationDemo() {
  const [lang, setLang] = useState<DemoLang>("es");

  return (
    <div className="rounded-3xl bg-canvas-card p-6 shadow-mock ring-1 ring-black/5 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-ink-muted">Live translation demo</p>
        <div className="flex items-center gap-2 rounded-full bg-canvas p-1">
          {LANGUAGES.filter((l) => l.code !== "en").map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                lang === l.code ? "bg-navy text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-2xl bg-canvas p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            They wrote (English)
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            {translateDemoPhrase("default", "en")}
          </p>
        </div>

        <ArrowRightLeft className="mx-auto h-5 w-5 rotate-90 text-teal md:rotate-0" />

        <div className="rounded-2xl bg-teal-soft p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal">
            You read ({LANGUAGES.find((l) => l.code === lang)?.label})
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            {translateDemoPhrase("default", lang)}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-ink-soft">
        Every message is translated both ways, instantly — nobody has to switch
        languages to be understood.
      </p>
    </div>
  );
}
