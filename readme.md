# Everything Design — Design System

A print-led, editorial design system for **proposals, engagement plans, and pitch
documents**. The house style is a working-document aesthetic: US-Letter sheets on a
dark canvas, warm-black ink on paper and cream, a single orange accent, hard corners,
hairline and dashed rules. It reads like a beautifully typeset consulting proposal —
not a web app, not a marketing site.

The reference artifact this system was distilled from is the **KaarTech engagement
plan** — a proposal for a 20-year SAP delivery firm repositioning around AI ahead of
an IPO. That document supplies the working vocabulary throughout (agendas, phases,
deliverables, sign-off panels, a "selected clients" logo strip).

---

## Sources

- **Codebase:** `KaarTech - Engagement Plan/` — the reference proposal (mounted locally
  during authoring; not bundled into this system).
- **Brand mark:** `assets/logos/ed-logo.webp` — the "everything design" lockup
  (orange four-petal mark + lowercase black wordmark).
- **Client logos:** `assets/clients/` — Bayer, Fractal, Grundfos, Razorpay, TCS, Ajax.

No Figma file was provided. Fonts are the three Google families noted below — no custom
binaries were supplied, so the webfonts load from Google Fonts (see "Substitutions").

---

## Content fundamentals

The voice is a **smart, plain-spoken consultant** writing to a single executive reader.
Calm, declarative, lightly conversational — never salesy, never buzzwordy.

- **Person:** Second-person *you* for the reader, first-person plural *we* for the
  authoring team. ("You walk away with…", "We'll have a working prototype by Friday.")
- **Casing:** Sentence case everywhere in prose and headings. The *only* uppercase is the
  mono micro-labels (eyebrows, pills, meta labels) — and those are tracked wide.
- **Headlines** are Petrona serif, short, and human — fragments and understatements over
  slogans. "The two hours, roughly." "Where this goes next." "What it costs."
- **Numbers & specifics** carry the argument — real timings, phase counts, client names,
  dates. Avoid vague superlatives; let the figures do the persuading.
- **No emoji. No exclamation marks.** Emphasis is by *color* (an orange word, a yellow
  marker strike) — never by bold-shouting and never by italics.
- **Punctuation:** em-dashes for asides, the occasional sentence fragment for rhythm.
  Mono labels are terse noun-phrases: `SELECTED CLIENTS`, `PHASE 02`, `YOU WALK AWAY WITH`.

Litmus test: if a line could appear in a venture memo or a thoughtful cover letter, it
fits. If it sounds like ad copy, rewrite it.

---

## Visual foundations

**Palette.** Strict monochrome warm-neutrals plus *one* hue. Paper `#ffffff`, cream
`#f3f1ec` for recessed fills, warm black `#0e0d0c` for ink (text *and* dark surfaces),
softened ink `#2a2723` for body, warm grey `#6a655c` for captions. The single accent is
signature orange `#fe532d` (`--accent-press #c93a17` for hover/press). A yellow marker
`#f5a623` (`--accent-2`) is the strike highlight — **at most once per page**. No other
hues exist. Imagery, when present, is the same warm monochrome, never a stock-photo wash.

**Type.** A three-family triad, no italics anywhere:
- **Petrona** (display serif) — heros, openers, headings, the human-voiced values.
- **Open Sans** (body sans) — all running copy and sub-lines.
- **Geist Mono** (labels) — uppercase, wide-tracked eyebrows, pills, meta labels, page
  chrome. The mono is what makes the system feel like a working document.

Display runs tight (`--track-display -0.035em`, leading `0.88–0.96`); mono labels run
wide (`--track-eyebrow 0.16em`). Mega cover size is 124px; body sits at 14.5px.

**Spacing & geometry.** Print-led. Page geometry is inch-based (8.5×11in, 0.7in × 0.55in
padding, a 0.4in chrome inset); component spacing is a px scale (`4 → 64`). Corners are
deliberately **hard**: 2px on cards, 3px on logo tiles, full-pill only on buttons/stamps.
There are no soft 12–16px radii anywhere.

