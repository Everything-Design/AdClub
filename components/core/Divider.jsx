import React from "react";

/**
 * Everything Design — Divider
 * The blueprint rule system. "dashed" opens sections, "dotted" splits
 * components, "solid" is a hard rule. Optionally thick (2px) for the
 * phase-grid top edge. Horizontal by default.
 */
export function Divider({ variant = "dashed", thick = false, tone = "ink", style, ...rest }) {
  const colors = {
    ink: "var(--ink)",
    rule: "var(--rule-2)",
    onInk: "var(--on-ink-rule)",
  };
  const styleMap = {
    dashed: "dashed",
    dotted: "dotted",
    solid: "solid",
  };
  return (
    <hr
      style={{
        border: 0,
        borderTop: `${thick ? "2px" : "1px"} ${styleMap[variant]} ${colors[tone]}`,
        margin: 0,
        height: 0,
        width: "100%",
        ...style,
      }}
      {...rest}
    />
  );
}
