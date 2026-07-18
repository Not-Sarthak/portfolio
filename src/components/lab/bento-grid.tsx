"use client";

import { experiments } from "@/lib/design/registry";
import { GRID_CLASS } from "@/lib/design/grid";
import { ExperimentCard } from "./experiment-card";

export function BentoGrid() {
  if (experiments.length === 0) {
    return (
      <p className="text-sm text-gray-400">
        no experiments yet — drop a component in{" "}
        <code className="text-gray-500">src/components/design</code>.
      </p>
    );
  }

  return (
    <div className={GRID_CLASS}>
      {experiments.map((experiment) => (
        <ExperimentCard key={experiment.slug} experiment={experiment} />
      ))}
    </div>
  );
}
