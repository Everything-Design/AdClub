/* @ds-bundle: {"format":3,"namespace":"Proposal_f8fc29","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"MetaPair","sourcePath":"components/core/MetaPair.jsx"},{"name":"NumTag","sourcePath":"components/core/NumTag.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"StrikeText","sourcePath":"components/core/StrikeText.jsx"},{"name":"AgendaList","sourcePath":"components/editorial/AgendaList.jsx"},{"name":"ClientTile","sourcePath":"components/editorial/ClientTile.jsx"},{"name":"DeliverCard","sourcePath":"components/editorial/DeliverCard.jsx"},{"name":"PhaseCard","sourcePath":"components/editorial/PhaseCard.jsx"},{"name":"DarkPanel","sourcePath":"components/surfaces/DarkPanel.jsx"}],"sourceHashes":{"components/core/Button.jsx":"69d727a70604","components/core/Card.jsx":"7d5f4db7e828","components/core/Divider.jsx":"5835fbfecbff","components/core/Eyebrow.jsx":"d37451bee5a2","components/core/MetaPair.jsx":"a83cd4ecb177","components/core/NumTag.jsx":"55388393a7c2","components/core/Pill.jsx":"20b4dcf08637","components/core/StrikeText.jsx":"4b31e2557bdf","components/editorial/AgendaList.jsx":"4e24f889d226","components/editorial/ClientTile.jsx":"ca2744d44cc8","components/editorial/DeliverCard.jsx":"d4e1e7ae0cbb","components/editorial/PhaseCard.jsx":"3b4378b2f0e9","components/surfaces/DarkPanel.jsx":"8e146794fd21"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Proposal_f8fc29 = window.Proposal_f8fc29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — Button
 * Pill-shaped action. Primary is filled orange; secondary is an ink
 * outline; ghost is text-only. Labels are mono, uppercase, tracked.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "6px 12px 5px",
      fontSize: "9.5px",
      letterSpacing: "0.12em"
    },
    md: {
      padding: "8px 16px 7px",
      fontSize: "10.5px",
      letterSpacing: "0.1em"
    },
    lg: {
      padding: "11px 22px 10px",
      fontSize: "11.5px",
      letterSpacing: "0.1em"
    }
  };
  const palette = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid transparent"
    },
    inverse: {
      background: "var(--paper)",
      color: "var(--ink)",
      border: "1px solid var(--paper)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    textTransform: "uppercase",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition: "background 120ms ease, color 120ms ease, opacity 120ms ease",
    ...sizes[size],
    ...palette[variant],
    ...style
  };
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: disabled ? undefined : onClick,
    style: base,
    "data-variant": variant
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — Card
 * The system's container. Three grounds: "outline" (ink hairline on paper),
 * "fill" (cream, recessed), "ink" (dark, inverted text). Hard 2px radius,
 * no drop shadow. Optional eyebrow label and orange accent rail off.
 */
function Card({
  children,
  tone = "outline",
  label,
  pad = "20px 22px",
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: "var(--paper)",
      color: "var(--ink-2)",
      border: "1px solid var(--ink)"
    },
    fill: {
      background: "var(--paper-2)",
      color: "var(--ink-2)",
      border: "1px solid transparent"
    },
    ink: {
      background: "var(--ink)",
      color: "var(--on-ink-soft)",
      border: "1px solid var(--ink)"
    },
    plain: {
      background: "var(--paper)",
      color: "var(--ink-2)",
      border: "1px solid var(--rule-2)"
    }
  };
  const labelColor = tone === "ink" ? "var(--accent)" : "var(--accent)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-card)",
      padding: pad,
      ...tones[tone],
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "9.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: labelColor,
      marginBottom: "8px"
    }
  }, label), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — Divider
 * The blueprint rule system. "dashed" opens sections, "dotted" splits
 * components, "solid" is a hard rule. Optionally thick (2px) for the
 * phase-grid top edge. Horizontal by default.
 */
