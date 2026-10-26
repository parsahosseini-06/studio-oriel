# Design DNA — Studio Oriel

Owner: Vera (UI Designer) · Phase 3 · Date: 2026-10-25 · Source of truth for the project. If a doc and the code disagree, stop and report to Milo.
Mirrors: `docs/DESIGN_SYSTEM.md` (sections 5 spacing, 6, 7, 9, 12 and the token block) and `docs/MOTION.md` (sections 10 and 11). The DNA wins over a mirror.

> PRACTICE PROJECT. Studio Oriel, its projects and people are fictional. Photos are free Unsplash photos of real buildings and never show the studio's work.

## 1. Meta
| Field | Value | Reason |
|---|---|---|
| Project | Studio Oriel (fictional practice project) | Name **confirmed by Parsa on 2026-10-25** (first chosen 2026-10-22). |
| Audience | Prospective clients (primary), collaborators, press and editors, graduates | From PROJECT_BRIEF section 3; personas are reasoned assumptions. |
| Goal | In one scroll, make a visitor feel the studio's taste and rigour, then start a conversation | PROJECT_BRIEF section 2. |
| Primary CTA | "Start a conversation" (placeholder form or mailto, no backend) | G0 assumption A5. |
| Language and direction | English only, LTR, Latin numerals | Parsa's G0 answer; logged in section 14. |
| Direction chosen | C · Survey Sheet (paper depth from A optional, only if Parsa asks) | Chosen by Parsa 2026-10-25; hero prototype approved. |
| Approval | **Pending Parsa** | Parsa has approved direction and prototype, not this document. |

## 2. Priorities
1. **Beauty.** Reason: the brief asks for minimal, luxury, editorial work.
2. **Brand expression.** Reason: the survey-sheet language (drawn, measured) is the differentiator.
3. **Speed.** Reason: priority 3 in G0 assumptions; it still sets the motion budget (section 10.3).
Source: PROJECT_BRIEF section 6 and G0 assumption A1.

## 3. Non-negotiables
| Item | Setting | Reason |
|---|---|---|
| Contrast WCAG AA | **On**: 4.5:1 text, 3:1 large text and UI | Readability; computed in section 7. |
| Visible focus | **On**: 2 px ring on every interactive element | Keyboard users must always see where they are. |
| Touch targets 44×44 | **On**: all buttons, pins, links in nav and the toggle | Pins are small visually, so the hit area is padded. |
| Reduced motion | **Respect**: every animation has a reduced variant | G0 and AGENTS.md; information never depends on motion. |
| Keyboard operability | **On**: every pointer feature has a keyboard and touch equivalent | The hero lens must not be pointer-only. |

## 4. Art direction
**Primary label: Survey Sheet.** Secondary labels: Editorial Technical, Quiet Drafting. Brand personality from the brief: premium, minimal, editorial, sophisticated, calm.

| Atmosphere word | Becomes these observable decisions |
|---|---|
| Drawn | Photos carry 1.2 px linework (outlines, leaders, dimension ticks); circles at junctions; right angles only. |
| Measured | Mono labels with real-looking units ("12 400 mm"), figure numbers, coordinate label "01 / Intro" in the header. |
| Pale | Grey-blue canvas, duotone photos, one accent only; no black fills and no gradients beyond a faint photo vignette. |
| Annotated | Hotspots and notes explain parts of buildings; captions use place, year and typology. |
| Calm | Square, shadowless, little motion, long 900 ms draws only on arrival, generous 128 px section rhythm. |

**The site must not become:** a blueprint cliché (heavy, glowing or animated-noise CAD lines), a generic image grid, collage as noise, motion for show, luxury clichés (gold, serif-italic word swaps), or anything implying the photos are the studio's work.
Collage method: toned photos sit beneath thin vector overlays; the overlay is always above the photo and never beneath body text. Panels are required for paragraphs, forms and lists of sentences; headings, mono labels, captions and one-line display quotes may sit on the grid (override C2). Paper depth from Direction A is **optional** and not included.

