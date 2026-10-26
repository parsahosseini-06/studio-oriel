# TOKENS — Studio Oriel

Hand-off spec for Dex: turn this into `src/styles/tokens.css`. Written by Vera, Phase 6 step 1, 2026-10-26. Names and values are those of `design DNA.md` (section 7 token block); the DNA wins on any difference. Practice project, all content fictional. Colour values are unchanged from the DNA, so `design/tools/contrast.py` was not rerun (last run 2026-10-25: all token pairs pass, lowest text 5.06:1, lowest UI 3.42:1).

## 1. Tokens (final values)

### 1.1 The complete `:root` block
Copy as is. Every line is also in the DNA token block; the `/* ... */` notes are the one-line uses.

```css
:root {
  /* colour (section 7) */
  --color-bg: #E9EDEF;            /* tracing-paper canvas */
  --color-surface: #F4F6F7;       /* panels, cards, plan paper */
  --color-text: #1D2226;          /* graphite */
  --color-text-muted: #46555F;    /* captions, labels, meta */
  --color-border: #6F8190;        /* hairlines that must be seen (3:1 UI) */
  --color-border-subtle: rgb(111 129 144 / 0.40);   /* dividers, decorative */
  --color-grid-line: rgb(111 129 144 / 0.12);       /* drafting-grid background, decorative */
  --color-accent: #C73E2C;        /* vermilion red-orange pin: fills, rings, underlines. Never text. */
  --color-accent-hover: #A5301F;
  --color-on-accent: #FFFFFF;
  --color-focus: #C73E2C;         /* focus ring on bg/surface */
  --color-focus-on-photo: #1D2226;/* outer ring on photos, paired with a 2 px --color-surface inner ring */
  --color-inverse: #1D2226;       /* label bar, plan toggle */
  --color-on-inverse: #FFFFFF;
  --color-success: #2F6B4F;
  --color-danger: #B3261E;
  --color-photo-base: #BDD0DC;    /* duotone base under multiply */

  /* typography (section 6) */
  --font-display: "Manrope", system-ui, sans-serif;
  --font-body: "Manrope", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* spacing, 4 px base (section 5) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-20: 80px; --space-24: 96px; --space-32: 128px; --space-40: 160px;

  /* radius (section 9) */
  --radius-none: 0; --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 9999px;

  /* motion (section 10) */
  --duration-fast: 150ms; --duration-base: 300ms; --duration-slow: 900ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-exit: cubic-bezier(0.2, 0, 0, 1);   /* ease-out shape: leaving things start moving at once */

  /* layout (section 5); step on the breakpoints below */
  --margin: var(--space-4);       /* 16 below 768, --space-8 from 768, --space-12 from 1024 */
  --sec-pad: var(--space-20);     /* --space-32 from 768 */
  --panel-pad: var(--space-6);    /* --space-8 from 768 */
  --header-h: 60px;
  --maxw: 1280px;

  /* type sizes (section 6), fluid */
  --t-display: clamp(36px, 4.4vw, 60px);
  --t-quote: clamp(30px, 4.4vw, 60px);
  --t-heading: clamp(30px, 3.4vw, 46px);

  /* stacking (section 9) */
  --z-raised: 2; --z-hotspot: 3; --z-card: 4; --z-header: 10; --z-skip: 20;

  /* 12-column grid (section 5) */
  --grid-cols: 12;
  --grid-gap: var(--space-6);
  --grid-region-gap: var(--space-12);
  --grid-size: var(--space-12);   /* drafting-grid cell */

  /* line weights (section 9) */
  --line-hair: 1px; --line-draw: 1.2px; --line-focus: 2px;
  --draw-stroke: 1.2;  /* SVG stroke-width in viewBox units; overridden per breakpoint so lines stay about 1.2 px on screen */
}
```

