"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export const meta = {
  title: "Live cursor",
  date: "2026-07-16",
  size: "lg" as const,
  tags: ["Interaction", "Motion"],
  description:
    "An iMessage bubble that follows your cursor, cycling through requests — each one slides up into the bubble and out the top. (ref: folk.com)",
  prompt:
    "Build a folk-style live cursor in React: a flat iMessage bubble with a tail and a sky-blue top that eases toward the real cursor with a slight velocity tilt, hides the OS cursor, and cycles a list of messages by sliding each one up into the bubble and out the top. Controls for bubble color, text color, font size, and hold time.",
};

export const params = {
  bubbleColor: "#0a84ff",
  textColor: "#ffffff",
  fontSize: 15,
  speed: 2.4,
};

export const controls = {
  bubbleColor: { type: "color", label: "Bubble" },
  textColor: { type: "color", label: "Text" },
  fontSize: { type: "range", min: 12, max: 20, step: 1, unit: "px", label: "Size" },
  speed: { type: "range", min: 1, max: 5, step: 0.1, unit: "s", label: "Hold" },
} as const;

export const presets = {
  iMessage: { bubbleColor: "#0a84ff", textColor: "#ffffff" },
  Grape: { bubbleColor: "#7c5cff", textColor: "#ffffff" },
  Mint: { bubbleColor: "#10b981", textColor: "#ffffff" },
  Ink: { bubbleColor: "#161616", textColor: "#ffffff" },
};

type Params = typeof params;

const MESSAGES = [
  "remind me to review the PR",
  "who did i meet at ethbangkok?",
  "book a call with the team",
  "add lunch with alex tomorrow",
  "draft a reply to the investor",
  "what did i ship this week?",
];

const FONT = "ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, sans-serif";
const FOLLOW = 0.16; // how quickly the bubble catches the cursor
const TILT_MAX = 4; // degrees; the velocity tilt is clamped to this
const SLIDE_IN = 400;
const SLIDE_OUT = 340;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Eases the bubble toward the cursor with a slight velocity tilt that springs upright. */
function useCursorFollow(hostRef: RefObject<HTMLDivElement>) {
  const [pos, setPos] = useState({ x: 140, y: 100, rot: 0 });
  const target = useRef({ x: 140, y: 100 });

  useEffect(() => {
    const s = { x: 140, y: 100, prevX: 140, rot: 0, rotVel: 0 };
    let raf = 0;
    const tick = () => {
      s.x += (target.current.x - s.x) * FOLLOW;
      s.y += (target.current.y - s.y) * FOLLOW;
      const aim = clamp((s.x - s.prevX) * 0.5, -TILT_MAX, TILT_MAX);
      s.prevX = s.x;
      s.rotVel = (s.rotVel + (aim - s.rot) * 0.1) * 0.8; // spring + damping
      s.rot += s.rotVel;
      setPos({ x: s.x, y: s.y, rot: s.rot });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = hostRef.current?.getBoundingClientRect();
    if (r) target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  return { pos, onMove };
}

/** Slides the current message in, holds, slides it out, then advances. */
function useMessageCycle(count: number, holdMs: number) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    setPhase("in");
    const toOut = setTimeout(() => setPhase("out"), SLIDE_IN + holdMs);
    const toNext = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_IN + holdMs + SLIDE_OUT);
    return () => {
      clearTimeout(toOut);
      clearTimeout(toNext);
    };
  }, [index, holdMs, count]);

  return { index, phase };
}

export default function Cursor({ bubbleColor, textColor, fontSize, speed }: Params) {
  const hostRef = useRef<HTMLDivElement>(null);
  const { pos, onMove } = useCursorFollow(hostRef);
  const { index, phase } = useMessageCycle(MESSAGES.length, speed * 1000);

  // Pre-measure each message; during the exit, size to the next one so the incoming
  // text isn't clipped while the bubble is still resizing.
  const sizers = useRef<(HTMLSpanElement | null)[]>([]);
  const [widths, setWidths] = useState<number[]>([]);
  useEffect(() => setWidths(sizers.current.map((el) => el?.offsetWidth ?? 0)), [fontSize]);
  const shown = phase === "out" ? (index + 1) % MESSAGES.length : index;

  const textStyle = { fontFamily: FONT, fontWeight: 500, fontSize };

  return (
    <div
      ref={hostRef}
      onMouseMove={onMove}
      className="relative h-full w-full cursor-none overflow-hidden bg-[#f5f5f6]"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 will-change-transform"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.rot}deg)`,
          transformOrigin: "50% 0%",
        }}
      >
        <div
          className="msg-bubble"
          style={
            { ...textStyle, color: textColor, lineHeight: 1.25, "--bub": bubbleColor } as React.CSSProperties
          }
        >
          <div className="msg-clip" style={{ width: widths[shown] }}>
            <span
              key={`${index}-${phase}`}
              className={`whitespace-nowrap ${phase === "out" ? "msg-out" : "msg-in"}`}
            >
              {MESSAGES[index]}
            </span>
          </div>

          {/* off-screen copies, one per message, used only to measure widths */}
          <div aria-hidden className="invisible absolute left-0 top-0" style={textStyle}>
            {MESSAGES.map((m, i) => (
              <span
                key={i}
                ref={(el) => {
                  sizers.current[i] = el;
                }}
                className="block w-fit whitespace-nowrap"
              >
                {m}
              </span>
            ))}
          </div>

          <Tail color={bubbleColor} />
        </div>
      </div>
    </div>
  );
}

function Tail({ color }: { color: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      aria-hidden
      className="absolute bottom-[-1px] right-[-4px]"
      style={{ color }}
    >
      <path
        fill="currentColor"
        d="M1 1 C1 8.5 4.5 14 12.5 15.5 C9 13.5 8 9.5 8 3 C8 1.3 6.5 1 1 1 Z"
      />
    </svg>
  );
}
