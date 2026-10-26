# MOTION REVIEW — Studio Oriel

Reviewer: Kai. Date: 2026-10-25. Read-only review of `docs/MOTION.md` against `design DNA.md` (sections 10, 11, 13, 14), `design/mockups/direction-previews/direction-c-hero-interactive.html` and `package.json`. No existing file was edited.

**Mirror check:** `docs/MOTION.md` sections 10 and 11 match the DNA exactly (line diff: one blank line). Nothing to fix there. Any fix below goes into the DNA first, then the mirror.

## Findings

### P0 — none
No blocker. The direction is feasible with CSS + Framer Motion, and the design stays within budget.

### P1 — fix before Phase 6 integration

**1. Reduced motion has no mechanism for the lens and pins.**
- Why: `MotionConfig reducedMotion="user"` only strips transform and layout animations from Framer components. It does not touch `useSpring` values that you write to `style`, and it does not touch CSS. The prototype reads `matchMedia` once, so it never reacts to a live change. The spec says "no lag, no pull" but nothing makes that happen.
- Fix: add one `useReducedMotion()` hook that subscribes to the media query. When it is true, set the lens and pin motion values directly with `.set()` and never create the springs. In CSS, keep a single `@media (prefers-reduced-motion: reduce)` block. Wrap `scroll-behavior: smooth` in `no-preference`.

**2. The `clip-path` fallback does not actually fix jank.**
- Why: `mask-image` radial gradient and SVG `clipPath` also repaint the layer every frame, so they give the same cost. The lens repaints the whole plan layer, and the full-plan wipe grows the circle to `hypot(W,H)` over a large layer. On a mid phone at DPR 3 this is the one real 60 fps risk. On touch the lens is only the 80 px circle, which is cheap.
- Fix: keep `clip-path`, and add `contain: paint` plus a flat plan SVG with no filter or blend mode. Profile in Phase 12. Make the real fallback a transform-only lens. This is a fixed-size `overflow:hidden; border-radius:50%` window moved with `translate`, with the plan inside counter-translated. The full wipe becomes a large circle scaled with `scale`. Replace the DNA line "mask-image / SVG clipPath, same look" with this.

**3. `stroke-dashoffset` with `pathLength="1"` and `vector-effect: non-scaling-stroke` is risky.**
- Why: the prototype uses both together on all 4 hero lines. In some browsers dash lengths under non-scaling-stroke are computed in screen units, so `pathLength` normalisation breaks. The line then pops in or draws partway. Also, `dasharray:1` with `dashoffset:1` can leave a dot at the start.
- Fix: choose one. Either drop `non-scaling-stroke` and set `stroke-width` per breakpoint, or keep it and test in Chromium, Safari and Firefox. Use `stroke-dasharray: 1 1` and `stroke-linecap: butt`.

**4. The Trust moment (philosophy text) can leave content invisible.**
- Why: it starts at `opacity:0` and waits for scroll, and it uses a 600 ms duration and a 14 px offset. 600 ms is not a token (the tokens are 150, 300 and 900). 14 px is not on the spacing scale. A jump to the `#philosophy` anchor, a slow IntersectionObserver, a print, or a failed JS load would leave a statement the page depends on invisible.
- Fix: use `--duration-base` (300 ms) with `--ease-enter` and an 8 px offset (`--space-2`). Do not hide the text until the observer has actually fired. Show it immediately when it is already in view or reached by anchor.

**5. The case-study image expand is the riskiest Framer piece.**
- Why: a `layout` / `layoutId` image animates size through scale. The image distorts during the move, and `object-fit` changes mid-flight. This also sits on the "never animate width and height" rule in 10.3. If the thumbnail and the expanded view are on different routes, shared layout across routes needs extra router and `AnimatePresence` work.
- Fix: scope it down. Use `layoutId` on a wrapper only, with the image `object-fit: cover` at a fixed aspect ratio. Name it as a documented exception in 10.3. Fall back to a 150 ms cross-fade if it stutters in Phase 12. Only build the route-level version if it is on the same route.

**6. The mobile Index panel has no motion spec.**
- Why: `IndexDisclosure` is listed in the routing table (10.1) but has no row in 10.7. The obvious way to animate a disclosure is `height`, which 10.3 forbids.
- Fix: add a row. Slide with `translateY(-8px)` and fade, 200 ms with `--ease-enter`, and `transform-origin` at the button. Exit is a 150 ms fade. Reduced motion is an instant swap.

### P2 — improve, not blocking

**7. The `--ease-exit` token is ease-in-like.** `cubic-bezier(0.4, 0, 1, 1)` starts slowly on leaving elements, so the exit feels late. Use `--ease-enter` for exits, or keep `--ease-exit` only for 150 ms fades. `--ease-standard` is a soft curve and is acceptable for colour and underline only. Not blocking because the names are final in the DNA.

