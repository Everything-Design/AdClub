import * as React from "react";

/**
 * Mono micro-label over a value (with optional sub-line). The backbone of
 * cover meta rows, day-block metadata, contact strips and sign-off cards.
 *
 * @startingPoint section="Core" subtitle="Label / value metadata unit" viewport="700x140"
 */
export interface MetaPairProps {
  /** Mono uppercase micro-label. */
  label: React.ReactNode;
  /** Primary value. */
  value: React.ReactNode;
  /** Optional muted sub-line beneath the value. */
  sub?: React.ReactNode;
  /** @default "display" */
  valueFont?: "display" | "sans";
  /** Light ground or dark (ink) surface. @default "light" */
  tone?: "light" | "ink";
  /** @default "left" */
  align?: "left" | "right" | "center";
  style?: React.CSSProperties;
}

export function MetaPair(props: MetaPairProps): JSX.Element;
