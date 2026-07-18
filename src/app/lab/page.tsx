import Link from "next/link";
import { BentoGrid } from "@/components/lab/bento-grid";

export default function LabPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Lab</h1>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          ← home
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        a place for design engineering experiments i do on the side.
      </p>
      <div className="mt-8">
        <BentoGrid />
      </div>
    </main>
  );
}