## 5. Layout
| Item | Value | Reason |
|---|---|---|
| Grid | 12 columns, 24 px gutter, drafting grid background 48 px | Loose drafting grid from the direction; gutter on the spacing scale. |
| Max width | 1280 px outer, content inside side margins | Preview value. |
| Hero composition | Two regions, 7 and 5 columns, 48 px between; left a large duotone photo with plan overlay, right a surface panel with H1, intro and CTA overlapped by a small fragment figure (overlap stops at the Panel's padding box edge; figure hidden below 1024 px) | Approved preview. Left image keeps aspect ratio 35:32 at all widths so overlays and pins stay registered. |
| Case study | 5 columns image with annotation spots, 7 columns text and two thumbnails. Stacked at 768 the image height is capped at `min(704px, 80svh)` by cropping (`object-position`); 4:5 kept from 1024 up | Preview. A 4:5 image at 704 px wide is 880 px high, too tall for a tablet. 704 px is the content width at 768 (768 − 2 × `--space-8`), a one-off derived value, not a spacing token. |
| Services | 4 equal columns with 1 px dividers, 2 columns below 1024 px | Preview; four across would be about 158 px each at 768 to 1023 (override C8). |
| Philosophy | One display line, max 20ch, with a 220 px rule above, then a quiet four-item PrincipleList on a Panel (body, body-small, mono-label only) | The line carries the idea; the copy has four principles that need a home (override C1). |
| Contact | Heading in columns 1 to 5, Panel with form in columns 6 to 12 | Defined in Phase 4 (C6). |
| Footer | Three bands; the detail paragraph sits on plain `--color-bg` with the drafting grid removed behind it | Text must not sit on the grid (C2, D2b). Includes the "Press" line from CONTENT (C13). |
| Work heading | Visually hidden h2 "Work" unless Nora supplies visible copy | Landmark map needs it (C5). |
| Section rhythm | 128 px top padding (80 below 768); a coordinate label per section | Calm, slow reading. |
| Density | Low to medium; copy is short | Brand is calm. |
| Stacking | Below 1024 px the hero and case study stack to one column; services use 2 columns below 1024 | Two 7/5 columns get tight at 768 to 1023. |
| Collage rule | **Collage and overlays never sit under body text.** Text lives on Panels. | G0 and RESEARCH section 4. |

### Spacing
Scale (4 px base, unchanged from the team default): `--space-1` 4, `--space-2` 8, `--space-3` 12, `--space-4` 16, `--space-6` 24, `--space-8` 32, `--space-12` 48, `--space-16` 64, `--space-20` 80, `--space-24` 96, `--space-32` 128, `--space-40` 160.

| Use | Value | Reason |
|---|---|---|
| Page side margin | `--space-12` (48) from 1024 up, `--space-4` (16) below 768, `--space-8` (32) between | Preview used 40 and 18, which are off-scale; snapped to the scale. |
| Column gap | `--space-6` (24) | 12-column grid with a 24 px gutter. |
| Gap between the two hero regions | `--space-12` (48) | Preview used 40; snapped. |
| Hero top padding | `--space-12` (48) below the 60 px header | Puts H1, intro and CTA above the fold (D6); 128 px section padding would push them down. |
| Section top padding | `--space-32` (128) desktop, `--space-20` (80) below 768 | Preview used 120 and 80. |
| Panel padding | `--space-8` (32) desktop, `--space-6` (24) mobile | Preview used 36 and 22. |
| Inside lists and cards | `--space-3` to `--space-6` | Small steps keep the sheet dense but calm. |

## 6. Typography
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

## 7. Colour
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

### Token block (CSS variables, names are final; Phase 6 `tokens.css` uses them)
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

## 8. Imagery
| Item | Value | Reason |
|---|---|---|
| Subject | Concrete and glass facades, stairs, interior light, material details; structure over scenery | Survey Sheet crops to structure. |
| Practice set | The 6 photos in `design/mockups/direction-previews/photos.json` (credits in `docs/IMAGE_CREDITS.md`) | G0 rule; free Unsplash. |
| Grade | `filter: grayscale(1) contrast(1.15) brightness(1.08)` on the image, `mix-blend-mode: multiply` over `--color-photo-base`, plus a bottom vignette from transparent to `rgb(29 34 38 / 0.18)` | Linework sits cleanly on any photo; same as preview. |
| Crop | Tight on junctions and frames; object-position tuned per image | Structure reads better than whole buildings. |
| Aspect ratios | Hero 35:32, fragment 4:5, case-study image about 4:5, thumbnails 3:2 | Fixed ratios keep overlay registration and avoid layout shift. |
| Format and size | Production: AVIF or WebP with JPEG fallback, width 1400 max for the hero, 900 for others; hero at most 250 KB, others at most 150 KB | Speed is priority 3. Preview hotlinks Unsplash JPEG `w=1400`. |
| Loading | Hero `fetchpriority="high"`; everything else `loading="lazy"`; explicit width and height | LCP and no layout shift. |
| Hero credit | One caption row under the hero image, never over it: "Image: {credit}" in mono-label (11 px); the hint line sits on the same row at the end edge on desktop, below on mobile | G0 credit rule (C7). |
| Reuse | Six photos cover about eight slots by cropping; Dex confirms crops against `photos.json` | C11. |
| Alt text | Describes the image literally; caption "Image: photographer / Unsplash"; never claims it is the studio's work | G0 rule. |
| Linework over photo | At most three layers (outline, dimension, leader) in white or `--color-focus`-free ink; 1.2 px | Avoid blueprint cliché. |

## 9. Surface and depth
### Radius
Scale (unchanged default): `--radius-none` 0, `--radius-sm` 4, `--radius-md` 8, `--radius-lg` 16, `--radius-full` pill/circle.
Direction C is square. **Everything uses `--radius-none`** (photos, panels, buttons, fields, note cards). **`--radius-full` is used only for pins, pin halos and the lens ring**, because they are survey marks (circles at junctions). `sm`, `md` and `lg` are defined for completeness and are not used in this project.

### Surface rules
- **Borders:** 1 px (`--line-hair`) in `--color-border`; panels and note cards have a full 1 px border. Reason: lines, not fills, separate things.
- **Hairlines:** 1 px dividers in `--color-border-subtle`; drawn SVG linework is `--line-draw` (1.2 px) on screen; the stroke width is set per breakpoint through `--draw-stroke` instead of `vector-effect: non-scaling-stroke`, which breaks `pathLength` dashes in some browsers.
- **Shadows:** none. No box-shadow anywhere. Depth comes from the surface/bg step and from overlap with a border. (Optional paper depth from Direction A is **not** part of this DNA; add only if Parsa asks, as a logged override.)
- **Blur:** the sticky header may use `backdrop-filter: blur(6px)` over `rgb(233 237 239 / 0.9)`. No other glass or blur.
- **Focus ring:** 2 px `--color-focus`, 3 px offset; over photos 2 px `--color-surface` then 2 px `--color-focus-on-photo`.
- **Background:** a 48 px drafting grid (`--space-12`) in `--color-grid-line`, on the page only, never under body text blocks (panels are `--color-surface`).

## 10. Motion
### 10.1 Routing (final)
| Job | Tool | Reason |
|---|---|---|
| Hover, focus, active, press, NoteCard show/hide, icon colour, underline thicken, field line draw, Index panel open/close, form messages | **CSS transitions** (elements stay mounted and toggle `opacity`, `transform`, `visibility`) | State changes need no JS. Opacity and transform run on the compositor. |
| SVG line drawing (hero overlay, plan leaders, section rules) | **CSS** `stroke-dashoffset` | Allowed by the brief; no extra library. Dashoffset repaints the SVG on the main thread, which is fine for 4 to 8 paths on a small SVG; see 10.3. |
| React page-load sequence, Trust reveal, case-study image expand | **Framer Motion** (`motion`, `layout`) | Already in the stack; used only where a mount or a layout change needs coordination. |
| Hero lens position, lens radius, pin magnetic offset | **Framer Motion** `useMotionValue` + `useSpring`, written to style without React re-renders | One library owns these properties. Disabled by `useReducedMotion` (10.6). |
| Scroll-driven or pinned scenes | **None used**. GSAP ScrollTrigger is **not** in this project | No scene needs pinning or scrubbing; the only scroll-linked behaviour is the coordinate label (IntersectionObserver). |
| Small SVG timelines | **None**. anime.js is **not** in this project | CSS stroke draw covers every drawing. |
`AnimatePresence` is not used: NoteCard and Index panel stay mounted and are toggled by CSS, so there is no exit animation to coordinate.
Rule kept: never two libraries on one property. CSS owns: colour, border-colour, stroke-dashoffset, and opacity/transform of NoteCard, Index panel and messages. Framer owns: lens clip-path or lens transform, lens ring, pin transform, page-load and Trust opacity/transform, and the layout transform of the image-expand wrapper.

### 10.2 Tokens
`--duration-fast` 150 ms (hover, press, colour, exits); `--duration-base` 300 ms (NoteCard, panels, full-plan wipe, Trust, image expand); `--duration-slow` 900 ms (line draws, page-load settle). Easings: `--ease-standard` cubic-bezier(0.4, 0, 0.2, 1) for colour and underline only; `--ease-enter` cubic-bezier(0.23, 1, 0.32, 1) for things appearing and moving; `--ease-exit` cubic-bezier(0.2, 0, 0, 1) for things leaving (ease-out shape, so they start moving at once; use with `--duration-fast`). Springs (Framer): lens position and radius stiffness 170, damping 26, mass 0.9 (about critically damped, settles in about 0.3 s); pin magnetic pull stiffness 220, **damping 28** (no overshoot). The full-plan wipe is **not** a spring: it is a tween of `--duration-base` with `--ease-enter`. Framer takes numbers from `src/motion/tokens.ts`, mirrored from these CSS values (CSS is the source). Spring values tuned by hand; re-tune in Phase 6. The prototype's per-frame lerp (0.14) is frame-rate dependent and is not ported.

### 10.3 Motion budget (speed is priority 3)
- Animate **transform, opacity and stroke-dashoffset** only.
- **Exception 1 (lens):** `clip-path: circle()` on the single plan layer. Mitigation: `contain: paint` on the hero, the plan is a flat SVG with no filter or blend mode, and the layer is promoted only while the lens is active. `mask-image` and SVG `clipPath` repaint the same way, so they are **not** a fallback. **Real fallback (transform-only lens):** a fixed-size circular window (`overflow: hidden; border-radius: 50%`) moved with `translate`, with the plan layer counter-translated inside it; the full-plan wipe becomes a large circle changed with `scale`. Switch to it if Phase 12 profiling on a mid phone shows dropped frames. Touch uses only the 80 px lens, which is cheap.
- **Exception 2 (image expand):** one Framer `layoutId` on a **wrapper** with the image inside at `object-fit: cover` and a fixed aspect ratio, so the image never distorts. It is built only if thumbnail and expanded view are on the same route. If it stutters in Phase 12, use a `--duration-fast` cross-fade.
- Never animate width, height, top, left, margin, box-shadow, filter or backdrop-filter. Disclosures use `translateY` plus opacity, never height.
- At most **12 animating groups** (a path, a group or an element counts as one; not 12 DOM nodes) at once. Arrive counts as one staggered group per layer. Draws trigger once; remove `will-change` when the draw ends.
- No scroll listeners (IntersectionObserver only); one `requestAnimationFrame` loop per hero, stopped when settled and when the hero is off screen. The draw SVG sits on its own layer with no `mix-blend-mode` (the duotone photo uses `multiply` beneath it).
- The hero rect is read on `pointerenter`, and re-read on scroll or resize with an IntersectionObserver and ResizeObserver, so the lens and pull stay registered. No animation delays content: see critical path.

### 10.4 Critical path
Headline, panel text, CTA and the hero photo are in the first paint with no opacity-0 start. Only decorative linework and labels animate after load (`transition-delay` ≥ 200 ms is allowed for them). The hero photo is the LCP image (`fetchpriority="high"`, explicit width and height). The plan SVG is inline, small, and initialised on idle (within 2 s) or on `pointerenter` of the hero, whichever comes first, never on the first `pointermove`, so the first lens frame is not blank. Framer Motion is code-split so its cost never blocks text.

### 10.5 Scroll-linked behaviour
Only one: the coordinate label in the header updates when a section crosses the 40 to 55 % band of the viewport (IntersectionObserver, `rootMargin: -40% 0px -55% 0px`). No parallax, no scroll scrubbing. `scroll-behavior: smooth` exists only inside `@media (prefers-reduced-motion: no-preference)`.

### 10.6 Reduced motion
Mechanism (not just intent):
1. CSS: one `@media (prefers-reduced-motion: reduce)` block sets transition and animation durations to the end state for every CSS-owned property (lines drawn, labels visible, no halo pulse).
2. React: one `useReducedMotion()` hook (Framer's, which subscribes to the media query so a live change is picked up). When it is true, the lens and pin motion values are set directly with `.set()` and **no `useSpring` is created**, so there is no lag and no pull (the halo on proximity still shows); the full-plan toggle swaps instantly. `MotionConfig reducedMotion="user"` is also set, but it is not relied on for the springs because it does not touch motion values written to `style`.
3. Layout expand becomes a `--duration-fast` cross-fade or an instant swap. Nothing loops. Information never depends on motion.

### 10.7 One entry per journey moment
| Moment | Purpose | Motion | Tool | Properties | Duration and ease | Reduced motion |
|---|---|---|---|---|---|---|
| Arrive | Hierarchy, orientation | Hero outline, dimension lines and leader draw in (stagger 0 to 0.6 s), then labels fade in; photo and text already visible. Once, after the draws, a single halo pulse on pin 1 hints that pins are interactive (no loop) | CSS | stroke-dashoffset, opacity | 900 ms slow, `--ease-enter` | End state; halo static |
| Understand | Continuity | Leader line from a text block to the matching image fragment draws as the block enters view; coordinate label changes | CSS + IntersectionObserver | stroke-dashoffset, text swap | 900 ms slow, `--ease-enter` | Lines static, label swaps |
| Trust | State, evidence | Philosophy rule draws, then the line rises 8 px (`--space-2`) and fades in. The text is visible by default; it is hidden only if it is below the fold at hydration, and shown at once if it is already in view or reached by anchor, print, or if JS fails | CSS rule draw + Framer (reveal) | stroke-dashoffset, opacity, transform | `--duration-base` 300 ms, `--ease-enter` | Visible, no motion |
| Explore a project | Continuity, spatial logic | Annotation spots show notes (CSS); the project image expands from its thumbnail wrapper and returns without losing the user's place (exception 2, 10.3) | CSS (notes) + Framer `layoutId` (wrapper) | opacity, transform | `--duration-base` 300 ms, `--ease-enter` out and `--ease-exit` back | Cross-fade `--duration-fast` |
| Hero exploration | Feedback, affordance | Pins pull toward the cursor, lens shows the plan, hotspots highlight rooms; NoteCard fades by CSS. When the lens first appears it snaps to the pointer instead of flying in from its last position | Framer springs + CSS state | transform, opacity, clip-path (exception 1) | springs as 10.2; wipe tween 300 ms | No lag, no pull, instant wipe |
| Decide | Hierarchy, feedback | Service name highlights its line icon; CTA gains accent-hover | CSS | stroke colour, background colour | 150 ms fast, `--ease-standard` | Same, colour only |
| Contact | Feedback, state | Focused field draws a `--line-focus` line under itself with `scaleX` from the start edge; error text and "Sent" fade in (always-mounted live region) | CSS | transform (scaleX), opacity | `--duration-fast` to `--duration-base` | Instant state change |
| Open mobile Index | Orientation | The Index panel slides `translateY(-8px)` to 0 and fades in, `transform-origin` at the button; closing is a fade | CSS | transform, opacity | open `--duration-base` with `--ease-enter`, close `--duration-fast` with `--ease-exit` | Instant swap |

## 11. Interaction
### 11.1 Navigation
Thin sticky header (60 px): wordmark at start, coordinate label centred, three anchors (Work, Services, Philosophy) and the CTA "Start a conversation" at end. Anchors scroll smoothly (instant under reduced motion) and move focus to the section heading. Below 768 px the anchors move into an **Index** disclosure button (44×44 min) that opens a full-width list, and the coordinate label is hidden; the CTA stays visible. Below 480 px the CTA label is "Contact" and keeps `aria-label="Start a conversation"`. A skip link is the first tab stop. The label bar of the direction preview is not shipped.

### 11.2 Global states
| State | Rule |
|---|---|
| Hover | Only on `(hover: hover)`; colour, underline or halo change, never layout shift. |
| Focus | Always visible: 2 px focus ring, 3 px offset; on photos the double ring (surface then ink). Order follows reading order. |
| Active | One pixel down for buttons; pins hold their halo. |
| Loading | Images reserve their aspect-ratio box on `--color-photo-base` so nothing jumps; the form submit button shows "Sending…" and `aria-busy`. |
| Error | Danger colour plus icon plus text, linked with `aria-describedby`; focus moves to the first invalid field. |
| Success | "Sent. We will reply soon. (placeholder)" in `--color-success` with a check icon, announced politely (`role="status"`). |

### 11.3 Pattern: hero plan lens and hotspots (from the approved prototype `direction-c-hero-interactive.html`)
The left hero image shows a photo with drawn linework. A fictional black-and-white hairline plan of the building is layered above it.
- **Lens (pointer devices):** a circle follows the pointer with a short lag (radius 110 px); inside it the photo becomes the plan. Ring is 1 px ink with a small "PLAN" tag. Outside the lens the photo is unchanged.
- **Full plan:** a visible button and the key **P** switch the plan to cover the whole image with a circular wipe (a `--duration-base` tween with `--ease-enter`, not the lens spring) and back. The button has `aria-pressed` and `aria-keyshortcuts="P"`.
- **Pins:** four vermilion dots (Entrance, Stair, Light well, Roof edge). Within about 80 px of the pointer a pin eases toward it (max about 8 px), scales up to 1.45 and gains a halo; it eases back on leave. Transform and opacity only.
- **Hotspots:** each pin is a real `<button>` with `aria-label` ("Hotspot 1: Entrance") and `aria-pressed`. Hover or focus shows the NoteCard (number, name, one line) and highlights the matching room or wall in the plan; the lens moves to that pin so the highlight is visible. Click or Enter pins the card open; **Esc** closes it and returns focus to the pin. Tab order follows pins 1 to 4, then the plan toggle.
- **Touch (`hover: none`):** no lens following. Tap on a pin opens its card with a small lens (80 px) on that pin; tap again closes it. The plan toggle works as on desktop. Pin hit areas are 44×44.
- **Lens appearance:** when the lens first appears (radius from 0) it snaps to the pointer instead of flying in from its last position.
- **Discoverability:** after the Arrive draws, pin 1 gives one halo pulse (`--duration-slow`, once, no loop) so visitors, especially on touch, see that pins can be pressed. Static halo under reduced motion.
- **Reduced motion:** no lag, no pull, instant wipe (mechanism in 10.6).
- **Pin visibility:** pin is an accent dot with a 2 px surface ring and a 1 px ink outer ring so it reads on any photo tone (see contrast table).
- **Known issues in the prototype to fix at integration (not fixed in the preview):**
  1. **Tiny plan labels at 390 px.** The plan SVG scales as a whole, so 11 px labels render at about 6 px. Fix: size plan text in rendered pixels (an HTML label layer or per-breakpoint font-size) so no label is below 11 px; drop minor labels (LIVING, KITCHEN, STORE) below 768 px and keep only the four hotspot names.
  2. **Note card covering its own pin.** The card is placed 24 px beside the pin but can cover it near edges. Fix: choose the side with the most room, keep at least 28 px clear of the pin's 44×44 box, and below 768 px dock the card to the bottom edge of the image, full width minus 16 px.
  3. Fixed 390 px issues already solved in the prototype and to be kept: the direction label bar no longer overlaps the hero card (prototype only), and the empty gap above the hero card is removed.

### 11.4 Case-study annotations
Two or three spots on the case-study image behave like hotspots: hover or focus shows the note; tap toggles on touch; same card component and the same keyboard rules.

## 12. Components
Source is **custom** for every component. No shadcn/ui, 21st.dev or React Bits component is used in this project (inventory below is complete). Every component reads tokens only.

| Component | Source | Modifications / notes |
|---|---|---|
| SkipLink | custom | First focusable element; jumps to main. |
| Header | custom | Sticky 60 px, wordmark, CoordLabel, 3 anchors, CTA. Below 768 px anchors move into IndexDisclosure and CoordLabel is hidden. Below 480 px the CTA label is "Contact" with `aria-label="Start a conversation"`. |
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
| FragmentFigure | custom | Small photo with 1 px frame and "FIG. 00 — fragment" caption. Overlaps the hero Panel only as far as the Panel's padding box edge, never over its text; hidden below 1024 px. |
| CaseStudy | custom | Image with annotation spots, title, SpecList, two thumbnails. |
| SpecList | custom | `dl` in mono-caption: place, year, type. |
| ServiceItem | custom | Name, one line, small line icon. **Non-interactive** (no link, no focus stop); the icon turns accent on hover only under `(hover: hover)`. |
| PhilosophyQuote | custom | Display-quote with a 220 px ink rule above. |
| PrincipleList | custom | Four quiet items on a Panel below the quote: mono-label number, `body` title, `body-small` detail. No new display style. |
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
| ServiceItem | muted icon line | icon line to accent, only under `(hover: hover)` | none (not focusable) | none | n/a | n/a |
| Field | 1 px border, label above | border to `--color-text` | line draws under field (accent, `--line-focus`, `scaleX` from the start edge), border stays | n/a | muted, dashed border | border and message in `--color-danger`, icon, text; `aria-invalid` and `aria-describedby` |
| IndexDisclosure | 44×44 mono "Index" | border to text | focus ring | open: `aria-expanded=true` | n/a | n/a |

## 13. Anti-patterns
1. No shadows, glass cards or rounded corners; Survey Sheet is flat, square and hairline.
2. No accent colour as text, and no accent fill larger than a button or pin (the accent is a pin, not a theme).
3. No heavy or glowing linework: stroke over 1.5 px, more than three overlay layers on one photo, or animated line noise.
4. No information carried only by overlay text on a photo, or only by hover, colour or motion.
5. No collage or overlay under body text, and no overlapping images that hide a subject.
6. No motion without a journey purpose; no cursor effects without a touch and keyboard equivalent; no autoplay loops.
7. No gold, serif-italic word swaps or "visionary" copy; no claim that the photos are the studio's work.
8. No third-party component library and no new dependency without a stated reason in this inventory.

## 14. Overrides
**Status: the AGENTS.md exception below (stroke-dashoffset, `clip-path` on the single plan layer, `layoutId` wrapper) is APPROVED by Parsa, 2026-10-25.** The Phase 12 performance profile stays required.

| Default | Override | Reason |
|---|---|---|
| Team default RTL + LTR support | **English only, LTR**; logical CSS properties still used in code | Parsa's G0 answer 2026-10-22. |
| AGENTS.md: animate transform and opacity only | Also allow **stroke-dashoffset** for SVG line drawing, **`clip-path` on the single plan layer** for the lens (transform-only lens is the documented fallback), and one **Framer `layoutId` wrapper** for the image expand | Line drawing is the direction's signature; the lens needs a clip; Kai's review confirmed these are the only exceptions. **Approved by Parsa 2026-10-25;** Phase 12 performance profile still required. |
| Spacing, radius, breakpoints, durations, easing scales | **Unchanged** (no scale was changed) | Defaults fit the direction; preview off-scale values (40, 18, 22, 36, 120 px; 860 px breakpoint) were snapped to the scale. |
| Radius use | `--radius-full` allowed for pins and lens only; sm, md, lg unused | Circles at junctions are the survey mark. |
| Philosophy is one display line (section 5) | Plus a quiet four-item PrincipleList on a Panel below it, using body, body-small and mono-label only (C1) | The copy has four principles; no new display style. |
| All text lives on Panels | Panels required for paragraphs, forms and lists of sentences; headings, mono labels, captions and one-line display quotes may sit on the grid; footer detail paragraph sits on plain `--color-bg` with the drafting grid removed (C2) | Matches the approved prototype; keeps the never-under-body-text rule. |
| Header shows CoordLabel and full CTA at every width | CoordLabel hidden below 768; CTA label "Contact" below 480 with `aria-label="Start a conversation"` (C3) | Header too full at 390 px. |
| ServiceItem has focus ring and hover (state matrix) | Non-interactive: no focus stop; hover tint only under `(hover: hover)` (C4) | Services have no destination. |
| Services 2 columns below 768 | 2 columns below 1024 (C8) | About 158 px per column at 768 to 1023. |
| FragmentFigure overlaps the hero Panel | Overlap stops at the Panel padding box edge; hidden below 1024 (C9) | Never over text. |
| Section top padding `--space-32` | Hero only: `--space-12` (D6) | Hero text above the fold. |
| Case-study image 4:5 at all widths | Height capped at `min(704px, 80svh)` at 768 (D10); 704 px is the content width at 768, a one-off, not on the spacing scale | 880 px high is too tall on a tablet. |
| Motion library routing | CSS and Framer Motion only; GSAP ScrollTrigger and anime.js not used | No pinned or scrubbed scene; keeps the bundle small. |

## 15. References
Principles only, from `docs/RESEARCH.md` (text-only reads; none verified visually). Nothing copied, no new references.
| Reference | Take | Avoid |
|---|---|---|
| R1 BIG | Place + year + typology as the caption unit of a project | The 60+ project stack, mega-menu, icons, imagery |
| R2 Snøhetta | One-line project taglines; a philosophy teaser on the home page; respect for low-data users | News/event sprawl, repeated card grids, wording |
| R3 David Chipperfield Architects | Understated factual copy as luxury; quiet numbering; skip link | Feed-as-homepage layout, label taxonomy, imagery |
| R4 Kinfolk | Category label + short headline + one-line deck as an editorial unit | Commerce, carousel, issue structure, photography |
General drawing conventions (plan, section, dimension lines, grid bubbles) are used as common knowledge, not as a copied source.

## 16. Tweaks log
| Date | Change | Token or section | Reason |
|---|---|---|---|
| 2026-10-25 | P1-1 applied: reduced motion has a mechanism: one CSS media block plus `useReducedMotion()`; with it true, motion values are `.set()` and no `useSpring` is created; smooth scroll only under `no-preference` | 10.6, 11.3 | Kai finding 1: `MotionConfig` does not touch springs written to style. |
| 2026-10-25 | P1-2 applied: `mask-image`/SVG `clipPath` removed as fallback; fallback is a transform-only lens; added `contain: paint`, flat plan SVG | 10.3 | Kai finding 2: they repaint the same way. |
| 2026-10-25 | P1-3 applied (option: drop `non-scaling-stroke`): stroke width per breakpoint via new `--draw-stroke`; `pathLength` dashes kept | Token block, 9, 10.1 | Kai finding 3: the two together break dashes in some browsers. Untested cross-browser; Phase 12 check in Chromium, Safari, Firefox. |
| 2026-10-25 | P1-4 applied: Trust uses `--duration-base`, `--ease-enter`, 8 px (`--space-2`); text visible by default, hidden only if below the fold at hydration, shown at once on anchor, print or no JS | 10.7 | Kai finding 4: 600 ms and 14 px were off-token and could leave text invisible. |
| 2026-10-25 | P1-5 applied: image expand scoped to one `layoutId` wrapper, image fixed aspect `object-fit: cover`, same-route only, cross-fade fallback; listed as exception 2 | 10.3, 10.7, 14 | Kai finding 5. |
| 2026-10-25 | P1-6 applied: new journey row "Open mobile Index" (`translateY(-8px)` + opacity, CSS, no height) | 10.7, 12 | Kai finding 6. |
| 2026-10-25 | P2-7 applied: `--ease-exit` changed from cubic-bezier(0.4, 0, 1, 1) to cubic-bezier(0.2, 0, 0, 1); `--ease-standard` limited to colour and underline | Token block, 10.2 | Ease-in exit feels late. Token value change (not used by any code yet). |
| 2026-10-25 | P2-8 applied: pin spring damping 24 → 28; wipe is its own tween; lens snaps to pointer on first appearance; lerp not ported | 10.2, 10.7, 11.3 | No overshoot on hover pull; wipe must match its stated time. |
| 2026-10-25 | P2-9 applied: motion tokens mirrored once in `src/motion/tokens.ts` (Dex creates in Phase 6; CSS is the source) | Token block | Framer needs numbers. |
| 2026-10-25 | P2-10 applied: `AnimatePresence` dropped; NoteCard and Index panel always mounted, CSS toggled | 10.1, 12 | Simpler, one fewer ownership split. |
| 2026-10-25 | P2-11, 12, 13, 14, 15, 16 applied: rect read on `pointerenter` and refreshed on scroll/resize; budget counts animating groups and removes `will-change`; dashoffset claim corrected and draw SVG blend-free; field line uses `--line-focus` + `scaleX`; one-time pin 1 halo pulse; plan SVG init on idle ≤ 2 s or `pointerenter` | 10.3, 10.4, 10.1, 12, 11.3 | Kai findings 11 to 16. |
| 2026-10-25 | Parsa request: accent shifted toward red. `--color-accent` `#C84A28` → `#C73E2C` (hue 13° → 7°); `--color-accent-hover` `#A63A1B` → `#A5301F`; `--color-focus` follows. Prose "orange" → "vermilion / red-orange" | Token block, 7, 11 | Parsa wanted the same family, more red. White on accent 4.70 → 5.06:1; accent on bg 3.99 → 4.29:1. Still never text (4.29 < 4.5). Close to `--color-danger` in hue: errors always carry icon plus text, never colour alone. |
| 2026-10-25 | Parsa decisions: name Studio Oriel confirmed (section 1); AGENTS.md exception approved (section 14). Approval line stays "Pending Parsa" | 1, 14 | Parsa via Milo. |
| 2026-10-26 | Override C1 logged: philosophy = one display line + PrincipleList on a Panel | 5, 12, 14 | Four principles exist in the copy; no new type style. Requested by Milo from Phase 4. |
| 2026-10-26 | Override C2 logged: Panels required for paragraphs, forms, sentence lists; headings, labels, captions and one-line quotes may sit on the grid; footer paragraph on plain `--color-bg` | 5, 14 | The approved prototype already put short lines on the grid. |
| 2026-10-26 | Override C3 logged: CoordLabel hidden below 768; CTA "Contact" below 480 with aria-label "Start a conversation" | 11.1, 12, 14 | Header too full at 390 px. Width in the 480 to 767 range still to measure with real fonts. |
| 2026-10-26 | Override C4 logged: ServiceItem non-interactive; hover tint only under `(hover: hover)`; state matrix updated | 12, 14 | Services have no destination, so a focus stop would mislead. |
| 2026-10-26 | Override C8 logged: services 2 columns below 1024 (was 768) | 5, 14 | Four across are about 158 px each at 768 to 1023. |
| 2026-10-26 | Override C9 logged: FragmentFigure overlap limited to Panel padding box edge; hidden below 1024 | 5, 12, 14 | It must never cover text. |
| 2026-10-26 | Override D6 logged: hero top padding `--space-12` | 5, Spacing, 14 | H1, intro and CTA above the fold. |
| 2026-10-26 | Override D10 logged: case-study image height `min(704px, 80svh)` at 768; 704 is the content width at 768, a derived one-off, not a token | 5, 14 | A 4:5 image at 704 px wide is 880 px high. |
| 2026-10-26 | Added without override (gaps filled): contact and footer layout, hidden Work h2, hero credit caption, photo reuse note, PrincipleList in inventory | 5, 8, 12 | Phase 4 items C5, C6, C7, C11, C13; no token or colour changed. |
| 2026-10-25 | Declined: none. Kept: spring numbers other than pin damping stay as written (Kai agrees they are sane; re-tune in Phase 6) | 10.2 | Not a disagreement; noted for completeness. |
| 2026-10-26 | Hero fragment caption renumbered "FIG. 01 — fragment" → "FIG. 00 — fragment" | 12 (FragmentFigure) | "FIG. 01" was used twice (hero fragment and case-study main image). Milo. |
