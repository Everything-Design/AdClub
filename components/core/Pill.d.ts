import * as React from "react";

/**
 * Small mono pill — version stamp, status flag, or category chip.
 * Optional orange status dot.
 *
 * @startingPoint section="Core" subtitle="Mono status / category pill" viewport="700x120"
 */
export interface PillProps {
  children: React.ReactNode;
  /** @default "outline" */
  tone?: "outline" | "solid" | "accent" | "soft";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Pill(props: PillProps): JSX.Element;
