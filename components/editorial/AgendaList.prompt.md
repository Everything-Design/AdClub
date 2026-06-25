Numbered editorial list with a mono gutter index, bold title and muted sub-line, rows split by dotted rules. The workhorse for agendas, workstreams and proposal contents.

```jsx
<AgendaList
  heading="The two hours, roughly"
  items={[
    { n: "01", title: "The business today", sub: "Twenty years of SAP delivery, the move into AI." },
    { n: "02", title: "The next three to five years", sub: "Repositioning for the IPO." },
  ]}
/>
```

Set `columns={2}` for long lists. Indices accept any string ("01", "H1", "→"); omit `n` to auto-number.
