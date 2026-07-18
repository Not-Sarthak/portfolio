"use client";

import type { Control } from "@/lib/design/types";

interface FieldProps {
  name: string;
  control: Control;
  value: unknown;
  onChange: (value: unknown) => void;
}

const labelClass = "text-xs text-gray-500";
const valueClass = "text-xs tabular-nums text-foreground";

export function ControlField({ name, control, value, onChange }: FieldProps) {
  const label = control.label ?? name;

  if (control.type === "range") {
    const num = typeof value === "number" ? value : Number(value) || 0;
    const shown =
      Math.abs(num) >= 100 || Number.isInteger(num) ? num.toString() : num.toFixed(2);
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className={labelClass}>{label}</span>
          <span className={valueClass}>
            {shown}
            {control.unit ?? ""}
          </span>
        </div>
        <input
          type="range"
          min={control.min}
          max={control.max}
          step={control.step ?? (control.max - control.min) / 100}
          value={num}
          onChange={(e) => onChange(Number(e.target.value))}
          className="lab-range"
        />
      </div>
    );
  }

  if (control.type === "color") {
    const hex = typeof value === "string" ? value : "#000000";
    return (
      <div className="flex items-center justify-between gap-2">
        <span className={labelClass}>{label}</span>
        <label className="flex items-center gap-2">
          <span className={valueClass}>{hex}</span>
          <span
            className="size-5 rounded border border-gray-200"
            style={{ backgroundColor: hex }}
          >
            <input
              type="color"
              value={hex}
              onChange={(e) => onChange(e.target.value)}
              className="size-5 cursor-pointer opacity-0"
            />
          </span>
        </label>
      </div>
    );
  }

  if (control.type === "text") {
    return (
      <div className="flex items-center justify-between gap-2">
        <span className={labelClass}>{label}</span>
        <input
          type="text"
          value={typeof value === "string" ? value : ""}
          placeholder={control.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-40 rounded border border-gray-200 bg-white px-2 py-0.5 text-xs text-foreground focus:border-gray-400 focus:outline-none"
        />
      </div>
    );
  }

  if (control.type === "select") {
    const current = String(value ?? control.options[0]);
    return (
      <div className="flex items-center justify-between gap-2">
        <span className={labelClass}>{label}</span>
        <div className="flex gap-1">
          {control.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out-cubic ${
                current === opt
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const on = Boolean(value);
  return (
    <div className="flex items-center justify-between gap-2">
      <span className={labelClass}>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => onChange(!on)}
        className={`relative h-5 w-9 rounded-full transition-colors duration-150 ease-out-cubic ${
          on ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute top-0.5 size-4 rounded-full bg-white transition-transform duration-150 ease-out-cubic ${
            on ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
