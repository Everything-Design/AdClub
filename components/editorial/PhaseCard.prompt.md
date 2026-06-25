A single node in a phased-timeline grid: a dot on the dashed rail, mono phase number and timing, a Petrona title and a short blurb.

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'2px dashed var(--ink)'}}>
  <PhaseCard num="Phase 01" when="Day 1 · 2 hrs" title="Briefing">A working session with leadership.</PhaseCard>
  <PhaseCard num="Phase 04" when="Day 9 · Delivered" title="Proposal" final>Written, scoped, decision-ready.</PhaseCard>
</div>
```

Set `final` on the delivered phase for the orange node.
