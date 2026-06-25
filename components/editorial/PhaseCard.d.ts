import * as React from "react";

/**
 * One node in a phase / timeline grid — dot on a dashed rail, mono phase
 * number + timing, Petrona title, short blurb. Lay several in a grid with a
 * 2px-dashed top rule for the signature timeline.
 *
 * @startingPoint section="Editorial" subtitle="Phase / timeline node" viewport="700x260"
 */
export interface PhaseCardProps {
  /** e.g. "Phase 01". */
  num?: React.ReactNode;
  /** e.g. "Day 1 · 2 hrs". */
  when?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Orange node instead of ink — mark the delivered/final phase. @default false */
  final?: boolean;
  style?: React.CSSProperties;
}

export function PhaseCard(props: PhaseCardProps): JSX.Element;
