import * as React from "react";

/**
 * Mono, uppercase, tracked kicker label that sits above a heading.
 *
 * @startingPoint section="Core" subtitle="Mono kicker label above headings" viewport="700x120"
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "accent" */
  tone?: "accent" | "muted" | "ink" | "onInk";
  /** @default "span" */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
