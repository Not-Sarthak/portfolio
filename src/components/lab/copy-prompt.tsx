"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label = "Copy prompt",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition-colors duration-150 ease-out-cubic hover:border-gray-300 hover:text-foreground ${className}`}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
