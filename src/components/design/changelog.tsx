"use client";

import { useEffect, useRef, useState } from "react";
import { CHANGES, type Change } from "./changelog/data";
import { ICONS } from "./changelog/icons";

export const meta = {
  title: "Changelog",
  date: "2026-07-17",
  size: "lg" as const,
  tags: ["UI", "Timeline"],
  description:
    "A scroll-driven changelog ruler. Dated pill markers glide past a fixed playhead as you scroll the panel, the marker under the head reading as active.",
  prompt:
    "Build a scroll-driven changelog ruler in React on a dark panel: a baseline with minor and major ticks (a major tick under each dated change) plus pill markers (icon + label). Scrolling the panel drifts the track past a fixed playhead near the left edge, and the marker nearest the head reads as active. Control for background colour.",
};

export const params = {
  bg: "#0a0a0c",
};

export const controls = {
  bg: { type: "color", label: "Background" },
} as const;

export const presets = {
  Ink: { bg: "#0a0a0c" },
  Navy: { bg: "#0a0f1c" },
  Plum: { bg: "#120a16" },
};

type Params = typeof params;

const SANS = "ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const SPACING = 168; // gap between changes, sets the ruler scale
const STEP = SPACING / 10; // one minor tick per tenth of that gap
const PLAYHEAD = 64; // x of the fixed marker
const BASELINE = 46; // y of the ruler line
const PILL_TOP = BASELINE + 16;
const FADE = "linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)";

function Marker({ change, x, row, active }: { change: Change; x: number; row: number; active: boolean }) {
  const Icon = ICONS[change.icon];
  return (
    <>
      <span
        className="absolute -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-white/45"
        style={{ left: x, top: 12 }}
      >
        {change.date.split(",")[0]}
      </span>
      <span
        className={`absolute flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[12px] font-medium transition-colors ${
          active ? "bg-white text-black" : "border border-white/10 bg-white/5 text-white/70"
        }`}
        style={{ left: x, top: PILL_TOP + row * 30 }}
      >
        <Icon className="size-3.5 shrink-0" />
        {change.title}
      </span>
    </>
  );
}

function Track({ progress, playhead }: { progress: number; playhead: number }) {
  const last = CHANGES.length - 1;
  const width = CHANGES.length * SPACING;
  const focus = SPACING / 2 + progress * last * SPACING;
  const active = Math.round(progress * last);

  return (
    <div
      className="absolute inset-y-0 left-0 will-change-transform"
      style={{ width, transform: `translateX(${playhead - focus}px)` }}
    >
      <div className="absolute h-px bg-white/15" style={{ width, top: BASELINE }} />
      {Array.from({ length: Math.floor(width / STEP) + 1 }, (_, k) => {
        const kind = k % 10; // 5 = under a change, 0 = midway between
        const h = kind === 5 ? 14 : kind === 0 ? 9 : 5;
        return (
          <span
            key={k}
            className="absolute w-px"
            style={{
              left: k * STEP,
              top: BASELINE - h,
              height: h,
              background: kind === 5 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.18)",
            }}
          />
        );
      })}
      {CHANGES.map((c, i) => (
        <Marker key={c.title} change={c} x={i * SPACING + SPACING / 2} row={i % 2} active={i === active} />
      ))}
    </div>
  );
}

function Timeline({ progress, playhead = PLAYHEAD }: { progress: number; playhead?: number }) {
  return (
    <div
      className="relative h-[136px] w-full overflow-hidden"
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    >
      <div
        className="pointer-events-none absolute w-px bg-white/40"
        style={{ left: playhead, top: 20, height: 34 }}
      />
      <Track progress={progress} playhead={playhead} />
    </div>
  );
}

export default function Changelog({ bg }: Params) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? el.scrollTop / max : 0);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="h-full w-full overflow-y-auto text-white"
      style={{ background: bg, fontFamily: SANS }}
    >
      <div className="sticky top-0 flex h-full items-center">
        <Timeline progress={progress} />
      </div>
      <div className="h-[220%]" />
    </div>
  );
}

export function Card() {
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      setProgress(Math.sin(((now - start) / 1000) * 0.16) * 0.5 + 0.5);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex h-full w-full items-center bg-[#0a0a0c] text-white" style={{ fontFamily: SANS }}>
      <Timeline progress={progress} playhead={150} />
    </div>
  );
}
