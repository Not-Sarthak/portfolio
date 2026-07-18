"use client";

import { useMemo, useState } from "react";
import type { Control, Experiment } from "@/lib/design/types";
import { ControlField } from "./controls";

type Params = Record<string, unknown>;

function randomColor(): string {
  const n = Math.floor(Math.random() * 0xffffff);
  return "#" + n.toString(16).padStart(6, "0");
}

function randomFor(control: Control, current: unknown): unknown {
  switch (control.type) {
    case "range": {
      const step = control.step ?? (control.max - control.min) / 100;
      const steps = Math.round((control.max - control.min) / step);
      const v = control.min + Math.round(Math.random() * steps) * step;
      return Math.round(v * 1000) / 1000;
    }
    case "color":
      return randomColor();
    case "select":
      return control.options[Math.floor(Math.random() * control.options.length)];
    case "toggle":
      return Math.random() > 0.5;
    default:
      return current;
  }
}

export function Playground({ experiment }: { experiment: Experiment }) {
  const { Component, params: defaults, controls, presets, meta } = experiment;
  const [params, setParams] = useState<Params>({ ...defaults });

  // Shorter preview for wide banners, taller for square-ish experiments.
  const previewAspect =
    meta.size === "wide"
      ? "aspect-[5/2]"
      : meta.size === "sm"
        ? "aspect-square"
        : "aspect-[16/10]";

  const controlEntries = useMemo(
    () => Object.entries(controls) as [string, Control][],
    [controls],
  );
  const presetEntries = useMemo(() => Object.entries(presets), [presets]);
  const hasEditor = controlEntries.length > 0;

  function set(name: string, value: unknown) {
    setParams((p) => ({ ...p, [name]: value }));
  }

  function applyPreset(values: Params) {
    setParams((p) => ({ ...p, ...values }));
  }

  function remix() {
    setParams((p) => {
      const next: Params = { ...p };
      for (const [name, control] of controlEntries) {
        next[name] = randomFor(control, p[name]);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className={`relative ${previewAspect} w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50`}>
        <div className="absolute inset-0">
          <Component {...(params as Record<string, never>)} />
        </div>
      </div>

      {hasEditor && (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Playground</h2>
            <button
              type="button"
              onClick={remix}
              className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition-colors duration-150 ease-out-cubic hover:border-gray-300 hover:text-foreground"
            >
              Remix
            </button>
          </div>

          {presetEntries.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {presetEntries.map(([name, values]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => applyPreset(values as Params)}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600 transition-colors duration-150 ease-out-cubic hover:bg-gray-200 hover:text-foreground"
                >
                  {name}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {controlEntries.map(([name, control]) => (
              <ControlField
                key={name}
                name={name}
                control={control}
                value={params[name]}
                onChange={(v) => set(name, v)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
