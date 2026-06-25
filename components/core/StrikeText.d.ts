import React from "react";

export interface StrikeTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `strike` = yellow marker highlight; `accent` = orange text. */
  variant?: "strike" | "accent";
  children?: React.ReactNode;
}

/**
 * Inline emphasis — a yellow marker strike or accent-orange text. The strike
 * appears at most once per page.
 */
export function StrikeText(props: StrikeTextProps): JSX.Element;
