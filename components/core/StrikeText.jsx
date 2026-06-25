import React from "react";

/**
 * StrikeText — inline emphasis. The yellow marker strike (default) or accent
 * orange text. Use the strike at most once per page; never both styles on the
 * same word. Emphasis in this system is color, never italics.
 */
export function StrikeText({ children, variant = "strike", ...rest }) {
  if (variant === "accent") {
    return (
      <span style={{ color: "var(--accent)" }} {...rest}>
        {children}
      </span>
    );
  }
  return (
    <span
      style={{
        background:
          "linear-gradient(transparent 62%, var(--accent-2) 62%, var(--accent-2) 90%, transparent 90%)",
        padding: "0 2px",
        color: "inherit",
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
