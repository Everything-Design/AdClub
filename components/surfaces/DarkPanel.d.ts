import React from "react";

export interface DarkPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono accent kicker. */
  label?: React.ReactNode;
  /** Serif title in paper. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Warm-black feature block that inverts the palette — accent kicker, paper
 * serif title, warm-grey body. The one place ink becomes a surface.
 *
 * @startingPoint section="Surfaces" subtitle="Warm-black feature / sign-off panel" viewport="700x260"
 */
export function DarkPanel(props: DarkPanelProps): JSX.Element;
