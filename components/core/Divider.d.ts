import * as React from "react";

/**
 * The "blueprint" rule. Dashed opens sections, dotted splits components,
 * solid is a hard edge. Mixing dashed + dotted is intentional house style.
 */
export interface DividerProps {
  /** @default "dashed" */
  variant?: "dashed" | "dotted" | "solid";
  /** 2px instead of 1px. @default false */
  thick?: boolean;
  /** @default "ink" */
  tone?: "ink" | "rule" | "onInk";
  style?: React.CSSProperties;
}

export function Divider(props: DividerProps): JSX.Element;
