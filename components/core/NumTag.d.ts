import React from "react";

export interface NumTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Fill style. */
  variant?: "ink" | "accent" | "ghost";
  children?: React.ReactNode;
}

/**
 * Small mono index chip (DAY 1, 01) — a 2px-radius box that numbers agenda
 * items, phases and day blocks.
 */
export function NumTag(props: NumTagProps): JSX.Element;
