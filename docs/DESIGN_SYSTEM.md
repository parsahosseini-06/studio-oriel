# DESIGN_SYSTEM — Studio Oriel

Mirror of `design DNA.md` (tokens, typography, colour, spacing, radius, surface, components). Written by Vera, Phase 3, 2026-10-25. **The DNA is the source of truth**; if this file and the DNA differ, the DNA wins and Milo is told. Blocks below are copied verbatim from the DNA. Practice project, all content fictional.

## Tokens
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

  /* line weights (section 9) */
  --line-hair: 1px; --line-draw: 1.2px; --line-focus: 2px;
  --draw-stroke: 1.2;  /* SVG stroke-width in viewBox units; overridden per breakpoint so lines stay about 1.2 px on screen */
}
```
Breakpoints (not CSS variables, used in media queries): 480, 768, 1024, 1280 px. Test widths: 375, 390, 768, 1024, 1280, 1440.
Framer Motion needs numbers, not CSS variables: Dex mirrors the motion tokens once in `src/motion/tokens.ts` (durations in seconds, easings as 4-number arrays, spring configs). **The CSS values above are the source**; the mirror file carries a comment pointing here.

## Typography (DNA section 6)
| Slot | Family | Weight | Status | Reason |
|---|---|---|---|---|
| `--font-display` | Manrope | 300 (headings), 500 (small titles) | chosen for now | Light geometric sans suits pale, measured Survey Sheet and was used in the approved preview. |
| `--font-body` | Manrope | 300 at 17 px, 400 at 14 px and below | chosen for now | One family keeps the sheet calm; weight 400 under 15 px because 300 gets thin at small sizes. |
| `--font-mono` | JetBrains Mono | 400 (500 for buttons) | chosen for now | Mono labels carry dimensions, figure numbers and coordinates, the "survey" voice. |

Licence: both families are published on Google Fonts under the SIL Open Font License. **TBD (Phase 6): confirm licence text from the font repositories, decide self-host vs Google Fonts, subset to Latin, cap weights to the ones listed, add `font-display: swap` and size-adjusted fallbacks.**

| Role | Size (min to max, fluid) | Line height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | clamp(36px, 4.4vw, 60px) | 1.05 | 300 | -0.025em | Hero H1 |
| `display-quote` | clamp(30px, 4.4vw, 60px) | 1.1 | 300 | -0.025em | Philosophy line |
| `heading` | clamp(30px, 3.4vw, 46px) | 1.1 | 300 | -0.02em | Case-study title |
| `title` | 20px | 1.3 | 500 | 0 | Service names |
| `body` | 17px | 1.6 | 300 | 0 | Paragraphs, max measure 40ch in panels, 65ch elsewhere |
| `body-small` | 14px | 1.5 | 400 | 0 | Service descriptions, form help |
| `mono-ui` | 13px | 1.4 | 500 | 0.04em | CTA, buttons, links in mono |
| `mono-caption` | 12px | 1.5 | 400 | 0 | Meta lists, footer, note-card text, nav |
| `mono-label` | 11px | 1.4 | 400 | 0.10em, uppercase | Eyebrows, coordinates, dimension labels. 11 px is the smallest rendered size anywhere |

Alignment: left (`text-align: start`), never justified, never centred except none in this direction. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`. Numerals are Latin; mono figures use tabular numbers by nature.
Reason for fluid sizes: values come straight from the approved preview, so the prototype and the build match.

## Colour (DNA section 7)
Direction C is pale and technical: a grey-blue canvas, graphite text, mid blue-grey linework, and **one** vermilion (red-orange) accent used only on pins, the CTA fill, focus rings and underlines.

