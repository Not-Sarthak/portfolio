export type Rgb = [number, number, number];

export const rgbOf = (hex: string): Rgb => {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

export const tone = (rgb: Rgb, t: number) =>
  `rgb(${rgb.map((c) => Math.round(c + ((t >= 0 ? 255 : 0) - c) * Math.abs(t))).join(",")})`;
