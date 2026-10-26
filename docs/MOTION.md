# MOTION — Studio Oriel

Mirror of `design DNA.md` (sections 10 Motion and 11 Interaction). Written by Vera, Phase 3, 2026-10-25. **The DNA is the source of truth**; if this file and the DNA differ, the DNA wins and Milo is told. Blocks below are copied verbatim from the DNA. Practice project, all content fictional.

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
Thin sticky header (60 px): wordmark at start, coordinate label centred, three anchors (Work, Services, Philosophy) and the CTA "Start a conversation" at end. Anchors scroll smoothly (instant under reduced motion) and move focus to the section heading. Below 768 px the anchors move into an **Index** disclosure button (44×44 min) that opens a full-width list; the CTA stays visible. A skip link is the first tab stop. The label bar of the direction preview is not shipped.

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
