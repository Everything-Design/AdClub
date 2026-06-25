import * as React from "react";

/**
 * The system container. Hard 2px corners, hairline border, no drop shadow.
 * Three grounds plus an optional mono eyebrow label.
 *
 * @startingPoint section="Core" subtitle="Container — outline / cream / ink" viewport="700x220"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Ground. @default "outline" */
  tone?: "outline" | "fill" | "ink" | "plain";
  /** Optional mono uppercase eyebrow label printed top-left. */
  label?: React.ReactNode;
  /** CSS padding shorthand. @default "20px 22px" */
  pad?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