| Token | Value | Role and reason |
|---|---|---|
| `--color-bg` | `#E9EDEF` | Tracing-paper canvas. From preview. |
| `--color-surface` | `#F4F6F7` | Panels and plan paper sit one step lighter so text blocks are clear zones. |
| `--color-text` | `#1D2226` | Graphite; 13.6:1 on bg. |
| `--color-text-muted` | `#46555F` | Captions and labels. Replaces the preview's `#6F8190` for text, which failed. |
| `--color-border` | `#6F8190` | Linework that must be seen; meets 3:1. |
| `--color-border-subtle` | `rgb(111 129 144 / 0.40)` | Decorative dividers only; carries no meaning. |
| `--color-grid-line` | `rgb(111 129 144 / 0.12)` | 48 px drafting grid behind the page; decorative. |
| `--color-accent` | `#C73E2C` | The pin. Parsa asked on 2026-10-25 for the preview orange (`#C84A28`, hue 13°) shifted toward red; this is hue 7° at similar lightness and saturation. The direction-text example `#D9552F` is not used. |
| `--color-accent-hover` | `#A5301F` | Darker, same hue, for hover/active of the CTA fill. |
| `--color-on-accent` | `#FFFFFF` | Label on accent fill. |
| `--color-focus` | `#C73E2C` | Focus ring on bg and surface (4.29:1 on bg and 4.66:1 on surface). |
| `--color-focus-on-photo` | `#1D2226` | Over photos the ring is 2 px surface inside plus 2 px ink outside, so it reads on any tone. |
| `--color-inverse` / `--color-on-inverse` | `#1D2226` / `#FFFFFF` | Direction tag (prototype only), plan toggle. |
| `--color-success` | `#2F6B4F` | Form sent message, always with the word "Sent" and a check icon. |
| `--color-danger` | `#B3261E` | Field error, always with text and an icon, never colour alone. |
| `--color-photo-base` | `#BDD0DC` | Base colour under the multiplied greyscale photo (duotone). |

**Accent rules:** accent is never body or label text (4.29:1 on bg fails 4.5:1). It appears as fills with white text, as 1 to 2 px rings and underlines, and as the pin dot.

### Contrast, computed
Method (WCAG 2.x): each sRGB channel c/255 becomes linear = c/12.92 if c ≤ 0.03928, else ((c + 0.055) / 1.055)^2.4. Relative luminance L = 0.2126 R + 0.7152 G + 0.0722 B. Ratio = (L_lighter + 0.05) / (L_darker + 0.05). Text needs 4.5:1, large text and UI/non-text need 3:1. Translucent colours are composited over their background first. Script: `design/tools/contrast.py` (run `python3 design/tools/contrast.py`); the numbers below are its output.

| Pair (foreground on background) | Values | Ratio | Needs | Result |
|---|---|---|---|---|
| text on bg | `#1D2226` on `#E9EDEF` | 13.62:1 | 4.5:1 (text) | PASS |
| text on surface | `#1D2226` on `#F4F6F7` | 14.80:1 | 4.5:1 (text) | PASS |
| text-muted on bg | `#46555F` on `#E9EDEF` | 6.54:1 | 4.5:1 (text) | PASS |
| text-muted on surface | `#46555F` on `#F4F6F7` | 7.11:1 | 4.5:1 (text) | PASS |
| on-accent on accent (CTA label) | `#FFFFFF` on `#C73E2C` | 5.06:1 | 4.5:1 (text) | PASS |
| on-accent on accent-hover | `#FFFFFF` on `#A5301F` | 6.90:1 | 4.5:1 (text) | PASS |
| on-inverse on inverse (label bar, plan toggle) | `#FFFFFF` on `#1D2226` | 16.04:1 | 4.5:1 (text) | PASS |
| on-inverse 75% on inverse (secondary link in bar) | `#C6C8C9` on `#1D2226` | 9.55:1 | 4.5:1 (text) | PASS |
| success on surface | `#2F6B4F` on `#F4F6F7` | 5.81:1 | 4.5:1 (text) | PASS |
| success on bg | `#2F6B4F` on `#E9EDEF` | 5.34:1 | 4.5:1 (text) | PASS |
| danger on surface | `#B3261E` on `#F4F6F7` | 6.03:1 | 4.5:1 (text) | PASS |
| danger on bg | `#B3261E` on `#E9EDEF` | 5.55:1 | 4.5:1 (text) | PASS |
| border on bg (field and panel outlines) | `#6F8190` on `#E9EDEF` | 3.42:1 | 3.0:1 (UI/non-text) | PASS |
| border on surface | `#6F8190` on `#F4F6F7` | 3.71:1 | 3.0:1 (UI/non-text) | PASS |
| accent on bg (focus ring, underline, pin on paper) | `#C73E2C` on `#E9EDEF` | 4.29:1 | 3.0:1 (UI/non-text) | PASS |
| accent on surface (focus ring, pin dot vs its paper ring) | `#C73E2C` on `#F4F6F7` | 4.66:1 | 3.0:1 (UI/non-text) | PASS |
| focus-on-photo ink vs paper (inner/outer ring pair) | `#1D2226` on `#F4F6F7` | 14.80:1 | 3.0:1 (UI/non-text) | PASS |
| pin keyline (best of paper or ink ring) on photo-sky #BCCDD9 | `#1D2226` on `#BCCDD9` | 9.83:1 | 3.0:1 (UI/non-text) | PASS |
| pin keyline (best of paper or ink ring) on photo-mid #8A97A1 | `#1D2226` on `#8A97A1` | 5.36:1 | 3.0:1 (UI/non-text) | PASS |
| pin keyline (best of paper or ink ring) on photo-dark #5A6670 | `#F4F6F7` on `#5A6670` | 5.43:1 | 3.0:1 (UI/non-text) | PASS |
| pin keyline (best of paper or ink ring) on photo-vdark #2F373D | `#F4F6F7` on `#2F373D` | 11.17:1 | 3.0:1 (UI/non-text) | PASS |

