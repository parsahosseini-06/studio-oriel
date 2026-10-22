# AGENTS.md

Rules for any coding agent working in this repo.

## Read first, in this order
1. AGENTS.md
2. design DNA.md
3. docs/UX.md
4. docs/DESIGN_SYSTEM.md
5. docs/MOTION.md

Some of these files may not exist yet. Read each as soon as it does, and do not invent its content.

## Project facts
- Practice project, fictional architecture agency. All data is placeholder.
- English only, LTR. No Persian, no RTL, no `src/content/fa`.
- Local only. No GitHub, no Vercel, no remote. Never run `git init`, commit or push unless Ship or Milo asks.
- Stack: React + Vite + Framer Motion, JavaScript. Add no dependency without a stated reason.

## Rules
- Tokens only. Components use CSS variables from `src/styles/tokens.css`. No raw hex, rgb or px values in components.
- Use logical CSS properties (`margin-inline`, `padding-block`, `inset-inline-start`, `text-align: start`), never left/right, even though the site is LTR.
- All copy comes from `src/content/en`. No hard-coded text in components.
- Every animation has a reduced-motion variant (`prefers-reduced-motion`). Every animation has a purpose: hierarchy, continuity, state or feedback.
- Motion routing: CSS transitions for state; Framer Motion for React enter/exit/layout/gestures. Never two libraries on one property. Animate transform and opacity only.
- Never change an approved decision silently. If a doc and the code disagree, stop and report to Milo.
- References (Refero and others) are inspiration only. Never copy layout, copy, branding, assets or photography.
- Photos: free architecture images from Unsplash or Pexels, practice use only. Record each in `docs/IMAGE_CREDITS.md`. Never claim they show the fictional agency's work.
- Secrets never go in the repo.
- Work on a branch `feat/<task>` or `fix/<task>`, never main. Commit as `<type>: <summary>`.
- Never delete files without approval.
