export interface FolderShape {
  x: number;
  y: number;
  angle: number;
  size: number;
  fill: string;
  edge: string;
}

const HEIGHT = 0.8;
const CORNER = 0.14;
const TAB_W = 0.46;
const TAB_H = 0.2;
const SHADOW_BLUR = 0.16;
const SHADOW_X = -0.06;
const SHADOW_Y = 0.05;
const STROKE = 0.03;

export const drawFolder = (ctx: CanvasRenderingContext2D, f: FolderShape) => {
  const w = f.size;
  const h = f.size * HEIGHT;
  const r = f.size * CORNER;
  const tabW = w * TAB_W;
  const tabH = h * TAB_H;

  ctx.save();
  ctx.translate(f.x, f.y);
  ctx.rotate(f.angle);
  ctx.translate(-w / 2, -h / 2);

  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(tabW - r, 0);
  ctx.quadraticCurveTo(tabW, 0, tabW + tabH * 0.5, tabH);
  ctx.lineTo(w - r, tabH);
  ctx.quadraticCurveTo(w, tabH, w, tabH + r);
  ctx.lineTo(w, h - r);
  ctx.quadraticCurveTo(w, h, w - r, h);
  ctx.lineTo(r, h);
  ctx.quadraticCurveTo(0, h, 0, h - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();

  ctx.shadowColor = "rgba(0,0,0,0.18)";
  ctx.shadowBlur = f.size * SHADOW_BLUR;
  ctx.shadowOffsetX = f.size * SHADOW_X;
  ctx.shadowOffsetY = f.size * SHADOW_Y;
  ctx.fillStyle = f.fill;
  ctx.fill();

  ctx.shadowColor = "transparent";
  ctx.strokeStyle = f.edge;
  ctx.lineWidth = Math.max(0.6, f.size * STROKE);
  ctx.stroke();

  ctx.restore();
};
