# Phase 3 brief — Design DNA (for Vera)

Author: Milo · Date: 2026-10-25 · Direction chosen by Parsa: **C · Survey Sheet**. He also approved the interactive hero prototype ("this is good").

## Files to write, in order
1. `design DNA.md` at the project root (exact filename, with the space). Canonical source of truth.
2. `docs/DESIGN_SYSTEM.md`: mirror of the DNA's tokens, type, colour, spacing, radius, surface and components sections.
3. `docs/MOTION.md`: mirror of the DNA's motion and interaction sections. Kai reviews it afterwards.

## Read first
`docs/G0_INPUT.md`, `docs/PROJECT_BRIEF.md`, `docs/RESEARCH.md`, `docs/VISUAL_DIRECTION.md` (direction C and the Decision line), `AGENTS.md`, `design/mockups/direction-previews/direction-c.html`, `design/mockups/direction-previews/direction-c-hero-interactive.html`.

## DNA sections, in this order
Each value is concrete and carries a one-line reason. Unknowns are written TBD, never invented.

1. **Meta**: Studio Oriel (fictional practice project), audience, goal, primary CTA, direction LTR and English only, numerals latin. Approval line reads "Pending Parsa" until he approves.
2. **Priorities**: top three, taken from PROJECT_BRIEF (beauty, brand expression, then speed unless the brief says otherwise).
3. **Non-negotiables**, each on/off with a reason: contrast WCAG AA, visible focus, 44×44 touch targets, reduced motion (set it explicitly to respect).
4. **Art direction**: primary label Survey Sheet, secondary labels, 3 to 5 atmosphere words, what the site must not become. Turn each word into observable decisions.
5. **Layout**: grid, max width, section rhythm, density, composition. Collage never sits under body text.
6. **Typography**: display, body and mono slots. Manrope and JetBrains Mono from direction C are marked "chosen for now". Scale as numbers, line height, alignment. Licence and loading checks may stay TBD until Phase 6.
7. **Colour**: semantic tokens with values (bg, surface, text, text-muted, accent/pin orange, border, focus, success, danger) and COMPUTED contrast for every text/background pair. Body text needs 4.5:1, large text and UI 3:1. Fix any pair that fails and note the change versus the preview. Show how you computed it (formula or a script you ran).
8. **Imagery**: subject, framing, duotone/grade treatment, crop, aspect ratios, format, max size. The 6 photos in `design/mockups/direction-previews/photos.json` are the practice set.
9. **Surface and depth**: radius (C is square, so mostly 0), borders, hairlines, shadows.
10. **Motion**: routing (CSS for state, Framer Motion for React enter/exit/layout; GSAP or anime.js only if you justify and list it; SVG line drawing can use CSS stroke-dashoffset), motion budget (speed is a priority: transform, opacity, stroke only), critical path, scroll-linked behaviour, reduced-motion behaviour, and one entry per user-journey moment (arrive, understand, trust, explore a project, decide, contact) with its purpose.
11. **Interaction**: navigation pattern, hover/focus/active/loading/error/success. Document the hero lens + hotspot behaviour from the interactive prototype as a pattern, with touch and keyboard fallbacks, and the known 390 px issues to fix (tiny plan labels, note card covering its own pin).
12. **Components** with states (default, hover, focus, active, disabled, error) and an inventory table: component, source (custom unless you say otherwise), modifications. No shadcn/21st/React Bits unless listed here.
13. **Anti-patterns**: 3 to 8 specific prohibitions for this project.
14. **Overrides**: default, override, reason. English/LTR only is an override of the team's RTL default. List every default scale you change.
15. **References**: take, avoid. Principles only, from RESEARCH.md. No new references, none copied.
16. **Tweaks log**: empty table with date, change, token or section, reason.

## Default scales (change only with a logged override)
- Spacing, 4 px base: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160.
- Radius: none/sm/md/lg/pill = 0, 4, 8, 16, full.
- Breakpoints: 480, 768, 1024, 1280. Test widths: 375, 390, 768, 1024, 1280, 1440.
- Durations: fast 150 ms, base 250–400 ms, slow 600–1000 ms.
- Easing: one standard, one enter, one exit, as cubic-bezier.
- Token names describe role: `--color-bg`, `--space-4`, `--radius-md`, `--font-display`, `--duration-fast`, `--ease-standard`. Phase 6 `tokens.css` will use the same names.

## Gate (Milo checks)
- No TBD in priorities, direction, non-negotiables, colour tokens, spacing, radius or motion routing.
- Mirrors match the DNA.
- Contrast numbers are real computed values.
- Fonts may stay TBD only where stated above.

## Rules
Do not touch `src/`. Do not git commit; Ship does. Paper depth from A is optional and must be marked as such. References are inspiration only.

## Report
The three paths, the lowest contrast ratio found, what changed from the preview, and anything unverified.
