import React from "react";

/**
 * Everything Design — ClientTile
 * A white logo tile (for the dark "selected clients" strip) with an optional
 * mono category caption beneath. Logos sit in a fixed-ratio white card with a
 * 3px radius. "cover" fills edge-to-edge; "contain" pads vector marks.
 */
export function ClientTile({ src, alt, category, fit = "contain", style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }} {...rest}>
      <div
        style={{
          background: "#fff",
          borderRadius: "var(--radius-tile)",
          aspectRatio: "175 / 52",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: fit === "contain" ? "4px 14px" : 0,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
      {category && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9.5px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--paper)",
          }}
        >
          {category}
        </div>
      )}
    </div>
  );
}
