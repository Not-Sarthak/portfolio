export interface Blade {
  x: number;
  depth: number;
  h: number;
  w: number;
  lean: number;
  phase: number;
  bend: number;
  vel: number;
}

export const makeBlades = (count: number): Blade[] =>
  Array.from({ length: count }, () => {
    const depth = Math.random();
    return {
      x: Math.random(),
      depth,
      h: 0.4 + depth * 0.3 + Math.random() * 0.45,
      w: 1.5 + depth * 2.5 + Math.random() * 1.5,
      lean: (Math.random() - 0.5) * 0.42,
      phase: Math.random() * Math.PI * 2,
      bend: 0,
      vel: 0,
    };
  }).sort((a, b) => a.depth - b.depth);
