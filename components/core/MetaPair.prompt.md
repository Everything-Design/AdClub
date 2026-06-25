A mono micro-label over a value, with an optional muted sub-line. Use it for every label/value pairing — cover meta, day metadata, contact details, sign-off figures.

```jsx
<MetaPair label="For" value="KaarTech" sub="SAP → AI transformation partner" />
<MetaPair label="Discovery fee" value="₹3.2L" tone="ink" />
```

`valueFont="display"` (default) for names/figures, `"sans"` for running values. `tone="ink"` on dark surfaces turns the label orange. Set `align="right"` for right rails.
