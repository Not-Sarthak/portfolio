import Link from "next/link";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Wins",
};

const GROUPS = [
  { type: "hackathon", label: "hackathons" },
  { type: "fellowship", label: "fellowships & honors" },
  { type: "other", label: "misc" },
] as const;

export default function WinsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Wins</h1>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          ← home
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        hackathons i&apos;ve won, and fellowships i&apos;ve been part of.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        {GROUPS.map(({ type, label }) => {
          const items = DATA.highlightedWins.filter(
            (w) => (w.type as string) === type
          );
          if (items.length === 0) return null;
          return (
            <div key={type}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-foreground font-bold uppercase tracking-widest">
                  {label}
                </span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div>
                {items.map((win) => (
                  <div key={win.name} className="py-0.5 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="min-w-0">
                        <span className="inline-block w-20">{win.place}</span>
                        {win.name}
                      </span>
                      <span className="text-gray-400 shrink-0">{win.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
