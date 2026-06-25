A white logo tile for the dark "selected clients" strip, with an optional mono category caption. Logos sit in a fixed 175:52 white card with a 3px radius.

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'14px 18px'}}>
  <ClientTile src="assets/client-bayer.svg" alt="Bayer" category="Pharma" />
  <ClientTile src="assets/client-tcs-vec.png" alt="TCS" category="IT services" fit="cover" />
</div>
```

Use `fit="contain"` for vector marks, `"cover"` for full-bleed raster logos. The caption renders white — place tiles on an ink ground.
