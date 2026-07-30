import type {
  Controls,
  Experiment,
  ExperimentMeta,
  ExperimentModule,
  Presets,
} from "./types";

/**
 * Zero-touch discovery. Every `.tsx` in src/components/design that exports a
 * `meta` object becomes an experiment. Drop a file in that folder and it shows
 * up — no registration anywhere. (Adding a file during a running dev server
 * needs a restart so webpack re-evaluates this context.)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = (require as any).context("../../components/design", false, /\.tsx$/);

function build(): Experiment[] {
  const list: Experiment[] = [];

  for (const key of ctx.keys() as string[]) {
    const mod = ctx(key) as Partial<ExperimentModule>;
    if (!mod || !mod.meta || typeof mod.default !== "function") continue;

    const slug = key.replace(/^\.\//, "").replace(/\.tsx$/, "");

    list.push({
      slug,
      meta: mod.meta as ExperimentMeta,
      params: (mod.params ?? {}) as Record<string, unknown>,
      controls: (mod.controls ?? {}) as Controls<Record<string, unknown>>,
      presets: (mod.presets ?? {}) as Presets<Record<string, unknown>>,
      Component: mod.default,
      Card: mod.Card,
    });
  }

  // Oldest first by meta.date, then title — newest experiments land at the end.
  list.sort((a, b) => {
    const d = a.meta.date.localeCompare(b.meta.date);
    return d !== 0 ? d : a.meta.title.localeCompare(b.meta.title);
  });

  return list;
}

export const experiments: Experiment[] = build();

export const experimentSlugs: string[] = experiments.map((e) => e.slug);

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}
