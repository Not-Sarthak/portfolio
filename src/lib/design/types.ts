import type { ComponentType } from "react";

/** T-shirt size → bento span. See `sizeToSpan` in ./grid. */
export type ExperimentSize = "sm" | "md" | "lg" | "wide";

export interface ExperimentMeta {
  title: string;
  /** ISO date, e.g. "2026-07-13". */
  date: string;
  size: ExperimentSize;
  tags: string[];
  description: string;
  /** Copy-able prompt to regenerate this effect. Shown on the detail page. */
  prompt?: string;
  credits?: {
    company?: string;
    study?: string;
  };
}

/** A single tunable control. The framework renders UI from this. */
export type Control =
  | { type: "range"; min: number; max: number; step?: number; unit?: string; label?: string }
  | { type: "color"; label?: string }
  | { type: "select"; options: string[]; label?: string }
  | { type: "toggle"; label?: string }
  | { type: "text"; placeholder?: string; label?: string };

export type Controls<P> = Partial<Record<keyof P, Control>>;

/** Named parameter snapshots the playground can jump to. */
export type Presets<P> = Record<string, Partial<P>>;

/**
 * What each file in src/components/design must/can export.
 * Only `meta` and a default component are required. Everything else is optional;
 * a component with no `controls` simply renders without a playground editor.
 */
export interface ExperimentModule<P extends Record<string, unknown> = Record<string, unknown>> {
  meta: ExperimentMeta;
  /** Default parameter values. Omit for components that take no props. */
  params?: P;
  controls?: Controls<P>;
  presets?: Presets<P>;
  default: ComponentType<P>;
  /** Optional bespoke grid-preview (e.g. a fixed multi-tile card). Falls back to
   *  the default component rendered with default params. */
  Card?: ComponentType;
}

/** A discovered experiment, keyed by its file slug. */
export interface Experiment<P extends Record<string, unknown> = Record<string, unknown>> {
  slug: string;
  meta: ExperimentMeta;
  params: P;
  controls: Controls<P>;
  presets: Presets<P>;
  Component: ComponentType<P>;
  Card?: ComponentType;
}
