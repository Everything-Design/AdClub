import * as React from "react";

export interface AgendaItem {
  /** Gutter index — "01", "H1", "→". Falls back to the 1-based position. */
  n?: React.ReactNode;
  title: React.ReactNode;
  /** Muted descriptive sub-line. */
  sub?: React.ReactNode;
}

/**
 * Numbered editorial list — mono gutter index, bold sans title, muted
 * sub-line, dotted row rules. Use for agendas, workstreams, proposal
 * contents.
 *
 * @startingPoint section="Editorial" subtitle="Numbered agenda / contents list" viewport="700x300"
 */
export interface AgendaListProps {
  items: AgendaItem[];
  /** @default 1 */
  columns?: 1 | 2;
  /** Optional mono heading above the list, underlined with a dashed rule. */
  heading?: React.ReactNode;
  style?: React.CSSProperties;
}

export function AgendaList(props: AgendaListProps): JSX.Element;
