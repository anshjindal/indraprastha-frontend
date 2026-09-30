import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { festival, site } from "@/lib/site";

export const alt = `${festival.seoName} ${festival.year} – ${festival.name}, ${festival.dateLabel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/iss-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 72px",
          color: "#fbefd9",
          background: "radial-gradient(circle at 80% 50%, #7a1f1a 0%, #4f110e 70%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 6, color: "#f7a936", textTransform: "uppercase" }}>
            {`${festival.seoName} ${festival.year}`}
          </div>
          <div style={{ marginTop: 18, fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>{festival.name}</div>
          <div style={{ marginTop: 28, height: 4, width: 220, background: "#e8731a" }} />
          <div style={{ marginTop: 28, fontSize: 32, fontWeight: 600 }}>{festival.dateLabel}</div>
          <div style={{ marginTop: 8, fontSize: 28, color: "#f7a936" }}>{`${festival.venue}, New Delhi`}</div>
          <div style={{ marginTop: 36, fontSize: 24, opacity: 0.85 }}>{`Organised by ${site.name} · Since ${site.founded}`}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 360,
            height: 360,
            borderRadius: 48,
            background: "#fbefd9",
          }}
        >
          <img src={logoSrc} width={300} height={300} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
