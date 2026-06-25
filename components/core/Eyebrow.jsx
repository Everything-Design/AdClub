import React from "react";

/**
 * Everything Design — Eyebrow
 * The mono, uppercase, tracked kicker that sits above headings.
 * Orange by default; pass tone="muted" for chrome, tone="ink" on light.
 */
export function Eyebrow({ children, tone = "accent", as = "span", style, ...rest }) {
  const colors = {
    accent: "var(--accent)",
    muted: "var(--muted)",
    ink: "var(--ink)",
    onInk: "var(--paper)",
  };
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        fontWeight: 500,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: colors[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
