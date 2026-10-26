# SECTION_SPECS — Studio Oriel

Phase 4 part 2 · Author: Wren · Date: 2026-10-26 · Inputs: docs/UX.md, docs/CONTENT.md, docs/SITEMAP.md, design DNA.md (sections 5, 8, 9, 10, 11, 12, 13). Copy ids are the section ids of docs/CONTENT.md. English only, LTR (no RTL mirroring needed; logical CSS properties still apply per AGENTS.md).

> PRACTICE PROJECT. Everything here describes a fictional studio.

## 0. Shared rules used by every section

**Grid (DNA section 5).** 12 columns, 24 px gutter (`--space-6`), max width 1280, side margin `--space-12` (48) from 1024, `--space-8` (32) from 768 to 1023, `--space-4` (16) below 768.

| Test width | Content width | One column | Layout class |
|---|---|---|---|
| 1440 | 1280 (margins larger than 48) | about 84.7 px | desktop: hero 7/5, case study 5/7, services 4 across |
| 1024 | 928 | about 55.3 px | desktop-narrow: same structure, tighter |
| 768 | 704 | about 36.7 px | tablet: hero and case study stacked, services 4 across (see conflict C8) |
| 390 | 358 | 12 columns not used visually; single column | mobile: everything stacked, services 2 across |

**Vertical rhythm.** Section top padding `--space-32` (128) from 768 up, `--space-20` (80) below 768. Gap between a section's blocks `--space-12` (48) desktop, `--space-8` (32) mobile unless stated. Panel padding `--space-8` desktop, `--space-6` mobile.

**Text rule (DNA section 5 and 13.5).** Collage, overlay, linework and photos never sit under body text. Paragraphs, form fields and lists of sentences live on a **Panel** (`--color-surface`, 1 px border). The drafting grid is only the page background. Headings, mono labels, captions and one-line display quotes may sit on the grid (decision D2, see section 12).

**Each section answers four questions** (why it exists, what the user should understand, what action they take, why it sits here). They are stated per section below.

**Interaction moments** use only DNA 10.7 entries. Every moment has a reduced-motion variant in DNA 10.6 and 10.7; the specs name the moment and do not repeat the variant.

**Not anywhere on the page:** testimonials, awards, client logos, statistics, newsletter, team grid, carousels, autoplay video, parallax, cursor effects without a touch and keyboard equivalent.

---

## 1. `[site-header]`

| | |
|---|---|
| Why it exists | Orientation and the one-action route to contact from every section |
| User should understand | Where they are (label), where they can go (3 anchors), how to start (CTA) |
| Action | Jump to a section, open Index, press CTA |
| Why here | It is persistent; it sits above everything and is sticky |

**Content blocks (CONTENT section 1):** skip link; wordmark; CoordLabel; anchors Work, Services, Philosophy; CTA "Start a conversation"; Index button below 768.

**Layout.** 60 px high, full-width bar, inner content on the page margins. Background `rgb(233 237 239 / 0.9)` with `backdrop-filter: blur(6px)` and a bottom 1 px hairline (DNA section 9).

| Width | Layout |
|---|---|
| 1440 | Wordmark at start; CoordLabel centred; anchors then CTA at end, gap `--space-8` between anchors, `--space-8` before CTA |
| 1024 | Same; gap between anchors `--space-6`; CoordLabel stays centred and may not collide: if the three anchors, CTA and label do not fit, the label is hidden first (conflict C3) |
| 768 | Anchors hidden, Index button (44×44) before the CTA; CoordLabel hidden to protect space (C3) |
| 390 | Wordmark at start; at end Index (44×44) then CTA, gap `--space-2`. Below 480 px the CTA shows the short label "Contact" (decision from Milo for Parsa, C3), with `aria-label="Start a conversation"` kept; 480 px and up shows the full label. Wordmark mono-label size not below 11 px |

**Interactions.** Anchors: smooth scroll under `no-preference`, instant under reduced motion; focus moves to the target heading. Index: panel slides `translateY(-8px)` to 0 with opacity (DNA 10.7 "Open mobile Index"); panel is a full-width list under the header on the surface colour with a 1 px border. CoordLabel updates through IntersectionObserver in the −40% / −55% band.

