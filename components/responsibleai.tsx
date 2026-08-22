import { HeartHandshake } from "lucide-react";
import Reveal from "./reveal";

export default function ResponsibleAi() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <Reveal>
        <div className="flex flex-col gap-5 rounded-3xl border border-teal/20 bg-teal-soft p-8 sm:flex-row sm:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal shadow-card">
            <HeartHandshake className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-ink">
              AI supports the conversation — it doesn&apos;t replace care
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              SafeSpeak uses AI where it genuinely helps: understanding language,
              translating in real time, moderating for safety, and matching you with
              the right listener. It does not diagnose conditions, offer medical or
              psychological treatment, or replace a licensed professional. If you or
              someone else is in immediate danger, please contact your local
              emergency number or a crisis hotline right away.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
