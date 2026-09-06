import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.brand} Barcelona`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FDF3EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#1B1814" }}>
          {siteConfig.brand}
          <span style={{ color: "#C55F2C", marginLeft: 16 }}>Barcelona</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 32, color: "#443F38", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 24, color: "#A44A22", fontWeight: 700 }}>
          Fontanería · Electricidad · Gas
        </div>
      </div>
    ),
    { ...size }
  );
}
