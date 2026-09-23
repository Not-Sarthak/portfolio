import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sarthak Shah — backend / smart contract engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, avatar] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/cooper.ttf")),
    readFile(join(process.cwd(), "public/me.jpg")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#333333",
          padding: "80px",
          fontFamily: "Cooper",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 92, lineHeight: 1.1 }}>Sarthak Shah</div>
            <div style={{ fontSize: 38, color: "#9ca3af", marginTop: 16 }}>
              backend / smart contract engineer
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${avatar.toString("base64")}`}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 16, objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, color: "#6b7280", lineHeight: 1.45 }}>
            financial systems, game theory and mechanism design — backend
            systems, smart contracts and low-latency distributed infra.
          </div>
          <div
            style={{
              display: "flex",
              height: 1,
              background: "#e5e7eb",
              marginTop: 40,
              marginBottom: 28,
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
            notsarthak.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Cooper", data: font, style: "normal", weight: 400 }],
    }
  );
}