**8. The springs disagree with the prototype, and the pin spring overshoots.**
- Lens spring (170 / 26 / 0.9) is about critically damped (ζ ≈ 1.05) with a settle of about 0.3 s. That is sane.
- The prototype uses a lerp of 0.14 per frame, which is frame-rate dependent and about 110 ms to settle. The spring will feel slightly softer, so re-tune in Phase 6 as already planned.
- Pin spring (220 / 24) has ζ ≈ 0.8 and a small overshoot. For a hover pull, raise damping to about 28 to remove it.
- Spring settle is also not the "300 to 400 ms wipe" in 11.3. Give the full wipe its own tween (`--duration-base`, `--ease-enter`) instead of the lens spring.
- Port the prototype's snap: when the lens appears (`r < 1`) it jumps to the pointer instead of flying in from its last position. The spec does not state this.

**9. Motion tokens exist only in CSS, and Framer needs numbers.** Easings must be passed as arrays and durations in seconds, so they can drift. Add one `src/motion/tokens.js` mirror and note in the DNA that CSS is the source.

**10. Do not keep `AnimatePresence` for the NoteCard.** The prototype card is always mounted and fades with CSS (`opacity`, `transform`, `visibility`). That is simpler, avoids mount and unmount cost, and needs no exit animation. Keep Framer for the page-load sequence and the image expand only. One fewer ownership split.

**11. Cache the hero rect carefully.** The prototype calls `getBoundingClientRect()` on every `pointermove`, which is correct after scroll. If you cache it in React, remeasure on scroll (via IntersectionObserver or `ResizeObserver` plus a scroll check) or the lens and pin pull go off.

**12. "At most 12 elements animating at once" is unclear.** Count paths or groups. Say "12 animating groups, not 12 DOM nodes", otherwise the Arrive sequence may break its own rule. The prototype has only 4 lines, so the real budget is easy. Keep section-rule draws triggered once, and remove any `will-change` after the draw ends.

**13. `stroke-dashoffset` runs on the main thread.** The 10.1 reason says state changes "run off the main thread". That holds for transform and opacity, not for dashoffset, which repaints the SVG each frame. With 4 to 8 paths on a small SVG this is fine. Keep the draw SVG on its own layer without `mix-blend-mode` or `filter` (the duotone photo uses `multiply`), and trigger draws once.

**14. Off-token values in Contact.** The "1.5 px" field line is not a token (`--line-focus` is 2 px, `--line-draw` is 1.2 px). Use `--line-focus` and `scaleX` from the start edge. The error and "Sent" fade at 150 to 300 ms is fine.

**15. Discoverability is missing.** On touch the lens has no lag-follow, and nothing tells a visitor the pins are tappable. Add one 600 ms halo pulse on pin 1, once, after the Arrive draws, with no loop. Under reduced motion the halo is static. This is the only "Hero exploration" hint.

**16. Initialising the plan SVG "on first pointer, focus or idle" can cause a blank first lens frame.** Use idle (≤ 2 s) or `pointerenter` on the hero, not first `pointermove`.

## Answers to the five questions

1. **Journey moments carry meaning.** Arrive, Understand, Explore and Decide are strong. Trust is the weakest (decorative fade-up on text) and needs fix 4. Contact is functional. Hero exploration is the brand moment and is well specified.
2. **Durations and easings.** Mostly consistent with the DNA tokens. Off-token: 600 ms (Trust), 14 px, 1.5 px, "300 to 400 ms" (400 is not a token), plus the exit-easing and spring notes above.
3. **Feasibility.** Feasible. The one performance risk is the `clip-path` lens (fix 2). Line drawing is cheap but has a cross-browser trap (fix 3). The image expand needs scoping (fix 5).
4. **Reduced motion.** Behaviour is complete on paper. The mechanism is missing (fix 1), and Index and Trust need rows.
5. **Missing or over-engineered.** Missing: Index panel (6), discoverability (15), token mirror (9). Over-engineered: `AnimatePresence` on the card (10), route-level shared layout (5), the 12-element rule wording (12).

## Verdict

**Approve with changes.** No P0. Do the six P1 fixes (update the DNA, then mirror them into `MOTION.md`) before Phase 6 integration. The P2 items can be done during integration or Phase 12. The lens `clip-path` is the only thing that must be profiled on a real mid phone before this direction is called done.

## What I only reasoned about (not run)

- I did not run the prototype or any build, and did not measure frame rate, paint time or memory on any device.
- The `pathLength` plus `non-scaling-stroke` behaviour (fix 3) is from known browser behaviour, not tested here.
- Spring damping ratios and settle times are computed by hand from the stated values, not simulated.
- Framer Motion behaviour (`reducedMotion="user"` scope, `layout` distortion, `useSpring` writing `clip-path` as a motion value) is from my knowledge of the library, not checked against `framer-motion` 14.6 in `node_modules`.
- I did not check that `src/` already contains any motion code. Its contents were not inspected beyond the folder list.
- The "mid phone" risk assessment is an estimate. It needs a Phase 12 profile.
