"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Languages, LifeBuoy, Send, ShieldCheck } from "lucide-react";
import {
  containsSafetyKeyword,
  generateAlias,
  getDemoReply,
  LANGUAGES,
  translateDemoPhrase,
  type DemoLang,
} from "@/lib/demo-chat";

type ChatMessage = {
  id: number;
  from: "you" | "partner";
  text: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 0,
  from: "partner",
  text: "Hi, I'm here. This is a safe, anonymous space — take your time.",
};

export default function AnonymousChat() {
  const [alias] = useState(() => generateAlias(7));
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [draft, setDraft] = useState("");
  const [translateOn, setTranslateOn] = useState(false);
  const [lang, setLang] = useState<DemoLang>("es");
  const [safetyNotice, setSafetyNotice] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  function sendMessage() {
    const text = draft.trim();
    if (!text) return;

    const userMessage: ChatMessage = { id: nextId.current++, from: "you", text };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setSafetyNotice(containsSafetyKeyword(text));
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = getDemoReply(text);
      setMessages((prev) => [...prev, { id: nextId.current++, from: "partner", text: reply }]);
      setIsTyping(false);
    }, 900 + Math.min(text.length * 20, 900));
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-canvas-card p-4 shadow-card">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-bright animate-pulse-soft" />
          <div>
            <p className="text-sm font-semibold text-ink">You are {alias}</p>
            <p className="text-xs text-ink-soft">Demo conversation · nothing is saved</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setTranslateOn((v) => !v)}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            translateOn ? "bg-navy text-white" : "bg-canvas text-ink-muted hover:text-ink"
          }`}
        >
          <Languages className="h-3.5 w-3.5" />
          Translate for me
        </button>
      </div>

      {translateOn && (
        <div className="flex items-center gap-2 rounded-2xl bg-teal-soft px-4 py-2.5">
          <span className="text-xs font-medium text-teal">Show translations in</span>
          <select
            value={lang}
            onChange={(event) => setLang(event.target.value as DemoLang)}
            className="rounded-full border-0 bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-card"
          >
            {LANGUAGES.filter((l) => l.code !== "en").map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {safetyNotice && (
        <div className="flex items-start gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold">This looks serious.</p>
            <p className="mt-1">
              This demo can&apos;t provide real crisis support. If you or someone else
              is in danger, please contact your local emergency number or a crisis
              hotline right away.
            </p>
          </div>
        </div>
      )}

      <div
        ref={scrollRef}
        className="flex h-[26rem] flex-col gap-3 overflow-y-auto rounded-3xl bg-canvas-card p-5 shadow-mock"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`animate-msg-in flex flex-col ${
              message.from === "you" ? "items-end self-end" : "items-start self-start"
            }`}
          >
            <div
              className={`max-w-sm rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                message.from === "you"
                  ? "rounded-br-sm bg-navy text-white"
                  : "rounded-bl-sm bg-canvas text-ink"
              }`}
            >
              {message.text}
            </div>
            {translateOn && message.from === "partner" && (
              <p className="mt-1 max-w-sm text-xs italic text-ink-soft">
                {translateDemoPhrase("reply", lang)}
              </p>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="self-start rounded-2xl rounded-bl-sm bg-canvas px-4 py-2.5 text-sm text-ink-soft">
            typing…
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 rounded-full bg-canvas-card p-2 shadow-card">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") sendMessage();
          }}
          placeholder="Type what's on your mind…"
          className="flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-ink outline-none placeholder:text-ink-soft"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white transition hover:bg-navy-deep"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-teal" />
          Monitored for safety
        </span>
        <span className="inline-flex items-center gap-1.5">
          <LifeBuoy className="h-3.5 w-3.5 text-teal" />
          Not a substitute for professional care
        </span>
      </div>
    </div>
  );
}
