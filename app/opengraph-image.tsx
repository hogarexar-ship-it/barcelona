import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.brand}: ${siteConfig.tagline}`;
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
          backgroundColor: "#FAF5EC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 72, fontWeight: 800, color: "#1B1814" }}>
          {siteConfig.brand.toLowerCase()}
          <div style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: "#C55F2C", marginLeft: 6, marginBottom: 18 }} />
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 60, fontWeight: 800, color: "#1B1814", maxWidth: 1000, lineHeight: 1.1 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 28, color: "#A44A22", fontWeight: 700 }}>
          Google y Meta Ads · Web · Google Business · SEO y GEO
        </div>
      </div>
    ),
    { ...size }
  );
}
