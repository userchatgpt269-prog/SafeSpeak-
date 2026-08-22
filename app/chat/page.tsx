import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/logo";
import AnonymousChat from "@/components/anonymouschat";

export const metadata: Metadata = {
  title: "Anonymous chat — SafeSpeak",
  description: "Try SafeSpeak's anonymous, translated, AI-monitored chat demo.",
};

export default function ChatPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <header className="border-b border-black/5 bg-canvas/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <AnonymousChat />
      </main>
    </div>
  );
}
