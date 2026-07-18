import type { ExperimentSize } from "./types";

/**
 * T-shirt size → bento span, on a 4-col desktop grid (2-col on mobile).
 * Class strings are static literals so Tailwind's JIT can see them.
 */
export const sizeToSpan: Record<ExperimentSize, string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-2 row-span-1",
  lg: "col-span-2 row-span-2",
  wide: "col-span-2 sm:col-span-4 row-span-2",
};

export const GRID_CLASS =
  "grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] gap-3";