**Accessibility.** `<header>` with `<nav aria-label="Primary">`. The skip link is the first tab stop and is visible on focus. Tab order: skip link, wordmark, Work, Services, Philosophy, CTA (below 768: wordmark, Index, CTA). Index has `aria-expanded` and `aria-controls`; Esc closes it and returns focus to the button. CoordLabel `aria-hidden`.

**Not in this section:** search, language switch, logos, a second CTA, a mega-menu, the prototype's DirectionTag.

---

## 2. `[hero]` (with `[hero-hotspots]`)

| | |
|---|---|
| Why it exists | Gives the first answer: what the studio is, who it is for, and its taste |
| User should understand | A small practice for houses, libraries and small public buildings that draws as little as it can; the photo is interactive |
| Action | Primary: press "Start a conversation" (header CTA) or read on. Secondary: "View the project →". Exploration: move over or tap the photo pins |
| Why here | First screen. The H1, intro and CTA must be visible without scrolling at 1440×900 and 390×844 |

**SEO intent.** Title and h1 reinforce "small architecture practice, houses, libraries, small public buildings". One h1 only. Meta description comes from the intro (Dex, from CONTENT).

**Content blocks (CONTENT section 2, `[hero-hotspots]`):** eyebrow; H1 (display); intro (body, on a Panel); link "View the project →"; hint under the photo (pointer or touch variant); plan toggle; fragment caption "FIG. 00 — fragment"; photo (alt literal); four pins with note cards; stand-in caption (see C7).

**Layout on the grid.**

| Width | Columns and order |
|---|---|
| 1440 | Two regions with a 48 px gap, 7 and 5 columns (about 718 and 514 px of 1280). **Left (7):** DuotoneImage with HeroPlanLens at aspect 35:32, credit line ("Image: {credit:1}", mono-label, bottom-start) and hint line beneath (`--space-3` below the image). **Right (5):** Panel holding eyebrow, H1, intro, link. FragmentFigure overlaps the Panel's lower inside edge. Top padding of the hero is `--space-12` (60 px header plus 48), not 128, so the H1 is above the fold (decision D6) |
| 1024 | Same 7/5 at 513 and 367 px. H1 reaches its clamp minimum around 36 to 45 px; check it fits the Panel at three lines |
| 768 | Stacked, one column, 704 px: **photo first**, hint and caption, then the Panel (eyebrow, H1, intro, link). Spacing between photo and Panel `--space-8` |
| 390 | Stacked, 358 px: photo (aspect 35:32 gives about 327 px high), hint line, Panel (padding `--space-6`). Note card docks to the bottom edge of the image, full width minus 16 px (DNA 11.3). Plan labels: only the four hotspot names |

**Image and collage placement.** Photo and plan overlay fill the left region. The overlay (outline, dimension, leader: at most three layers) lives on the photo only. The FragmentFigure may overlap the Panel's border, never its text: the overlap is limited to the Panel's padding box edge (`--space-8` on desktop), so no figure sits under body text (C9). Below 1024 the FragmentFigure sits below the Panel's text or is hidden if it would need to overlap (decision for Dex: hide, it is decorative and its caption repeats FIG. 01).

**Interactions.**
- Arrive (DNA 10.7): linework draws, labels fade, one halo pulse on pin 1; photo, H1 and intro are visible at once.
- Understand: a leader line may connect the intro Panel to the image on desktop only. Not required on mobile.
- Hero exploration (DNA 11.3): lens (110 px; 80 px on touch), P shortcut, plan toggle, four pins with NoteCards, Esc closes. Pointer-hint text "Move over the photo" becomes "Tap a pin" on `hover: none`.
- Scroll must stay possible over the image on touch.

