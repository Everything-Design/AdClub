import React from "react";

/**
 * Everything Design — AgendaList
 * A numbered editorial list: a mono index in the gutter, a bold sans title
 * and a muted sub-line, each row split by a dotted rule. Two-column option
 * for long agendas. Indices accept any string ("01", "H1", "→").
 */
export function AgendaList({ items = [], columns = 1, heading, style, ...rest }) {
  return (
    <div style={style} {...rest}>
      {heading && (
        <h4
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink)",
            margin: "0 0 12px",
            paddingBottom: "8px",
            borderBottom: "1px dashed var(--ink)",
          }}
        >
          {heading}
        </h4>
      )}
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr",
          gap: "0 18px",
        }}
      >
        {items.map((it, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "28px 1fr",
              gap: "10px",
              alignItems: "baseline",
              padding: "6px 0",
              borderBottom: "1px dotted var(--rule-2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "var(--accent)",
                paddingTop: "2px",
              }}
            >
              {it.n ?? String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: 1.3,
                  letterSpacing: "-0.005em",
                  color: "var(--ink)",
                }}
              >
                {it.title}
              </span>
              {it.sub && (
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    lineHeight: 1.4,
                    color: "var(--muted)",
                    marginTop: "2px",
                  }}
                >
                  {it.sub}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
