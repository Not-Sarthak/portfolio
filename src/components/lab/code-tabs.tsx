"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

// SSR-safe layout effect (avoids the useLayoutEffect-on-server warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface CodeFile {
  name: string;
  /** Pre-highlighted HTML from shiki (server-rendered). */
  html: string;
  /** Raw source, for the copy button. */
  raw: string;
}

export function CodeTabs({ files }: { files: CodeFile[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mounted = useRef(false);
  const [pill, setPill] = useState({ left: 0, width: 0, animate: false });

  // Slide the active-tab pill to the selected tab (no animation on first paint).
  useIsomorphicLayoutEffect(() => {
    const el = tabRefs.current[active];
    if (!el) return;
    setPill({ left: el.offsetLeft, width: el.offsetWidth, animate: mounted.current });
    mounted.current = true;
  }, [active, files.length]);

  if (files.length === 0) return null;
  const file = files[active];

  async function copy() {
    try {
      await navigator.clipboard.writeText(file.raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-1 border-b border-gray-200 bg-gray-50 p-1.5">
        <div className="relative flex flex-1 gap-1 overflow-x-auto">
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 rounded-md bg-white shadow-sm ${
              pill.animate ? "transition-[left,width] duration-200 ease-out-cubic" : ""
            }`}
            style={{ left: pill.left, width: pill.width }}
          />
          {files.map((f, i) => (
            <button
              key={f.name}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setActive(i)}
              className={`relative z-10 shrink-0 whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out-cubic ${
                i === active ? "text-foreground" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="shrink-0 rounded-md p-1.5 text-gray-400 transition-colors duration-150 ease-out-cubic hover:bg-gray-100 hover:text-foreground"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>
      <div
        key={active}
        className="lab-fade-in lab-code overflow-x-auto p-4 text-xs"
        dangerouslySetInnerHTML={{ __html: file.html }}
      />
    </div>
  );
}