**Accessibility.** The h1 is the page's first heading. Landmark: inside `<main>`, the hero is a `<section aria-labelledby="hero-title">`. Focus order: the text Panel comes first in the DOM (eyebrow, h1, intro, link "View the project →"), then the image controls: pins 1 to 4, then the plan toggle (DNA 11.3). Visually the photo is first on mobile and left on desktop; the DOM order stays Panel, then image, so Tab order follows the reading order of the text. Pin buttons: "Hotspot 1: Entrance" with `aria-pressed`. NoteCard text is also available in the case-study text (nothing lives only in a note). Alt text literal.

**Not in this section:** a second CTA button, a video, a slider, statistics, a "scroll down" cue, awards, client logos.

---

## 3. `[work]`, `[case-study-1]`, `[case-study-2]`

### 3.1 `[work]` wrapper

| | |
|---|---|
| Why it exists | Shows what the studio has actually made, and the facts a client or editor needs |
| User should understand | The studio's work is composed, with facts (place, year, type, role) beside the images |
| Action | Read, open annotation spots, compare with their own project; press, scan facts and credits |
| Why here | After the hero's promise, evidence comes before the service list and philosophy (UX path A step 3) |

**SEO intent.** Project names as h3 and "Residential", "Cultural" as types; plain text, not in images.

**Content blocks.** Visually hidden h2 "Work" (decision D5: CONTENT has no Work heading); two case studies; one stand-in notice for the whole Work section (CONTENT section 4: once for Work). The coordinate label "02 / Work" appears as a SectionLabel (mono-label) above the first case study.

### 3.2 `[case-study-1]` House on the Ridge (full)

**Content blocks (CONTENT section 3):** eyebrow "Case study 01"; h3 title (heading role); tagline; SpecList (Place, Year, Type, Role, Area, Client); three paragraphs; main image with three annotation spots; FIG. 01 caption; two thumbnails FIG. 02 and FIG. 03 with captions; FIG. 04 and FIG. 05 (CONTENT marks them optional; the brief asks for 4 to 6 images, so they are **shown** as a second thumbnail row); detail note; stand-in notice.

**Layout on the grid.**

| Width | Order and columns |
|---|---|
| 1440 | Row 1: **left 5 columns (about 506 px)** main image (aspect 4:5, about 632 px high) with three annotation spots and FIG. 01 caption beneath. **Right 7 columns (about 726 px)**: Panel (padding `--space-8`) holding eyebrow, title, tagline, SpecList (two columns of three rows inside the Panel), and the three paragraphs at 40ch. Row 2 (below the Panel, in the right 7 columns, gap `--space-8`): two thumbnails 3:2, side by side (3 and 3 columns plus a gutter), each with its caption. Row 3 (right 7): optional FIG. 04 and FIG. 05 at 3:2, same size. Detail note and stand-in notice in mono-caption beneath the thumbnails, on the grid (they are captions) |
| 1024 | Same structure at 5/7 of 928 px: image about 378 px wide, text Panel about 526 px |
| 768 | Stacked, image first, then facts (same reading order as desktop): main image and FIG. 01 caption; Panel (eyebrow, title, tagline, SpecList in one column of six rows, paragraphs); thumbnails in two columns; second row; notes. A 4:5 image at 704 px wide is 880 px high, too tall: cap the height at `min(704px, 80svh)` by cropping with object-position; 4:5 is kept from 1024 up (decision D10) |
| 390 | Stacked, one column of 358 px: image (aspect 4:5, about 448 px high), annotation notes dock under the image (see below), caption, Panel (padding `--space-6`), thumbnails in a **single** row of two (each about 167 px wide, 3:2), optional row of two, notes |

**Image and collage placement.** The main image carries up to three drawn annotation spots. No collage layers over the Panel. Thumbnails sit on the page background (grid) with their captions; they never overlap the Panel text. Overlap between the image and the Panel is **none** in this spec: DNA allows overlap with a border but the case study has long paragraphs, so a clean 24 px gutter is kept.

**Interactions.**
- Explore a project (DNA 10.7, 11.4): spots show NoteCards on hover or focus, tap toggles on touch, Esc closes, same card component as the hero. Below 768 the NoteCard docks to the image bottom edge, full width minus 16 px.
- Understand: one leader line from the Panel's SpecList heading to the main image draws as the Panel enters view (desktop only, decorative, `aria-hidden`).
- The `layoutId` image-expand (DNA 10.3 exception 2) opens a thumbnail larger within the same section and returns without losing the place. It is the single place this wrapper is used.

