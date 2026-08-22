import { ShieldCheck } from "lucide-react";
import { MOCKUP_CONVERSATION } from "@/lib/demo-chat";

export default function ChatMockup() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-canvas-card p-5 shadow-mock ring-1 ring-black/5">
      <div className="mb-4 flex items-center justify-between border-b border-black/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-bright animate-pulse-soft" />
          <span className="text-sm font-semibold text-ink">QuietRiver</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-soft px-2.5 py-1 text-xs font-medium text-teal">
          <ShieldCheck className="h-3.5 w-3.5" />
          Anonymous
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {MOCKUP_CONVERSATION.map((message, index) => (
          <div
            key={message.id}
            className={`animate-msg-in ${message.from === "you" ? "self-end" : "self-start"}`}
            style={{ animationDelay: `${index * 350 + 200}ms` }}
          >
            <div
              className={`max-w-[15rem] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                message.from === "you"
                  ? "rounded-br-sm bg-navy text-white"
                  : "rounded-bl-sm bg-canvas text-ink"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