Photo tones (`photo-sky`, `photo-mid`, `photo-dark`, `photo-vdark`) are four tones I read by eye from the hero screenshot, not measured pixel samples. They bracket the range, but the pin check must be repeated on real pixels in Phase 12.

**Lowest text ratio: 5.06:1** (white label on the accent CTA). **Lowest overall ratio: 3.42:1** (border on bg, a UI element needing 3:1).

Failures found in the preview and fixed (kept as evidence):

| Pair (foreground on background) | Values | Ratio | Needs | Result |
|---|---|---|---|---|
| preview coord label colour #6F8190 on bg | `#6F8190` on `#E9EDEF` | 3.42:1 | 4.5:1 (text) | FAIL (rejected) |
| preview plan axis #8795A0 on surface | `#8795A0` on `#F4F6F7` | 2.83:1 | 3.0:1 (UI/non-text) | FAIL (rejected) |
| preview pin ring accent alone on photo-sky | `#C73E2C` on `#BCCDD9` | 3.10:1 | 3.0:1 (UI/non-text) | PASS |
| preview pin ring accent alone on photo-mid | `#C73E2C` on `#8A97A1` | 1.69:1 | 3.0:1 (UI/non-text) | FAIL (rejected) |
| preview pin ring accent alone on photo-dark | `#C73E2C` on `#5A6670` | 1.16:1 | 3.0:1 (UI/non-text) | FAIL (rejected) |
| accent used as text on bg | `#C73E2C` on `#E9EDEF` | 4.29:1 | 4.5:1 (text) | FAIL (rejected) |

Overlay text on photos ("12 400 mm", "PLAN A–A", figure labels) is decorative (`aria-hidden`) and repeats information that also exists as real text on a surface. Any overlay text that carries information must sit on a `--color-surface` or `--color-inverse` plate, never directly on a photo.

## Spacing (DNA section 5, Spacing)
Scale (4 px base, unchanged from the team default): `--space-1` 4, `--space-2` 8, `--space-3` 12, `--space-4` 16, `--space-6` 24, `--space-8` 32, `--space-12` 48, `--space-16` 64, `--space-20` 80, `--space-24` 96, `--space-32` 128, `--space-40` 160.

| Use | Value | Reason |
|---|---|---|
| Page side margin | `--space-12` (48) from 1024 up, `--space-4` (16) below 768, `--space-8` (32) between | Preview used 40 and 18, which are off-scale; snapped to the scale. |
| Column gap | `--space-6` (24) | 12-column grid with a 24 px gutter. |
| Gap between the two hero regions | `--space-12` (48) | Preview used 40; snapped. |
| Section top padding | `--space-32` (128) desktop, `--space-20` (80) below 768 | Preview used 120 and 80. |
| Panel padding | `--space-8` (32) desktop, `--space-6` (24) mobile | Preview used 36 and 22. |
| Inside lists and cards | `--space-3` to `--space-6` | Small steps keep the sheet dense but calm. |

## Radius (DNA section 9)
Scale (unchanged default): `--radius-none` 0, `--radius-sm` 4, `--radius-md` 8, `--radius-lg` 16, `--radius-full` pill/circle.
Direction C is square. **Everything uses `--radius-none`** (photos, panels, buttons, fields, note cards). **`--radius-full` is used only for pins, pin halos and the lens ring**, because they are survey marks (circles at junctions). `sm`, `md` and `lg` are defined for completeness and are not used in this project.

## Surface and depth (DNA section 9)
- **Borders:** 1 px (`--line-hair`) in `--color-border`; panels and note cards have a full 1 px border. Reason: lines, not fills, separate things.
- **Hairlines:** 1 px dividers in `--color-border-subtle`; drawn SVG linework is `--line-draw` (1.2 px) on screen; the stroke width is set per breakpoint through `--draw-stroke` instead of `vector-effect: non-scaling-stroke`, which breaks `pathLength` dashes in some browsers.
- **Shadows:** none. No box-shadow anywhere. Depth comes from the surface/bg step and from overlap with a border. (Optional paper depth from Direction A is **not** part of this DNA; add only if Parsa asks, as a logged override.)
- **Blur:** the sticky header may use `backdrop-filter: blur(6px)` over `rgb(233 237 239 / 0.9)`. No other glass or blur.
- **Focus ring:** 2 px `--color-focus`, 3 px offset; over photos 2 px `--color-surface` then 2 px `--color-focus-on-photo`.
- **Background:** a 48 px drafting grid (`--space-12`) in `--color-grid-line`, on the page only, never under body text blocks (panels are `--color-surface`).

