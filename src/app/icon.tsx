import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Required for `output: "export"` */
export const dynamic = "force-static";

/** Simple LC mark in brand red — replaces default Next favicon */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#c8102e",
          color: "white",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.02em",
          borderRadius: 6,
        }}
      >
        LC
      </div>
    ),
    { ...size }
  );
}
