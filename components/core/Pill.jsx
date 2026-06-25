import React from "react";

/**
 * Everything Design — Pill
 * A small rounded status / category chip. A dot variant carries the
 * orange marker (status); plain is just a tracked mono label.
 * Used for version stamps, status flags, category tags.
 */
export function Pill({
  children,
  tone = "outline",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    outline: { background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)" },
    solid:   { background: "var(--ink)", color: "var(--paper)", border: "1px solid var(--ink)" },
    accent:  { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" },
    soft:    { background: "var(--paper-2)", color: "var(--ink-2)", border: "1px solid transparent" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        lineHeight: 1,
        padding: "7px 12px 6px",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: tone === "accent" ? "#fff" : "var(--accent)",
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
