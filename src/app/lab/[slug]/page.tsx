import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { ExperimentDetail } from "@/components/lab/experiment-detail";
import type { CodeFile } from "@/components/lab/code-tabs";

const DESIGN_DIR = path.join(process.cwd(), "src", "components", "design");

function experimentFiles(): { slug: string; file: string }[] {
  if (!fs.existsSync(DESIGN_DIR)) return [];
  return fs
    .readdirSync(DESIGN_DIR)
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => ({ slug: f.replace(/\.tsx$/, ""), file: path.join(DESIGN_DIR, f) }))
    .filter(({ file }) => fs.readFileSync(file, "utf8").includes("export const meta"));
}

export const dynamicParams = false;

export function generateStaticParams() {
  return experimentFiles().map(({ slug }) => ({ slug }));
}

export default async function ExperimentPage({
  params,
}: {
  params: { slug: string };
}) {
  const mainFile = path.join(DESIGN_DIR, `${params.slug}.tsx`);
  if (!fs.existsSync(mainFile)) notFound();

  // The wrapper file, plus every .ts/.tsx in a sibling folder of the same name.
  const sources: { name: string; file: string }[] = [
    { name: `${params.slug}.tsx`, file: mainFile },
  ];
  const folder = path.join(DESIGN_DIR, params.slug);
  if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
    for (const f of fs.readdirSync(folder).sort()) {
      if (/\.(ts|tsx)$/.test(f)) {
        sources.push({ name: `${params.slug}/${f}`, file: path.join(folder, f) });
      }
    }
  }

  const files: CodeFile[] = await Promise.all(
    sources.map(async ({ name, file }) => {
      const raw = fs.readFileSync(file, "utf8");
      const html = await codeToHtml(raw, {
        lang: name.endsWith(".tsx") ? "tsx" : "ts",
        theme: "github-light",
      });
      return { name, html, raw };
    }),
  );

  return <ExperimentDetail slug={params.slug} files={files} />;
}
