import React from "react";

/**
 * Everything Design — Card
 * The system's container. Three grounds: "outline" (ink hairline on paper),
 * "fill" (cream, recessed), "ink" (dark, inverted text). Hard 2px radius,
 * no drop shadow. Optional eyebrow label and orange accent rail off.
 */
export function Card({
  children,
  tone = "outline",
  label,
  pad = "20px 22px",
  style,
  ...rest
}) {
  const tones = {
    outline: { background: "var(--paper)", color: "var(--ink-2)", border: "1px solid var(--ink)" },
    fill:    { background: "var(--paper-2)", color: "var(--ink-2)", border: "1px solid transparent" },
    ink:     { background: "var(--ink)", color: "var(--on-ink-soft)", border: "1px solid var(--ink)" },
    plain:   { background: "var(--paper)", color: "var(--ink-2)", border: "1px solid var(--rule-2)" },
  };
  const labelColor = tone === "ink" ? "var(--accent)" : "var(--accent)";
  return (
    <div
      style={{
        borderRadius: "var(--radius-card)",
        padding: pad,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {label && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9.5px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: labelColor,
            marginBottom: "8px",
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
