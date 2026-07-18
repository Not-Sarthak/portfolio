import Link from "next/link";
import type { Experiment } from "@/lib/design/types";
import { sizeToSpan } from "@/lib/design/grid";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase();
}

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const { slug, meta, params, Component, Card } = experiment;

  return (
    <Link
      href={`/lab/${slug}`}
      className={`${sizeToSpan[meta.size]} group flex flex-col rounded-2xl border border-gray-200 bg-white p-2 transition-colors duration-150 ease-out-cubic hover:border-gray-300`}
    >
      <div className="relative flex-1 overflow-hidden rounded-[7px] bg-gray-50">
        <div className="absolute inset-0">
          {Card ? <Card /> : <Component {...(params as Record<string, never>)} />}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 px-1 pt-2 pb-0.5">
        <span className="truncate text-sm">{meta.title}</span>
        <span className="shrink-0 text-[13px] tabular-nums text-gray-400">
          {formatDate(meta.date)}
        </span>
      </div>
    </Link>
  );
}
