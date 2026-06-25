import React from "react";

/**
 * DarkPanel — the warm-black feature block. Inverts the palette: accent kicker,
 * paper title, warm-grey body. Used for the sign-off card and estimate bands.
 */
export function DarkPanel({ label, title, children, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "26px 24px",
        borderRadius: "var(--radius-card)",
        ...style,
      }}
      {...rest}
    >
      {label && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "12px",
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--paper)",
            marginBottom: "14px",
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