**Accessibility.** `<article aria-labelledby>` with an h3. SpecList is a `dl`. The three paragraphs are real `<p>` elements. Annotation spots are buttons with the aria labels from CONTENT; focus order: Panel text first (eyebrow, h3, dl, paragraphs), then spots 1 to 3, then the thumbnails (only if they are buttons for the expand). Captions use `<figure>` / `<figcaption>`. Credits are real text, not image-only.

**Not in this section:** a gallery grid, a lightbox with arrows (the single expand in DNA 10.3 has none), a "next project" carousel, a download link, a price or budget claim, a real-project claim.

### 3.3 `[case-study-2]` Courtyard Library (shorter)

**Content blocks (CONTENT section 4):** eyebrow "Case study 02"; h3 title; tagline; SpecList (Place, Year, Type, Role, Area); one paragraph; FIG. 06 main image; optional FIG. 07.

**Layout on the grid.**

| Width | Order and columns |
|---|---|
| 1440 | Same 5/7 structure as case study 1 (no mirroring: the DNA states 5/7 and a repeated rhythm is calmer). Image left (5 columns, aspect 4:5), Panel right (7): eyebrow, title, tagline, SpecList (five rows, two columns), one paragraph. Beneath the Panel: FIG. 07 as one 3:2 thumbnail with caption. No annotation spots |
| 1024 | Same at 5/7 |
| 768 | Stacked: image, Panel, thumbnail |
| 390 | Stacked: image (4:5), Panel, thumbnail 3:2 full width |

Spacing between case study 1 and 2: `--space-24` (96) desktop, `--space-16` (64) mobile, with a 1 px hairline divider across the content width.

**Interactions.** None beyond hover/focus states. The leader line is **not** repeated here (it is used once).

**Accessibility.** Same `article` pattern. Fewer interactive parts; focus order is reading order.

**Not in this section:** annotation spots, a second stand-in notice (the first one covers Work).

---

## 4. `[services]`

| | |
|---|---|
| Why it exists | Lets a collaborator or client decide whether the studio does what they need |
| User should understand | Four services, each in one line, no pricing or capacity claims |
| Action | Read and decide; the next action is the header CTA |
| Why here | After evidence of work and before the philosophy: "can they do it" before "how do they think" (UX section 3) |

**SEO intent.** "Architecture", "Interiors", "Masterplanning", "Heritage & retrofit" as h3 text.

**Content blocks (CONTENT section 5):** SectionLabel "03 / Services"; h2 "What we do" (heading role); four ServiceItems (icon, title, body-small line).

**Layout on the grid.**

| Width | Layout |
|---|---|
| 1440 | Heading block first (h2 at the start, spans columns 1 to 6), then a row of 4 equal columns (each 3 of 12 columns, about 296 px), 1 px vertical dividers between items, top and bottom hairlines. Each item: icon 32 px, title (`title` role, `--space-3` below the icon), line (body-small) |
| 1024 | Four across at about 214 px each (inner padding `--space-4`) |
| 768 | Four across would give about 158 px per item: tight; **proposal: 2 × 2 from 768 down to 390** (needs override C8). If the DNA text stays (2 columns only below 768), four across at 768 with the line wrapping to three lines |
| 390 | 2 columns (about 167 px each), two rows; hairlines between |

**Image and collage placement.** None. This section has no photograph. Icons are small line drawings (decorative, `aria-hidden`).

**Interactions.** Decide (DNA 10.7): service name highlights its line icon in the accent colour, 150 ms, colour only; the CTA gains accent-hover. ServiceItems are **non-interactive** (no link, no focus stop) because they have no destination (conflict C4). The icon highlight therefore responds to hover on the item only on `(hover: hover)` devices as a visual cue, and carries no information.

**Accessibility.** Heading levels: h2 then h3 per item. A `<ul>` of four `<li>` items. Icons `aria-hidden`. No focus ring (not focusable).

