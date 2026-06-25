import React from "react";

/**
 * Everything Design — PhaseCard
 * A single cell in the phase timeline: a node dot on a dashed rail, a mono
 * phase number + timing, a Petrona title and a short blurb. The final phase
 * carries an orange node.
 */
export function PhaseCard({
  num,
  when,
  title,
  children,
  final = false,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "22px",
        borderRight: "1px dotted var(--rule-2)",
        paddingRight: "16px",
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-7px",
          left: 0,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: final ? "var(--accent)" : "var(--ink)",
        }}
      />
      {num && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "var(--accent)",
            marginBottom: "8px",
          }}
        >
          {num}
        </div>
      )}
      {when && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "14px",
          }}
        >
          {when}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: 0.98,
          letterSpacing: "-0.025em",
          color: "var(--ink)",
          marginBottom: "12px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          lineHeight: 1.45,
          color: "var(--ink-2)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
