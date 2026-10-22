# PROJECT_BRIEF — architecture-editorial

Phase 1 · Author: Nora · Source: docs/G0_INPUT.md (Parsa, 2026-10-22). Status: draft for Milo's review.

> PRACTICE PROJECT. The agency, its projects, people and numbers are all fictional placeholders. Never present them as real.

## 1. Business and what makes it different
A fictional mid-sized architecture studio (**Studio Oriel**, confirmed, see §10). It designs residential, cultural and small public buildings.
What makes it different (placeholder positioning, invented for the exercise): it presents architecture as **editorial storytelling**. Each project is a composed spread of photographs, plans and notes, not a gallery grid. Its working philosophy is part of the pitch, not an About-page afterthought.
Agency facts (founding year, size, location, awards): **TBD, placeholder only**. Do not invent real-sounding credentials.

## 2. Goal and primary CTA
- Goal: in one scroll, make a visitor feel the studio's taste and rigour, then start a conversation.
- Primary CTA: **"Start a conversation"** (assumption A5). Placeholder form or mailto, no backend.
- Secondary actions: "View the project" (case study), "Read our philosophy" (in-page anchor).

## 3. Audience
| Group | Context | Motivation | Pain points | Objections |
|---|---|---|---|---|
| Prospective clients (primary) | Desktop at work or evening on a phone; shortlisting 3–5 studios | Find a studio whose taste and process they trust | Sites are all image grids with no sense of how the studio works; hard to tell scale or budget fit | "Is this studio too big/too artsy for my project?" "What is it like to work with them?" |
| Collaborators (engineers, makers, consultants) | Quick check before a call | Judge quality and fit | Vague service lists | "Do they credit partners? Are they serious?" |
| Press / editors | Short on time, need facts | Find a story, images, a contact | No clear project facts | "Can I find credits and a contact fast?" |
| Graduates / job seekers | Evening browsing | Understand culture and values | Philosophy hidden or generic | "Is this a place with a point of view?" |
(Personas are reasoned assumptions, not interview data. See A8.)

## 4. Brand personality
Premium · Minimal · Editorial · Sophisticated · Calm.
(Checked by Milo against the web-build-system list on 2026-10-22. Nora's first draft was Refined, Considered, Confident, Calm, Editorial; Refined became Sophisticated, Considered became Minimal, Confident became Premium. Calm and Editorial unchanged. A9 closed.)

## 5. What the site must not become
- A generic image grid or template portfolio.
- Collage as noise: scattered, overlapping, decorative-only images that hurt reading.
- Motion for show: every animation needs a purpose (hierarchy, continuity, state, feedback).
- Luxury as clichés: gold, serif-italic word swaps, stock "visionary" copy.
- Anything implying the photos show the fictional studio's real work.

## 6. Priorities
1 beauty · 2 brand expression · 3 speed (assumption A1). Accessibility and reduced-motion support are non-negotiable regardless of rank.

## 7. Constraints
- One landing page; English only, LTR (override of the team's RTL+LTR default; log in design DNA Overrides).
- Stack: React + Vite + Framer Motion, JavaScript.
- Images: free Unsplash/Pexels architecture photos, practice use only. Each image logged in docs/IMAGE_CREDITS.md (photographer, source URL, license).
- Local only: no GitHub, Vercel or remote. Deploy phase becomes a README plus a locally checked production build.
- No backend; contact is a placeholder form or mailto.
- Collage built from a handful of licensed photos, so crop, layering and scale must carry the effect.

## 8. Content inventory (all placeholder)
| Section | Content | Placeholder |
|---|---|---|
| Header | Wordmark, 3 anchor links, CTA | Agency name from §10 |
| Hero / agency intro | One-line statement, 2–3 sentence intro, collage | Copy by Nora in Phase 4 |
| Case study 1 | Title, location, year, typology, role, 3 short paragraphs, 4–6 images, one detail note | "House on the Ridge", fictional town (TBD) |
| Case study 2 (optional) | Same, shorter | "Courtyard Library" (TBD) |
| Services | 4 items, e.g. Architecture, Interiors, Masterplanning, Heritage and retrofit | Names TBD with Milo |
| Working philosophy | 3–4 principles, one pull quote | Invented, labelled placeholder |
| Contact | Heading, short note, form (name, email, message) or mailto | "Start a conversation" |
| Footer | Wordmark, placeholder email, "Practice project, all content fictional" notice | Fake email on a reserved domain (e.g. example.com) |
| Credits | Photo credits | docs/IMAGE_CREDITS.md |

## 9. Success checks (for later phases)
A visitor can name what the studio does and how it works after one pass; reach the contact form from any section in one action; and everything works without motion.

## 10. Agency name options (fictional)
| Option | Reason |
|---|---|
| **Studio Oriel** (recommended) | Short and easy to set in a wordmark. An oriel is a projecting window, an architectural term that suggests looking out and framing a view, which fits a collage of framed images. |
| Aldermoor & Rae | Two-surname form reads established and quiet, but is longer and harder on mobile. |
| Atelier Fenn | Warm, craft-led, French-leaning "atelier" signals luxury, but leans toward interiors. |
**Decision: Studio Oriel confirmed by Parsa (2026-10-22).** Not checked for trademark or real-world collisions; fine for a practice project.

## 11. Assumptions log
| ID | Assumption | Reason |
|---|---|---|
| A1 | Priorities: beauty, brand expression, speed | From G0 assumptions (Milo) |
| A2 | React + Vite + Framer Motion, JS | From G0 assumptions |
| A3 | Root ~/Coding/architecture-editorial | From G0 assumptions |
| A4 | Agency name: **Studio Oriel**, confirmed by Parsa 2026-10-22 | Parsa replied "Studio Oriel is good"; no trademark check done |
| A5 | CTA "Start a conversation" | From G0 assumptions |
| A6 | Local handoff replaces deploy | G0 answer |
| A7 | Positioning, projects, services, principles are invented | Brief gives none; kept generic and labelled placeholder |
| A8 | Audience personas from general knowledge, not research with real users | No access to data; fine for a practice project |
| A9 | Personality words not checked against the web-build-system list | List not available to me this session |
| A10 | Two case studies maximum, the second optional | Brief says "one or two" |

## 12. Open questions
None blocking. Non-blocking: Milo to confirm personality words against the web-build-system list.