**Not in this section:** prices, packages, "learn more" links, process steps, a project list.

---

## 5. `[philosophy]`

| | |
|---|---|
| Why it exists | The brief makes the working philosophy part of the pitch; this is where a visitor judges the studio's thinking |
| User should understand | One idea in one line ("Begin with the window, end with the street."), backed by four short principles |
| Action | Read; no button. The reader moves on to contact |
| Why here | After services and before contact: "what" then "how" then "start" |

**SEO intent.** Principle titles are plain text h3s; the pull line is the h2.

**Content blocks (CONTENT section 6):** SectionLabel "04 / Philosophy"; display-quote pull line; 220 px ink rule above it; four principles (title plus one sentence).

**Layout on the grid (decision D3).** The pull line stays the section's one display line (DNA section 5: max 20ch, with a 220 px rule above). The four principles sit **below** it as a quiet list on a Panel (PrincipleList, proposed). It uses existing type roles only: principle number in mono-label, title in `body`, sentence in `body-small`.

| Width | Layout |
|---|---|
| 1440 | Rule (220 px) and pull line on the grid, spanning columns 1 to 8 (max 20ch). Below, `--space-12` gap, a Panel in columns 5 to 12 holding the four principles as a vertical list with 1 px hairlines between items, each item `--space-6` padding. Principle number at start (mono-label, 2 columns wide inside the Panel), title and sentence beside it |
| 1024 | Same; Panel columns 5 to 12 (about 440 px wide) |
| 768 | Pull line full width; Panel full width (704 px), numbers above titles |
| 390 | Rule 220 px (of 358); pull line (30 px minimum) wraps to three or four lines; Panel full width with `--space-6` padding; number above each title |

**Image and collage placement.** None. The section is typographic. (A FragmentFigure is **not** added: no CONTENT supplies it and it would be decoration.)

**Interactions.** Trust (DNA 10.7): rule draws, then the line rises 8 px and fades in (Framer for the reveal); text visible by default; visible at once if reached by anchor, print or JS failure, and under reduced motion. The principles do not animate separately.

