import React from "react";

/**
 * Everything Design — MetaPair
 * The label/value unit used throughout: a mono uppercase micro-label
 * above a display or sans value. The backbone of cover meta rows,
 * day-block metadata, contact strips and sign-off cards.
 */
export function MetaPair({
  label,
  value,
  sub,
  valueFont = "display",
  tone = "light",
  align = "left",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  const valFamily = valueFont === "display" ? "var(--font-display)" : "var(--font-sans)";
  const valWeight = valueFont === "display" ? 600 : 500;
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: onInk ? "var(--accent)" : "var(--muted)",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: valFamily,
          fontWeight: valWeight,
          fontSize: "14.5px",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          color: onInk ? "var(--paper)" : "var(--ink)",
        }}
      >
        {value}
        {sub && (
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "11.5px",
              lineHeight: 1.4,
              color: onInk ? "var(--on-ink-soft)" : "var(--muted)",
              marginTop: "2px",
            }}
          >
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}
