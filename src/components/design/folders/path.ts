export interface Point {
  x: number;
  y: number;
  angle: number;
}

const EPSILON = 0.002;

const archY = (t: number, cy: number, amp: number, arches: number) =>
  cy + amp * 0.5 - amp * Math.abs(Math.sin(t * Math.PI * arches));

export const archPoint = (
  t: number,
  w: number,
  h: number,
  amp: number,
  arches: number,
): Point => {
  const cy = h / 2;
  const y = archY(t, cy, amp, arches);
  const angle = Math.atan2(archY(t + EPSILON, cy, amp, arches) - y, EPSILON * w);
  return { x: t * w, y, angle };
};
