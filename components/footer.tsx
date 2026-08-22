import Link from "next/link";
import Logo from "./logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Start chatting", href: "/chat" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Safety", href: "/#safety" },
      { label: "Privacy", href: "/#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-canvas-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              SafeSpeak uses AI where it adds value — language understanding,
              translation, moderation, and matching. It does not diagnose users or
              replace professional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-ink">{column.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted transition hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SafeSpeak. All rights reserved.</p>
          <p>
            In a crisis? Contact your local emergency number or a crisis hotline
            immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
