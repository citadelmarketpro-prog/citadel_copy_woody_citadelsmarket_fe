import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const GREEN = "#0c5c45";
const INK = "#07211a";
const LIME = "#d6f6de";

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: GREEN,
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 110px)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#ffffff",
            color: INK,
            fontSize: 24,
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 999,
            marginBottom: 36,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17L9 11L13 15L21 7"
              stroke={GREEN}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 7H21V13"
              stroke={GREEN}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Real-time options &amp; futures copy trading
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>Osaic</span>
          <span style={{ color: LIME }}>Markets</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 820,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Copy Futures, Options &amp; Contracts with Precision
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
