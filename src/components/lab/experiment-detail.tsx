"use client";

import Link from "next/link";
import { getExperiment } from "@/lib/design/registry";
import { Playground } from "./playground";
import { CopyButton } from "./copy-prompt";
import { CodeTabs, type CodeFile } from "./code-tabs";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ExperimentDetail({
  slug,
  files,
}: {
  slug: string;
  files: CodeFile[];
}) {
  const experiment = getExperiment(slug);

  if (!experiment) {
    return (
      <main className="flex flex-col min-h-[100dvh]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Not found</h1>
          <Link href="/lab" className="text-sm text-gray-400 hover:text-foreground">
            ✕
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">no experiment named “{slug}”.</p>
      </main>
    );
  }

  const { meta } = experiment;

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">{meta.title}</h1>
        <Link
          href="/lab"
          aria-label="Back to lab"
          className="text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          ✕
        </Link>
      </div>

      <div className="mt-6">
        <Playground experiment={experiment} />
      </div>

      {meta.description && (
        <p className="mt-6 text-sm text-gray-600">{meta.description}</p>
      )}

      {files.length > 0 && (
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Code</h2>
            {meta.prompt && <CopyButton text={meta.prompt} />}
          </div>
          <CodeTabs files={files} />
        </div>
      )}

      <div className="mt-8 flex flex-col gap-1.5 border-t border-gray-200 pt-4 text-sm">
        {meta.credits?.company && (
          <div className="flex justify-between">
            <span className="text-gray-400">company</span>
            <span>{meta.credits.company}</span>
          </div>
        )}
        {meta.credits?.study && (
          <div className="flex justify-between">
            <span className="text-gray-400">study</span>
            <span>{meta.credits.study}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-400">date</span>
          <span>{formatDate(meta.date)}</span>
        </div>
        {meta.tags.length > 0 && (
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">tags</span>
            <span className="text-right">{meta.tags.join(", ")}</span>
          </div>
        )}
      </div>
    </main>
  );
}