## Components (DNA section 12)
Source is **custom** for every component. No shadcn/ui, 21st.dev or React Bits component is used in this project (inventory below is complete). Every component reads tokens only.

| Component | Source | Modifications / notes |
|---|---|---|
| SkipLink | custom | First focusable element; jumps to main. |
| Header | custom | Sticky 60 px, wordmark, CoordLabel, 3 anchors, CTA. Below 768 px anchors move into IndexDisclosure. |
| CoordLabel | custom | Mono label such as "01 / Intro", updated by IntersectionObserver; `aria-hidden`, since headings name the sections. |
| IndexDisclosure | custom | 44×44 button below 768 px that opens a full-width list of the three anchors. Panel stays mounted; opens with `translateY(-8px)` + opacity (10.7), never height. |
| Button (primary) | custom | Accent fill, `--color-on-accent` label, mono-ui, square. |
| TextLink | custom | Ink text with 1 px accent underline offset 3 px. |
| Panel | custom | `--color-surface`, 1 px border, `--space-8` padding; holds all body text near images. |
| DuotoneImage | custom | Greyscale + contrast + multiply on photo base (section 8); optional linework overlay slot. |
| HeroPlanLens | custom | Photo, drawn overlay, plan layer, lens ring, 4 Hotspots, NoteCard, PlanToggle (section 11). |
| Hotspot | custom | Real `<button>`, 44×44 hit area, pin dot Ø10 with halo. |
| NoteCard | custom | Number, name, one line; mono-caption; square, bordered. Always mounted, shown by CSS (opacity, transform, visibility). |
| PlanToggle | custom | Inverse-colour button, `aria-pressed`, shortcut P. |
| FragmentFigure | custom | Small photo with 1 px frame and "FIG. 01 — fragment" caption. |
| CaseStudy | custom | Image with annotation spots, title, SpecList, two thumbnails. |
| SpecList | custom | `dl` in mono-caption: place, year, type. |
| ServiceItem | custom | Name, one line, small line icon that turns accent on hover. |
| PhilosophyQuote | custom | Display-quote with a 220 px ink rule above. |
| ContactForm | custom | Name, email, message; Field, FieldError, SentMessage; no backend. |
| Field (input, textarea) | custom | 1 px border, label above, drawn line under focus. |
| Footer | custom | Mono-caption, fictional notice and credits pointer. |
| DirectionTag | custom, **prototype only** | Not shipped. |

State matrix (all states use only tokens; hover is skipped on touch):

| Component | Default | Hover | Focus | Active | Disabled | Error |
|---|---|---|---|---|---|---|
| Button primary | accent fill, white label | `--color-accent-hover` fill | 2 px focus ring, 3 px offset | accent-hover fill, translateY(1px) | `--color-border-subtle` fill, `--color-text-muted` label, `aria-disabled`, no pointer | n/a |
| TextLink | ink, accent underline | underline thickens to 2 px | focus ring | ink stays, underline accent-hover | muted text, no underline | n/a |
| Hotspot | pin dot, halo 0 | halo 0.2 accent, scale up to 1.45, magnetic pull within 80 px | halo and card as hover plus ring | pinned: filled halo, `aria-pressed=true` | n/a | n/a |
| NoteCard | hidden | n/a | shown for the focused hotspot | pinned stays until Esc | n/a | n/a |
| PlanToggle | inverse fill | slight lift of label opacity to 1 | focus ring | `aria-pressed=true` swaps to surface fill, ink label | n/a | n/a |
| ServiceItem | muted icon line | icon line to accent | focus ring on whole item | icon accent-hover | n/a | n/a |
| Field | 1 px border, label above | border to `--color-text` | line draws under field (accent, `--line-focus`, `scaleX` from the start edge), border stays | n/a | muted, dashed border | border and message in `--color-danger`, icon, text; `aria-invalid` and `aria-describedby` |
| IndexDisclosure | 44×44 mono "Index" | border to text | focus ring | open: `aria-expanded=true` | n/a | n/a |