### 1.2 One-line use per token
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#E9EDEF` | Page canvas (also called "bg"). |
| `--color-surface` | `#F4F6F7` | Panels, cards, plan paper (called "paper" in the preview). |
| `--color-text` | `#1D2226` | Body and heading text (called "ink" in the preview). |
| `--color-text-muted` | `#46555F` | Captions, labels, meta; 6.54:1 on bg. |
| `--color-border` | `#6F8190` | Visible hairlines and field outlines ("line"); 3.42:1 on bg. Never for text. |
| `--color-border-subtle` | `rgb(111 129 144 / 0.40)` | Decorative dividers and the disabled fill. |
| `--color-grid-line` | `rgb(111 129 144 / 0.12)` | 48 px drafting grid on the page background only. |
| `--color-accent` | `#C73E2C` | Pin dot, CTA fill, focus ring, underlines. Never text. |
| `--color-accent-hover` | `#A5301F` | CTA hover and active fill. |
| `--color-on-accent` | `#FFFFFF` | Label on the CTA; 5.06:1 on accent. |
| `--color-focus` | `#C73E2C` | Focus ring on bg and surface. |
| `--color-focus-on-photo` | `#1D2226` | Outer focus ring over photos, inside a 2 px surface ring. |
| `--color-inverse` / `--color-on-inverse` | `#1D2226` / `#FFFFFF` | Skip link, plan toggle. |
| `--color-success` | `#2F6B4F` | Form "Sent" message, with word and icon. |
| `--color-danger` | `#B3261E` | Field error, with text and icon. |
| `--color-photo-base` | `#BDD0DC` | Colour under the multiplied greyscale photo. |
| `--font-display`, `--font-body` | Manrope | Headings, body. |
| `--font-mono` | JetBrains Mono | Labels, captions, buttons, spec lists. |
| `--space-1` … `--space-40` | 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160 px | The only spacing values. `--space-12` is also the hero top padding. |
| `--radius-none` | 0 | Everything. |
| `--radius-full` | 9999px | Pins, halos, lens ring only. |
| `--radius-sm`, `-md`, `-lg` | 4, 8, 16 px | Defined for completeness; unused in this project. |
| `--line-hair` | 1px | Panel and field borders, dividers. |
| `--line-draw` | 1.2px | Drawn SVG linework on screen. |
| `--line-focus` | 2px | Focus ring and field focus line. |
| `--draw-stroke` | 1.2 | SVG `stroke-width` in viewBox units (see 2.4). |
| `--duration-fast` / `-base` / `-slow` | 150 / 300 / 900 ms | Hover and exits / panels and wipes / line draws. |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Colour and underline changes only. |
| `--ease-enter` | `cubic-bezier(0.23, 1, 0.32, 1)` | Things appearing or moving. |
| `--ease-exit` | `cubic-bezier(0.2, 0, 0, 1)` | Things leaving, with `--duration-fast`. |
| `--margin` | 16 / 32 / 48 px | Page side margin; steps at 768 and 1024. |
| `--sec-pad` | 80 / 128 px | Section top padding; steps at 768. |
| `--panel-pad` | 24 / 32 px | Panel padding; steps at 768. |
| `--header-h` | 60px | Sticky header height; also `scroll-padding-top`. |
| `--maxw` | 1280px | Content width cap. |
| `--t-display`, `--t-quote`, `--t-heading` | fluid, see 2.2 | Hero H1, philosophy line, case-study title. |
| `--grid-cols` | 12 | Number of grid columns. |
| `--grid-gap` | `--space-6` (24px) | Column gutter. |
| `--grid-region-gap` | `--space-12` (48px) | Gap between the two hero regions. |
| `--grid-size` | `--space-12` (48px) | Drafting-grid cell on the page background. |
| `--z-raised` 2, `--z-hotspot` 3, `--z-card` 4, `--z-header` 10, `--z-skip` 20 | integers | The whole stacking scale. Header is above content; skip link above header. |

