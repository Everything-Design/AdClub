import React from "react";

/**
 * Everything Design — Button
 * Pill-shaped action. Primary is filled orange; secondary is an ink
 * outline; ghost is text-only. Labels are mono, uppercase, tracked.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "6px 12px 5px", fontSize: "9.5px", letterSpacing: "0.12em" },
    md: { padding: "8px 16px 7px", fontSize: "10.5px", letterSpacing: "0.1em" },
    lg: { padding: "11px 22px 10px", fontSize: "11.5px", letterSpacing: "0.1em" },
  };

  const palette = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid var(--accent)",
    },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink)",
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid transparent",
    },
    inverse: {
      background: "var(--paper)",
      color: "var(--ink)",
      border: "1px solid var(--paper)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    textTransform: "uppercase",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition: "background 120ms ease, color 120ms ease, opacity 120ms ease",
    ...sizes[size],
    ...palette[variant],
    ...style,
  };

  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={disabled ? undefined : onClick}
      style={base}
      data-variant={variant}
      {...rest}
    >
      {children}
    </Tag>
  );
}
