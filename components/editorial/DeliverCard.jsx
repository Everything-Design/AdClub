import React from "react";

/**
 * Everything Design — DeliverCard
 * A cream "you walk away with" tile: orange mono label, a display value,
 * and a muted sub-line. Used in pairs for deliverables / outcomes.
 */
export function DeliverCard({ label, value, children, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--paper-2)",
        borderRadius: "var(--radius-card)",
        padding: "14px 16px 16px",
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
            color: "var(--accent)",
            marginBottom: "4px",
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: 1.25,
          letterSpacing: "-0.005em",
          color: "var(--ink)",
        }}
      >
        {value}
      </div>
      {children && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11.5px",
            lineHeight: 1.4,
            color: "var(--muted)",
            marginTop: "3px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