**Borders & rules — the "blueprint" system.** Lines do a lot of work and they mix on
purpose: **dashed** opens a section, **dotted** splits items inside a component, **solid
hairline** is a hard edge or a card outline. Two weights (1px / 2px); the 2px dashed is
reserved for a phase-grid top edge.

**Surfaces & shadows.** Cards are flat — hairline border on paper, or cream fill recessed,
or inverted ink. **No drop shadows on components, ever.** The *one* shadow in the entire
system is `--shadow-sheet`, the soft lift of a Letter sheet floating above the dark
`--canvas #1d1b18`. No blur, no glassmorphism, no translucency on UI — transparency is
used only for the low-alpha hairline rules.

**Motion.** Minimal and restrained — this is a document system. If anything moves, it is a
short, soft fade or a quiet hover; no bounces, no springs, no decorative loops. Hover on
the orange button darkens to `--accent-press`; ghost/secondary actions shift opacity or
underline. Press states darken rather than scale. Default to *no animation*.

---

## Iconography

The system is **near-iconless by design** — meaning is carried by typography, numbering,
and rules, not by an icon set. There is no icon font and no SVG icon library in the source.

- **Numbering as iconography.** The recurring "icon" is the **NumTag** — a small 2px mono
  index box (`01`, `DAY 1`, `PHASE 02`) — plus mono gutter indices in `AgendaList`. Status
  is shown with a `Pill` (optionally a leading dot), not a glyph.
- **The brand mark** is the only decorative graphic: the orange four-petal "everything
  design" symbol (`assets/logos/ed-logo.webp`). Use it small, in a corner, as page chrome.
- **Client logos** (`assets/clients/`) are real vector/raster marks shown in white tiles on
  the dark "selected clients" strip — these are imagery, not icons.
- **No emoji, no unicode-glyph icons.** The only non-text marks are the bullet **dot** on a
  status pill and the **dot node** on a phase rail — both drawn as CSS, both orange when
  active.

If a future surface genuinely needs UI icons (a real app screen), use a thin, single-weight
line set — **Lucide** (CDN) is the closest match to the hairline aesthetic — and flag the
addition. Do not hand-draw decorative SVGs or introduce filled/duotone icons.

---

## Substitutions & caveats

- **Fonts:** No vendor font binaries were provided. Petrona, Open Sans, and Geist Mono all
  load from **Google Fonts** via `tokens/fonts.css`. If you have licensed/self-hosted
  copies, drop the `.woff2` files in and swap the `@import` for `@font-face` rules — the
  token families already name them first.
- **No UI kit / slide deck** is included yet — the reference artifact is a document, so this
  system ships foundations + editorial components. If you want a full sample proposal layout
  or a slide template built from these parts, ask and I'll add it.

---

## Index / manifest

**Root**
- `styles.css` — global entry point; consumers link this one file (an `@import` manifest only).
- `readme.md` — this guide.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated; do not edit.

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — the Petrona / Open Sans / Geist Mono webfont load.
- `colors.css` — base palette + semantic aliases (warm monochrome, one orange, one yellow).
- `typography.css` — families, weights, display/body/mono scales, tracking, leading.
- `spacing.css` — spacing scale, radii, the blueprint border set, inch-based page geometry,
  the single sheet shadow, the dark canvas.

**Components** (`components/`) — reusable React primitives, namespace `Proposal_f8fc29`
- `core/` — **Button**, **Card**, **Divider**, **Eyebrow**, **MetaPair**, **NumTag**,
  **Pill**, **StrikeText**.
- `editorial/` — **AgendaList**, **ClientTile**, **DeliverCard**, **PhaseCard**.
- `surfaces/` — **DarkPanel** (the warm-black feature / sign-off block).
- Each directory has a `*.card.html` showcase tagged `@dsCard group="Components"`.

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design System tab:
type triad / display / body / mono; ink-accent, neutrals, and on-ink colors; spacing scale
and radii.

**Assets** (`assets/`)
- `logos/ed-logo.webp` — the everything-design lockup.
- `clients/` — Bayer, Fractal, Grundfos, Razorpay, TCS, Ajax marks.

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.