function Divider({
  variant = "dashed",
  thick = false,
  tone = "ink",
  style,
  ...rest
}) {
  const colors = {
    ink: "var(--ink)",
    rule: "var(--rule-2)",
    onInk: "var(--on-ink-rule)"
  };
  const styleMap = {
    dashed: "dashed",
    dotted: "dotted",
    solid: "solid"
  };
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `${thick ? "2px" : "1px"} ${styleMap[variant]} ${colors[tone]}`,
      margin: 0,
      height: 0,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — Eyebrow
 * The mono, uppercase, tracked kicker that sits above headings.
 * Orange by default; pass tone="muted" for chrome, tone="ink" on light.
 */
function Eyebrow({
  children,
  tone = "accent",
  as = "span",
  style,
  ...rest
}) {
  const colors = {
    accent: "var(--accent)",
    muted: "var(--muted)",
    ink: "var(--ink)",
    onInk: "var(--paper)"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaPair.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — MetaPair
 * The label/value unit used throughout: a mono uppercase micro-label
 * above a display or sans value. The backbone of cover meta rows,
 * day-block metadata, contact strips and sign-off cards.
 */
function MetaPair({
  label,
  value,
  sub,
  valueFont = "display",
  tone = "light",
  align = "left",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  const valFamily = valueFont === "display" ? "var(--font-display)" : "var(--font-sans)";
  const valWeight = valueFont === "display" ? 600 : 500;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "9px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: onInk ? "var(--accent)" : "var(--muted)",
      marginBottom: "6px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: valFamily,
      fontWeight: valWeight,
      fontSize: "14.5px",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: onInk ? "var(--paper)" : "var(--ink)"
    }
  }, value, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "11.5px",
      lineHeight: 1.4,
      color: onInk ? "var(--on-ink-soft)" : "var(--muted)",
      marginTop: "2px"
    }
  }, sub)));
}
Object.assign(__ds_scope, { MetaPair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaPair.jsx", error: String((e && e.message) || e) }); }

// components/core/NumTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumTag — the small mono index chip. A solid ink box (DAY 1, 01) by default,
 * or accent / ghost. Used to number agenda items, phases and day blocks.
 */
function NumTag({
  children,
  variant = "ink",
  ...rest
}) {
  const variants = {
    ink: {
      background: "var(--ink)",
      color: "var(--paper)"
    },
    accent: {
      background: "var(--accent)",
      color: "#fff"
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      boxShadow: "inset 0 0 0 1px var(--rule-2)"
    }
  };
  const v = variants[variant] || variants.ink;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "4px 8px 3px",
      borderRadius: "var(--radius-card)",
      lineHeight: 1,
      ...v
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NumTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — Pill
 * A small rounded status / category chip. A dot variant carries the
 * orange marker (status); plain is just a tracked mono label.
 * Used for version stamps, status flags, category tags.
 */
function Pill({
  children,
  tone = "outline",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink)"
    },
    solid: {
      background: "var(--ink)",
      color: "var(--paper)",
      border: "1px solid var(--ink)"
    },
    accent: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid var(--accent)"
    },
    soft: {
      background: "var(--paper-2)",
      color: "var(--ink-2)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: "7px 12px 6px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: tone === "accent" ? "#fff" : "var(--accent)",
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/StrikeText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StrikeText — inline emphasis. The yellow marker strike (default) or accent
 * orange text. Use the strike at most once per page; never both styles on the
 * same word. Emphasis in this system is color, never italics.
 */
function StrikeText({
  children,
  variant = "strike",
  ...rest
}) {
  if (variant === "accent") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        color: "var(--accent)"
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      background: "linear-gradient(transparent 62%, var(--accent-2) 62%, var(--accent-2) 90%, transparent 90%)",
      padding: "0 2px",
      color: "inherit"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StrikeText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StrikeText.jsx", error: String((e && e.message) || e) }); }

// components/editorial/AgendaList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — AgendaList
 * A numbered editorial list: a mono index in the gutter, a bold sans title
 * and a muted sub-line, each row split by a dotted rule. Two-column option
 * for long agendas. Indices accept any string ("01", "H1", "→").
 */
function AgendaList({
  items = [],
  columns = 1,
  heading,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), heading && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink)",
      margin: "0 0 12px",
      paddingBottom: "8px",
      borderBottom: "1px dashed var(--ink)"
    }
  }, heading), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr",
      gap: "0 18px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "28px 1fr",
      gap: "10px",
      alignItems: "baseline",
      padding: "6px 0",
      borderBottom: "1px dotted var(--rule-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.08em",
      color: "var(--accent)",
      paddingTop: "2px"
    }
  }, it.n ?? String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: 1.3,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, it.title), it.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      lineHeight: 1.4,
      color: "var(--muted)",
      marginTop: "2px"
    }
  }, it.sub))))));
}
Object.assign(__ds_scope, { AgendaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/AgendaList.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ClientTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — ClientTile
 * A white logo tile (for the dark "selected clients" strip) with an optional
 * mono category caption beneath. Logos sit in a fixed-ratio white card with a
 * 3px radius. "cover" fills edge-to-edge; "contain" pads vector marks.
 */
function ClientTile({
  src,
  alt,
  category,
  fit = "contain",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-tile)",
      aspectRatio: "175 / 52",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: fit === "contain" ? "4px 14px" : 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: fit,
      objectPosition: "center",
      display: "block"
    }
  })), category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "9.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--paper)"
    }
  }, category));
}
Object.assign(__ds_scope, { ClientTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ClientTile.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DeliverCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — DeliverCard
 * A cream "you walk away with" tile: orange mono label, a display value,
 * and a muted sub-line. Used in pairs for deliverables / outcomes.
 */
function DeliverCard({
  label,
  value,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--paper-2)",
      borderRadius: "var(--radius-card)",
      padding: "14px 16px 16px",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "9.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "4px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: 1.25,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, value), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11.5px",
      lineHeight: 1.4,
      color: "var(--muted)",
      marginTop: "3px"
    }
  }, children));
}
Object.assign(__ds_scope, { DeliverCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DeliverCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PhaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Everything Design — PhaseCard
 * A single cell in the phase timeline: a node dot on a dashed rail, a mono
 * phase number + timing, a Petrona title and a short blurb. The final phase
 * carries an orange node.
 */
function PhaseCard({
  num,
  when,
  title,
  children,
  final = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      paddingTop: "22px",
      borderRight: "1px dotted var(--rule-2)",
      paddingRight: "16px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-7px",
      left: 0,
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: final ? "var(--accent)" : "var(--ink)"
    }
  }), num && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.14em",
      color: "var(--accent)",
      marginBottom: "8px"
    }
  }, num), when && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginBottom: "14px"
    }
  }, when), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: 0.98,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      marginBottom: "12px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      lineHeight: 1.45,
      color: "var(--ink-2)"
    }
  }, children));
}
Object.assign(__ds_scope, { PhaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PhaseCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/DarkPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DarkPanel — the warm-black feature block. Inverts the palette: accent kicker,
 * paper title, warm-grey body. Used for the sign-off card and estimate bands.
 */
function DarkPanel({
  label,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      padding: "26px 24px",
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "12px"
    }
  }, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: 1.0,
      letterSpacing: "-0.025em",
      color: "var(--paper)",
      marginBottom: "14px"
    }
  }, title), children);
}
Object.assign(__ds_scope, { DarkPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/DarkPanel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.MetaPair = __ds_scope.MetaPair;

__ds_ns.NumTag = __ds_scope.NumTag;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.StrikeText = __ds_scope.StrikeText;

__ds_ns.AgendaList = __ds_scope.AgendaList;

__ds_ns.ClientTile = __ds_scope.ClientTile;

__ds_ns.DeliverCard = __ds_scope.DeliverCard;

__ds_ns.PhaseCard = __ds_scope.PhaseCard;

__ds_ns.DarkPanel = __ds_scope.DarkPanel;

})();
