import React from "react";

/**
 * NumTag — the small mono index chip. A solid ink box (DAY 1, 01) by default,
 * or accent / ghost. Used to number agenda items, phases and day blocks.
 */
export function NumTag({ children, variant = "ink", ...rest }) {
  const variants = {
    ink:    { background: "var(--ink)", color: "var(--paper)" },
    accent: { background: "var(--accent)", color: "#fff" },
    ghost:  { background: "transparent", color: "var(--accent)", boxShadow: "inset 0 0 0 1px var(--rule-2)" },
  };
  const v = variants[variant] || variants.ink;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 8px 3px",
        borderRadius: "var(--radius-card)",
        lineHeight: 1,
        ...v,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