### 1.3 Type roles (not variables; write them as utility classes or component styles)
| Role | Size | Line height | Weight | Tracking | Family |
|---|---|---|---|---|---|
| display | `var(--t-display)` | 1.05 | 300 | -0.025em | display |
| display-quote | `var(--t-quote)` | 1.1 | 300 | -0.025em | display |
| heading | `var(--t-heading)` | 1.1 | 300 | -0.02em | display |
| title | 20px | 1.3 | 500 | 0 | display |
| body | 17px | 1.6 | 300 | 0 | body |
| body-small | 14px | 1.5 | 400 | 0 | body |
| mono-ui | 13px | 1.4 | 500 | 0.04em | mono |
| mono-caption | 12px | 1.5 | 400 | 0 | mono |
| mono-label | 11px | 1.4 | 400 | 0.10em, uppercase | mono |
Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`. 11 px is the smallest rendered size. Weights used: Manrope 300, 400, 500; JetBrains Mono 400, 500. Measure: 40ch in Panels and 65ch elsewhere.

### 1.4 Grid
| Item | Value |
|---|---|
| Columns | `--grid-cols` 12 |
| Gutter | `--grid-gap` = `--space-6` (24px) |
| Hero region gap | `--grid-region-gap` = `--space-12` (48px) |
| Margins | `--margin`: 16 (under 768), 32 (768 to 1023), 48 (1024 up) |
| Max content width | `--maxw` 1280px, centred: `width: min(100% - 2 * var(--margin), var(--maxw))` |
| Drafting grid | `--grid-size` = 48px (`--space-12`) in `--color-grid-line`, page background only |
| Hero | 7 / 5 columns from 1024 and in the landscape-phone rule; stacked image first below |
| Case study | 5 / 7 columns from 1024; stacked below |
| Services | 4 columns from 1024; 2 columns below; 1 column under 360 |
| Contact | heading columns 1 to 5, Panel 6 to 12 from 1024 |
| Footer | 12 columns from 1024: wordmark 1 to 3, text 4 to 8, links 9 to 12 |

### 1.5 Breakpoints (media queries, not variables)
| Width | Use |
|---|---|
| 360 | Services drop to one column below this (mockup only; keep). |
| 480 | CTA label becomes "Contact" below it. |
| 768 | Margin 32, section padding 128, panel padding 32, anchors visible and Index button hidden. |
| 1024 | Margin 48; hero, case study, contact and footer go multi-column; FragmentFigure shows; services 4 columns. |
| 1200 | Header coordinate label shows from here. |
| 1280 | Case-study spec list may use two columns from here (it is one column from 1024 to 1279). |
| Landscape phone | `(orientation: landscape) and (max-height: 520px) and (min-width: 640px)`: two-column hero, Panel padding `--space-6`. |
| 1440 | Not a breakpoint: nothing changes above 1376 px because `--maxw` caps the content. It stays a test width. |
Capability queries: `(hover: hover)` for every hover effect, `(hover: none)` for the touch hint, `(prefers-reduced-motion: reduce)` for the reduced block and `no-preference` for smooth scroll.

## 2. Fluid and responsive values

### 2.1 Rule
Only the sizes that visibly need it are fluid (display, quote, heading). Margins, section padding and panel padding step on the spacing scale at 768 and 1024, because DNA section 5 uses scale values, not in-between pixels. Between the steps the layout is fluid anyway: the wrapper is `min(100% - 2 * var(--margin), var(--maxw))`, columns are `fr`, images keep fixed aspect ratios.

### 2.2 Fluid type
| Token | Formula | At 320 | 390 | 768 | 1024 | 1440 | 1920+ |
|---|---|---|---|---|---|---|---|
| `--t-display` | `clamp(36px, 4.4vw, 60px)` | 36 | 36 | 36 | 45.1 | 60 | 60 |
| `--t-quote` | `clamp(30px, 4.4vw, 60px)` | 30 | 30 | 33.8 | 45.1 | 60 | 60 |
| `--t-heading` | `clamp(30px, 3.4vw, 46px)` | 30 | 30 | 30 | 34.8 | 46 | 46 |
Floor reached below 818 px for display, 682 px for quote and 882 px for heading; cap reached at 1364, 1364 and 1353 px. Body (17), body-small (14) and the mono sizes are fixed so reading size never depends on the viewport. A `vw`-only middle term does not respond to browser zoom, so at 200 % zoom the floor still gives readable sizes; these values are the DNA's, so no `rem` conversion is made.

### 2.3 Margins and padding per width
| Width | `--margin` | Content width | `--sec-pad` | `--panel-pad` |
|---|---|---|---|---|
| 320 | 16 | 288 | 80 | 24 |
| 390 | 16 | 358 | 80 | 24 |
| 768 | 32 | 704 | 128 | 32 |
| 1024 | 48 | 928 | 128 | 32 |
| 1440 | 48 (content is capped, so about 80 each side) | 1280 | 128 | 32 |
| 1920 | 48 (about 320 each side) | 1280 | 128 | 32 |

### 2.4 Reaching 320 and 1920+
- **320:** same rules as 390. Margin 16 leaves 288 px. Display floors at 36 px, so words must fit 288 px: the longest word in CONTENT must be checked (unverified, Quinn). Services go to one column below 360. Buttons keep 44 px minimum height; the CTA is "Contact" below 480. Nothing may scroll sideways (`overflow-x` is hidden on body in the mockup as a safety net, not as the fix).
- **1920 and wider:** no new breakpoint. Content stays 1280 px and centred; type stops growing at 60 px. The drafting grid and the header continue full width, so the sheet looks like a larger sheet of paper rather than a stretched layout. Photos never exceed their column width, so no image is upscaled past its 1400 px source.
- **Short and landscape screens:** the landscape-phone rule keeps hero text and photo side by side; the case-study image is capped at `min(704px, 80svh)` while stacked. 704 is the content width at 768, not a spacing token.
- **SVG linework:** `stroke-width` is `--draw-stroke` (1.2 viewBox units). On a scaled-down SVG that is under 1.2 px on screen; set a per-breakpoint value so it stays about 1.2 px: hero SVG viewBox is about 700 wide, so use 1.2 at 1024 and up, 1.6 at 390 (unverified, check in Phase 12).

## 3. Diff: prototype `:root` against the DNA
Source: `design/mockups/prototype/index.html` lines 20 to 47, compared by script against the DNA token block. Prototype defines 52 properties.

| Result | Count | Tokens |
|---|---|---|
| Match (name and value identical) | 44 | All colours, fonts, `--space-*`, `--radius-none`, `--radius-full`, durations, easings, `--line-*`, `--draw-stroke`, `--color-photo-base` |
| Kai's extra (not in the DNA before today) | 8 | `--margin`, `--sec-pad`, `--panel-pad`, `--header-h`, `--maxw`, `--t-display`, `--t-quote`, `--t-heading` |
| Mismatch in value | 0 | none |
| DNA only (not in prototype) | 3 | `--radius-sm`, `--radius-md`, `--radius-lg` |

Decisions (DNA wins on conflicts; no conflict was found in values):
- **Kai's 8 extras:** adopted into the DNA token block as proposed tweaks, logged in DNA section 16 (2026-10-26). Reason: they implement values the DNA already states (margins 16/32/48, section padding 80/128, panel padding 24/32, header 60, max width 1280, type clamps), and Kai's names are already in the approved mockup.
- **DNA-only radii:** keep in `tokens.css`; they cost nothing and the DNA lists them.
- **Z-index:** the mockup uses raw numbers (skip 20, header 10, card 4, hotspot 3, fragment 2). Added as `--z-*` tokens with the same numbers.
- **Local properties** `--d` (animation delay), `--z`, `--ox`, `--oy` (image zoom and origin) are set inline per element. They are component inputs, not tokens; do not put them in `tokens.css`. (`--z` is zoom, not z-index; rename to `--zoom` in the build to avoid confusion with `--z-*`.)

Non-variable mismatches found in the mockup:
| Item | Mockup | DNA | Winner and action |
|---|---|---|---|
| CoordLabel visible | from 1200 px | hidden below 768 (C3) | **Mockup wins.** At 768 to 1199 the wordmark, three anchors and CTA fill the header. DNA updated and logged. |
| Landscape-phone rule | two-column hero | not stated | **Mockup wins**; added to the DNA breakpoint list. |
| 1200 breakpoint | used | not listed | Added to the DNA list. |
| JetBrains Mono `@font-face` weight range | `100 800` | weights 400 and 500 | The file's real axis is 400 to 800 (checked with fontTools). Declare `400 800`. |
| `overflow-x: hidden` on body | present | not stated | Keep as a safety net only; Quinn checks that no section overflows without it. |
| `→` in "View the project →" | used | not stated | Neither font has U+2192, so it falls back to a system font. Either accept the fallback or replace it with an SVG arrow (Dex decides; low risk). |

## 4. Fonts (updated 2026-10-26, after Dex's build)
- **Hosting:** self-hosted Latin variable subsets in `public/fonts/`: `Manrope-Variable-latin.woff2` (`wght` 200 to 800) and `JetBrainsMono-Variable-latin.woff2` (declared `400 800`, matching the file's real axis). No third-party font request.
- **Licence:** SIL Open Font License 1.1; the texts are in `public/fonts/` (`LICENSE-Manrope-OFL.txt`, `LICENSE-JetBrainsMono-OFL.txt`). Checked that the folder lists them and the Manrope one opens with the upstream copyright line; I did not compare them with upstream.
- **Loading:** `font-display: swap` in the two `@font-face` rules in `src/styles/globals.css`; only Manrope is preloaded (`index.html` line 8), because it paints the headline and the photo is the LCP image.
- **Still open (Phase 12):** size-adjusted fallback metrics (`size-adjust`, `ascent-override`), decided after a CLS check.
- **Type roles are classes** in `src/styles/globals.css` with fixed px sizes 11, 12, 13, 14, 17, 20 and the three fluid tokens. Phase 7 components must use those classes and set no font sizes of their own.
- **`→` glyph:** neither font has U+2192, so it falls back to a system font. Decision for Phase 7: use an inline SVG arrow with the same stroke as the link underline (logged in DNA section 16 as a proposal).

## 5. Needs Parsa
Nothing blocks. Low-priority choices Dex can make: accept the system-font fallback for the `→` arrow or swap it for an SVG, and whether to keep `overflow-x: hidden` on body.
