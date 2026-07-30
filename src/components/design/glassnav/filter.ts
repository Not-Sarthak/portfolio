const EDGE_X = [
  ["0%", "red"],
  ["22%", "#0000"],
  ["78%", "#0000"],
  ["100%", "red"],
];

const EDGE_Y = [
  ["0%", "lime"],
  ["35%", "#0000"],
  ["65%", "#0000"],
  ["100%", "lime"],
];

const stops = (steps: string[][]) =>
  steps.map(([offset, color]) => `<stop offset="${offset}" stop-color="${color}"/>`).join("");

export const displacementMap = (w: number, h: number, r: number): string => {
  const svg = `
    <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gx" x1="0%" y1="0%" x2="100%" y2="0%">${stops(EDGE_X)}</linearGradient>
        <linearGradient id="gy" x1="0%" y1="0%" x2="0%" y2="100%">${stops(EDGE_Y)}</linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#808080"/>
      <rect width="${w}" height="${h}" rx="${r}" fill="url(#gx)" style="mix-blend-mode:screen"/>
      <rect width="${w}" height="${h}" rx="${r}" fill="url(#gy)" style="mix-blend-mode:screen"/>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