**Accessibility.** h2 is the pull line itself (the section's heading). Principle list is an `<ol>` (the numbers matter); h3 inside each item is the title. The rule is decorative. Focus moves to the h2 when reached by anchor, so the h2 has `tabindex="-1"`.

**Not in this section:** a portrait, a signature, an icon per principle, a carousel, a long essay, a second quote.

---

## 6. `[contact]`

| | |
|---|---|
| Why it exists | The page's goal (brief section 2): start a conversation |
| User should understand | What to write, that every message is read, and a reply within five working days. The work-enquiries line tells graduates and collaborators the same form is for them (decision D-b) |
| Action | Fill Name, Email, Message and press "Send message" |
| Why here | The end of the argument and the target of the header CTA |

**SEO intent.** h2 "Start a conversation" plus the fallback email as text.

**Content blocks (CONTENT section 7):** SectionLabel "05 / Contact"; h2; note; work-enquiries line (one line, inside the note area, no separate block: decision D-b); form: Name, Email, Message with help line "A few lines are enough."; "Send message"; live region for success and errors; fallback email line.

**Layout on the grid.**

| Width | Layout |
|---|---|
| 1440 | Heading block (label, h2) on the grid, columns 1 to 5. One Panel on columns 6 to 12 (about 726 px wide, padding `--space-8`): note, work-enquiries line (body-small), then the form, then the fallback email line. Fields stacked, labels above; Name and Email may share a row on 1440 (two columns of 6 grid columns each) |
| 1024 | Same; Panel columns 6 to 12 (about 540 px); Name and Email stack |
| 768 | Heading, then Panel, full width |
| 390 | Heading, then Panel, full width with `--space-6` padding; the button is full width, 48 px high or more |

**Image and collage placement.** None. The form never sits over a photo.

**Interactions.** Contact (DNA 10.7): focus draws an accent line under the field with `scaleX`; error messages and "Sent" fade in in an always-mounted live region. States per docs/UX.md section 5: empty, focus, error (empty field, bad email), sending, success, send failed, reduced motion, JS off. Decision D-a: placeholder form that **simulates** sending; the success copy keeps "(placeholder)". The fallback line shows when JS is off or the send fails.

**Accessibility.** `<section aria-labelledby>`; the form has `aria-describedby` for the help text; one `<label>` per field; `aria-invalid` and `aria-describedby` on error; focus moves to the first invalid field on submit failure; "Sent" uses `role="status"`. The button reads "Sending…" with `aria-busy`. Tab order: Name, Email, Message, Send, fallback email link.

**Not in this section:** a phone number, a map, an address, a calendar widget, a newsletter checkbox, a captcha, a careers block (only the one line).

---

## 7. `[footer]`

| | |
|---|---|
| Why it exists | Says who is behind the page, that it is fictional, and where credits and the press line are |
| User should understand | This is a practice project; photos are stand-ins; how to reach press |
| Action | Mailto the press address or the general address; read credits |
| Why here | The end of the page; the notice must be unmissable but quiet |

**Content blocks (CONTENT section 8):** wordmark; notice; detail paragraph; credits pointer; press line; general line.

**Layout on the grid.**

| Width | Layout |
|---|---|
| 1440 | Top hairline. Row: wordmark at start (columns 1 to 3); notice and detail paragraph (columns 4 to 8, mono-caption, 65ch max); contacts and credits (columns 9 to 12). The detail paragraph is body text, so the footer band has a plain `--color-bg` background with the drafting grid removed behind it (decision D2b) |
| 1024 | Same, wordmark columns 1 to 3, text 4 to 8, contacts 9 to 12 |
| 768 | Wordmark, then text, then contacts, stacked at the start edge |
| 390 | Single column: wordmark, notice, detail, credits pointer, press line, general line, each separated by `--space-4`; bottom padding `--space-12` |

**Image and collage placement.** None.

**Interactions.** None beyond link hover and focus (TextLink).

**Accessibility.** `<footer>` landmark. Addresses are links. The notice is real text. Order: notice, detail, credits, press, general.

**Not in this section:** social links, a sitemap list, a newsletter, a second nav, copyright law text.

---

## 8. Tab order for the whole page
Skip link; wordmark; Work; Services; Philosophy; CTA (below 768: Index, CTA); hero link; hero pins 1 to 4; plan toggle; case-study-1 annotation spots 1 to 3 (and thumbnail expand buttons); form fields; Send; fallback email; footer links.

## 9. Spacing and token quick reference (no new tokens)
Section top padding `--space-32` / `--space-20`. Hero top padding `--space-12` (decision D6). Panel padding `--space-8` / `--space-6`. Gutter `--space-6`. Hero region gap `--space-12`. Between case studies `--space-24` / `--space-16`. Footer bottom padding `--space-12`. Type roles: display, display-quote, heading, title, body, body-small, mono-ui, mono-caption, mono-label. Radius: none, except pins, halos and the lens ring (full).

## 10. Imagery placement summary
| Section | Images | Rule applied |
|---|---|---|
| hero | 1 hero photo with overlay, 1 fragment | Overlay only on the photo; fragment never over text |
| case-study-1 | 1 main (4:5), 2 to 4 thumbs (3:2) | No overlap with the Panel; captions with credits |
| case-study-2 | 1 main (4:5), 1 optional thumb | Same |
| services, philosophy, contact, footer | none | Text-only sections |

Photo set: the six images in `design/mockups/direction-previews/photos.json`; credits in `docs/IMAGE_CREDITS.md`. Six images cover: hero (1), fragment (1, may reuse a crop), case-study-1 (main + 4 thumbs requires up to 5), case-study-2 (up to 2). CONTENT cites credits 1 to 6, so images are reused across sections by crop (Dex confirms against the photos). This is flagged in section 12 (C11).

## 11. Decisions applied from Milo's brief
| Id | Decision | Where |
|---|---|---|
| D-a | Placeholder form that simulates sending, "(placeholder)" kept | `[contact]` |
| D-b | Graduates: one careers line inside contact, no extra block | `[contact]` |
| D3 | Philosophy: one display line with 220 px rule, four principles as a quiet list below, existing type tokens only | `[philosophy]` |
| D2 | Panels required for paragraphs and forms; headings, labels, captions and one-line quotes may sit on the grid (proposed override C2) | all |
| D2b | Footer band has no drafting grid behind its detail paragraph | `[footer]` |
| D6 | Hero top padding `--space-12` so H1, intro and CTA sit above the fold | `[hero]` |
| D10 | Case-study image height capped at `min(704px, 80svh)` at 768 | `[case-study-1]`, `[case-study-2]` |

## 12. Conflicts, gaps and proposed minimal overrides (for Vera to log; the DNA is not edited)
| Id | Conflict or gap | Proposed smallest override or decision |
|---|---|---|
| C1 | DNA section 5 says the philosophy is **one display line**; CONTENT has four principles | Add a PrincipleList in a Panel below the line, using body, body-small and mono-label only. Override text: "Philosophy: one display line with a 220 px rule, followed by a quiet four-item list on a Panel." |
| C2 (D2) | DNA section 5 says text lives on Panels, but the prototype puts headings and short lines on the grid | Rule: paragraphs, forms, lists of sentences sit on a Panel; headings, labels, captions and one-line display quotes may sit on the grid. Footer paragraphs: footer background without grid (D2b). Override text: "Panels are required for paragraphs and forms; headings, mono labels, captions and one-line quotes may sit on the grid." |
| C3 | Header too full at 390 px (wordmark, Index 44, CTA "Start a conversation") | **Resolved (Milo, 2026-10-26):** hide CoordLabel below 768; below 480 px the CTA label is "Contact", full "Start a conversation" everywhere else; the button keeps `aria-label="Start a conversation"`. Nora to add the short label to CONTENT section 1 (Wren does not edit her file). Width of the 480–767 range still to be measured with the real fonts |
| C4 | DNA state matrix gives ServiceItem a focus ring, but services have no destination | Make ServiceItem non-interactive (no focus stop); hover tint only on `(hover: hover)` |
| C5 | CONTENT has no heading for `[work]` | Visually hidden h2 "Work"; Nora may supply visible copy later |
| C6 | DNA has no layout for the hero top spacing, contact and footer | Defined here: hero top `--space-12`; contact heading columns 1–5 plus Panel columns 6–12; footer in 3 bands |
| C7 | The hero photo had no credit caption (DNA 8) | **Resolved (Milo, 2026-10-26):** one caption row under the hero image, bottom-start, never over it: "Image: {credit:1}" in mono-label size (11 px, DNA smallest). Credit 1 = Marc Cordeau, the photo the prototype uses in the hero left image (IMAGE_CREDITS.md / photos.json). The hint line ("Move over the photo" / "Tap a pin") sits on the same row at the end edge on desktop and below the credit on mobile. Nora to add the hero caption to CONTENT section 2. Note: credit 1 is also cited for FIG. 03 in CONTENT, and the hero fragment (FIG. 01) uses credit 3, so images are reused (see C11) |
| C8 | At 768 to 1023 four services across are about 158 px each; DNA says 2 columns only below 768 | Smallest override: services 2 columns below 1024. Not applied in the wireframes (they follow the DNA at 768: four across, flagged) |
| C9 | FragmentFigure overlapping the hero Panel conflicts with "nothing under text" if it overlaps text | Overlap limited to the Panel's padding box edge; hidden below 1024 |
| C10 | SOUL allows `docs/` only, the assignment names `design/wireframes/` | Followed the assignment; flagged to Milo |
| C11 | Six photos, CONTENT cites credits 1 to 6 across about eight image slots | Reuse by crop is needed; Dex or Vera confirm against `photos.json` |
| C12 | Image stand-in line (CONTENT section 3, "Photographs are stand-ins by other photographers. They do not show this project.") vs DNA section 13 item 7 | Fits: it states the photos are not the project's work. Caveat: it sits once for Work; the hero has the same risk and needs the same line (C7) |
| C13 | Footer "Press: press@studio-oriel.example" is a line not in the DNA footer description | Accepted as written in CONTENT section 8 unless Parsa objects |
