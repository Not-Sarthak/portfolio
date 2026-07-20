"use client";

import { useEffect, useRef } from "react";
import { archPoint } from "./folders/path";
import { drawFolder } from "./folders/folder";

export const meta = {
  title: "Folder trail",
  date: "2026-07-16",
  size: "wide" as const,
  tags: ["Canvas", "Motion"],
  description:
    "Folders running a loop over a set of arches, each carrying its own hue around the circuit. Drawn on a 2D canvas, so the path, density and colour are all live.",
  prompt:
    "Build a canvas folder trail in React: place folder icons along an arch path (rounded peaks, sharp valleys) across the full width, stacked so they overlap into a ribbon. Run them forward along the path and wrap them back to the start so it reads as a continuous loop, with each folder keeping its own hue as it travels. Controls for count, size, arch height and number, tilt, speed, hue range, saturation and background.",
};

export const params = {
  count: 46,
  size: 60,
  amplitude: 120,
  arches: 2,
  tilt: 0,
  speed: 0.045,
  hue: 280,
  hueRange: 300,
  saturation: 85,
  lightness: 62,
  bg: "#f7f7f5",
};

export const controls = {
  count: { type: "range", min: 30, max: 220, step: 5, label: "Folders" },
  size: { type: "range", min: 18, max: 110, step: 2, unit: "px", label: "Size" },
  amplitude: { type: "range", min: 20, max: 220, step: 5, unit: "px", label: "Height" },
  arches: { type: "range", min: 1, max: 5, step: 1, label: "Arches" },
  tilt: { type: "range", min: 0, max: 1, step: 0.05, label: "Tilt" },
  speed: { type: "range", min: 0, max: 0.2, step: 0.005, label: "Speed" },
  hue: { type: "range", min: 0, max: 360, step: 5, unit: "°", label: "Hue" },
  hueRange: { type: "range", min: 0, max: 360, step: 10, unit: "°", label: "Spread" },
  saturation: { type: "range", min: 0, max: 100, step: 5, unit: "%", label: "Saturation" },
  lightness: { type: "range", min: 35, max: 85, step: 1, unit: "%", label: "Lightness" },
  bg: { type: "color", label: "Background" },
} as const;

export const presets = {
  Rainbow: { hue: 280, hueRange: 300, saturation: 85, lightness: 62 },
  Sunset: { hue: 330, hueRange: 120, saturation: 90, lightness: 60 },
  Ocean: { hue: 170, hueRange: 110, saturation: 70, lightness: 55 },
  Mono: { hue: 220, hueRange: 0, saturation: 8, lightness: 72 },
};

type Params = typeof params;

const EDGE_DROP = 18;
const EDGE_FLOOR = 20;

const hsl = (h: number, s: number, l: number) => `hsl(${h} ${s}% ${l}%)`;

export default function Folders(props: Params) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const live = useRef(props);
  live.current = props;

  useEffect(() => {
    const host = hostRef.current;
    const ctx = canvasRef.current?.getContext("2d");
    if (!host || !ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      ({ width: w, height: h } = host.getBoundingClientRect());
      ctx.canvas.width = Math.round(w * dpr);
      ctx.canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const start = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      const t = (now - start) / 1000;
      const p = live.current;
      const span = w + p.size * 2;

      ctx.fillStyle = p.bg;
      ctx.fillRect(0, 0, w, h);

      const shift = (((t * p.speed) % 1) + 1) % 1;
      const first = Math.ceil((1 - shift) * p.count) % p.count;

      for (let n = 0; n < p.count; n++) {
        const i = (first + n) % p.count;
        const seq = i / p.count;
        const pt = archPoint((seq + shift) % 1, span, h, p.amplitude, p.arches);
        const hue = (p.hue + seq * p.hueRange) % 360;

        drawFolder(ctx, {
          x: pt.x - p.size,
          y: pt.y,
          angle: pt.angle * p.tilt,
          size: p.size,
          fill: hsl(hue, p.saturation, p.lightness),
          edge: hsl(hue, p.saturation, Math.max(EDGE_FLOOR, p.lightness - EDGE_DROP)),
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={hostRef} className="relative h-full w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
