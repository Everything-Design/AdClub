import * as React from "react";

/**
 * Pill-shaped action button. Mono uppercase label, hard pill radius.
 *
 * @startingPoint section="Core" subtitle="Pill action — primary / secondary / ghost" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
