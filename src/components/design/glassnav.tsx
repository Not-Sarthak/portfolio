"use client";

import { useId } from "react";
import { displacementMap } from "./glassnav/filter";

export const meta = {
  title: "Liquid glass navbar",
  date: "2026-07-30",
  size: "wide" as const,
  tags: ["Glass", "SVG", "UI"],
  description:
    "A floating glass navbar over a dark scene. The blur is stock backdrop-filter; the edge refraction is an SVG displacement map split into R/G/B for a faint chromatic fringe.",
  prompt:
    "Build a floating 'liquid glass' navbar in React over a dark background: a rounded pill with backdrop-filter blur, a hairline white border, inset highlight and layered drop shadows, and an SVG feDisplacementMap (R/G/B split, screen-blended) driven by a transparent-to-colour gradient map for chromatic edge refraction. Logo on the left, text links, a dark button and a light CTA on the right. Controls for blur, refraction, radius, glass tint and scene colour.",
};

export const params = {
  cta: "Get started",
  blur: 6,
  refraction: 60,
  radius: 18,
  glass: "#000000",
  scene: "#124dc4",
};

export const controls = {
  cta: { type: "text", placeholder: "cta label", label: "CTA" },
  blur: { type: "range", min: 0, max: 20, step: 0.5, unit: "px", label: "Blur" },
  refraction: { type: "range", min: 0, max: 320, step: 10, label: "Refraction" },
  radius: { type: "range", min: 8, max: 26, step: 1, unit: "px", label: "Radius" },
  glass: { type: "color", label: "Glass" },
  scene: { type: "color", label: "Scene" },
} as const;

export const presets = {
  Cobalt: { glass: "#000000", scene: "#124dc4" },
  Midnight: { glass: "#000000", scene: "#12151b" },
  Plum: { glass: "#140b1a", scene: "#3a1552" },
};

type Params = typeof params;

const LINKS = ["Changelog", "Pricing", "Careers"];
const NAV_W = 560;
const NAV_H = 46;
const SANS =
  "ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export default function GlassNav({ cta, blur, refraction, radius, glass, scene }: Params) {
  const uid = useId().replace(/:/g, "");
  const filterId = `glass-${uid}`;
  const map = displacementMap(NAV_W, NAV_H, radius);

  return (
    <div
      className="relative h-full w-full overflow-y-auto"
      style={{ background: `radial-gradient(120% 120% at 50% -10%, ${scene} 0%, #06070a 100%)` }}
    >
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage href={map} result="map" preserveAspectRatio="none" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale={-refraction} xChannelSelector="R" yChannelSelector="G" result="dR" />
            <feColorMatrix in="dR" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="R" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale={-(refraction * 0.7)} xChannelSelector="R" yChannelSelector="G" result="dG" />
            <feColorMatrix in="dG" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="G" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale={-(refraction * 0.4)} xChannelSelector="R" yChannelSelector="G" result="dB" />
            <feColorMatrix in="dB" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="B" />
            <feBlend in="R" in2="G" mode="screen" result="RG" />
            <feBlend in="RG" in2="B" mode="screen" />
          </filter>
        </defs>
      </svg>

      <header
        className="sticky top-4 z-20 mx-auto"
        style={{ width: NAV_W, maxWidth: "calc(100% - 2rem)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: radius,
            backgroundColor: `${glass}14`,
            backdropFilter: `blur(${blur}px) url(#${filterId}) saturate(1.4)`,
            WebkitBackdropFilter: `blur(${blur}px) saturate(1.4)`,
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "inset 0 0 2px 1px rgba(255,255,255,0.09), inset 0 0 10px 4px rgba(255,255,255,0.04), 0 4px 16px rgba(17,17,26,0.25), 0 16px 56px rgba(17,17,26,0.3)",
          }}
        />
        <div
          className="relative flex items-center justify-between gap-6 px-3 py-2 text-white"
          style={{
            fontFamily:
              "ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          <div className="flex items-center gap-5">
            <img src="/me.jpg" alt="Sarthak Shah" className="size-6 rounded-md object-cover" />
            <nav className="hidden items-center gap-4 text-[13px] font-medium text-white/75 sm:flex">
              {LINKS.map((l) => (
                <span key={l} className="cursor-pointer transition-colors hover:text-white">
                  {l}
                </span>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="cursor-pointer rounded-[10px] bg-[#1d1d24] px-2.5 py-1.5 text-white">
              Login
            </span>
            <span className="flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-2.5 py-1.5 text-[#191919]">
              {cta} <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </header>

      <div
        className="relative z-10 mx-auto -mt-[46px] max-w-2xl space-y-4 px-8 pb-10 pt-20 text-[15px] leading-7 text-white/70"
        style={{ fontFamily: SANS }}
      >
        {LOREM.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

const LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
];
