import * as React from "react";

/**
 * White logo tile for the dark "selected clients" strip, with an optional mono
 * category caption. Fixed 175:52 ratio, 3px radius.
 *
 * @startingPoint section="Editorial" subtitle="Client logo tile (on dark)" viewport="700x140"
 */
export interface ClientTileProps {
  src: string;
  alt: string;
  /** Mono caption beneath the tile (shown in white — place on a dark ground). */
  category?: React.ReactNode;
  /** "contain" pads vector marks; "cover" fills the tile. @default "contain" */
  fit?: "contain" | "cover";
  style?: React.CSSProperties;
}

export function ClientTile(props: ClientTileProps): JSX.Element;
