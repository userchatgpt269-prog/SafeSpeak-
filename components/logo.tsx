import { Ear } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy text-white shadow-card">
        <Ear className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <span className="text-lg text-ink">
        Safe<span className="text-teal">Speak</span>
      </span>
    </span>
  );
}
