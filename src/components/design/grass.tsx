"use client";

import { useEffect, useRef } from "react";
import { makeBlades, type Blade } from "./grass/blades";
import { rgbOf, tone } from "./grass/color";

export const meta = {
  title: "Touch the grass",
  date: "2026-07-25",
  size: "wide" as const,
  tags: ["Canvas", "Interaction"],
  description:
    "A field of grass on a 2D canvas. Blades lean away as the cursor sweeps through and spring back once it passes, with a slow wind underneath.",
  prompt:
    "Build a canvas grass field in React: tapered blades of varied height, lean and tone drawn bottom-up with quadratic curves, layered back-to-front for depth. Blades bend away from the cursor within a radius and spring back when it leaves, with a gentle sine wind. Controls for density, height, bend radius and strength, spring and damping, wind, colour and background.",
};

export const params = {
  label: "Touch the grass",
  density: 240,
  height: 135,
  radius: 130,
  strength: 26,
  spring: 0.01,
  damping: 0.9,
  wind: 4,
  windSpeed: 1.1,
  pivot: 0.35,
  arc: 0.55,
  contrast: 0.45,
  color: "#5f9e58",
  bg: "#f3f7f0",
};

export const controls = {
  label: { type: "text", placeholder: "label", label: "Label" },
  density: { type: "range", min: 40, max: 320, step: 10, label: "Density" },
  height: { type: "range", min: 50, max: 170, step: 5, unit: "px", label: "Height" },
  radius: { type: "range", min: 40, max: 300, step: 5, unit: "px", label: "Reach" },
  strength: { type: "range", min: 0, max: 60, step: 1, unit: "px", label: "Bend" },
  spring: { type: "range", min: 0.01, max: 0.2, step: 0.005, label: "Spring" },
  damping: { type: "range", min: 0.7, max: 0.98, step: 0.01, label: "Damping" },
  wind: { type: "range", min: 0, max: 14, step: 0.5, label: "Wind" },
  windSpeed: { type: "range", min: 0.2, max: 3, step: 0.1, label: "Speed" },
  pivot: { type: "range", min: 0, max: 0.8, step: 0.05, label: "Pivot" },
  arc: { type: "range", min: 0.2, max: 0.9, step: 0.05, label: "Arc" },
  contrast: { type: "range", min: 0, max: 0.8, step: 0.05, label: "Contrast" },
  color: { type: "color", label: "Blades" },
  bg: { type: "color", label: "Background" },
} as const;

export const presets = {
  Lawn: { color: "#5f9e58", bg: "#f3f7f0" },
  Meadow: { color: "#8a8a8a", bg: "#f7f7f5" },
  Ink: { color: "#2f2f2f", bg: "#f7f7f5" },
  Night: { color: "#9fb8a6", bg: "#12161a" },
};

type Params = typeof params;

export default function Grass(props: Params) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blades = useRef<Blade[]>([]);
  const pointer = useRef({ x: 0, inside: false });
  const live = useRef(props);
  live.current = props;

  useEffect(() => {
    blades.current = makeBlades(props.density);
  }, [props.density]);

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
      const rgb = rgbOf(p.color);

      ctx.fillStyle = p.bg;
      ctx.fillRect(0, 0, w, h);

      for (const b of blades.current) {
        const bx = b.x * w;
        const bh = b.h * p.height;

        const dx = bx - pointer.current.x;
        const dist = Math.abs(dx);
        let aim = 0;
        if (pointer.current.inside && dist < p.radius) {
          const f = 1 - dist / p.radius;
          aim = Math.sign(dx) * f * f * (3 - 2 * f) * p.strength;
        }
        b.vel = (b.vel + (aim - b.bend) * p.spring) * p.damping;
        b.bend += b.vel;

        const offset =
          b.lean * bh + b.bend + p.wind * Math.sin(t * p.windSpeed + b.phase) * b.h;
        const ctrlX = bx + offset * p.pivot;
        const ctrlY = h - bh * p.arc;

        ctx.beginPath();
        ctx.moveTo(bx - b.w / 2, h);
        ctx.quadraticCurveTo(ctrlX - b.w * 0.25, ctrlY, bx + offset, h - bh);
        ctx.quadraticCurveTo(ctrlX + b.w * 0.25, ctrlY, bx + b.w / 2, h);
        ctx.closePath();
        ctx.fillStyle = tone(rgb, p.contrast - b.depth * p.contrast * 1.67);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = hostRef.current?.getBoundingClientRect();
    if (r) pointer.current = { x: e.clientX - r.left, inside: true };
  };

  return (
    <div
      ref={hostRef}
      onMouseMove={onMove}
      onMouseLeave={() => (pointer.current.inside = false)}
      className="relative h-full w-full overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {props.label && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-sm text-neutral-800 shadow-sm backdrop-blur-sm">
          {props.label}
        </span>
      )}
    </div>
  );
}
