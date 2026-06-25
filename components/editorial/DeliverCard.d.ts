import * as React from "react";

/**
 * Cream outcome tile — orange mono label, display value, muted sub-line.
 * Use in pairs for "you walk away with / we walk away with" deliverables.
 *
 * @startingPoint section="Editorial" subtitle="Cream deliverable / outcome tile" viewport="700x160"
 */
export interface DeliverCardProps {
  /** Orange mono eyebrow, e.g. "You walk away with". */
  label?: React.ReactNode;
  /** Display value — the deliverable. */
  value: React.ReactNode;
  /** Optional muted sub-line. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function DeliverCard(props: DeliverCardProps): JSX.Element;
