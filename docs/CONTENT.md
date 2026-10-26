# CONTENT — Studio Oriel

Phase 4 part 1 · Author: Nora · Date: 2026-10-26 · English only, LTR. Voice: calm, precise, plain words. No "visionary", no "bespoke journey", no word swaps.

> PRACTICE PROJECT. Everything below is invented placeholder. The studio, the projects, towns, years, areas and addresses are fictional. No real people, no real credentials, no statistics. The photos are free Unsplash images of real buildings by other photographers; they do not show this studio's work.

## How to use this file
- Each block starts with the section id Wren uses, e.g. `[hero]`. Text inside quotes is the copy to ship.
- **Placeholder facts** are listed per block. They are invented and must be replaced before any real use. The footer notice covers the whole site.
- Length guides come from the DNA type scale (display 36–60 px, heading 30–46 px, body 17 px at 40ch in panels, note-card text mono 12 px).
- Not placed in `src/content` yet: I was told not to touch `src/`. Milo or Dex moves it, keeping these ids as keys.
- Image credits: captions use a token like `{credit:4}`; the build fills it from docs/IMAGE_CREDITS.md as "Image: photographer / Unsplash".

---

## 1. `[site-header]`
| Slot | Copy |
|---|---|
| Wordmark | "Studio Oriel" |
| Skip link | "Skip to content" |
| Anchor 1 | "Work" |
| Anchor 2 | "Services" |
| Anchor 3 | "Philosophy" |
| Primary CTA | "Start a conversation" (all widths from 480 px up) |
| Primary CTA, short label (below 480 px only) | "Contact"; the button keeps `aria-label="Start a conversation"` so the accessible name stays the same |
| Index button (below 768 px) | "Index" |
| Coordinate labels | "01 / Intro", "02 / Work", "03 / Services", "04 / Philosophy", "05 / Contact" |
Placeholder facts: the name "Studio Oriel" is a confirmed fictional name.

## 2. `[hero]`
| Slot | Copy |
|---|---|
| Eyebrow | "Studio Oriel · Architecture" |
| H1 | "Notes toward a quieter building." |
| Intro (panel) | "Studio Oriel is a small architecture practice for houses, libraries and small public buildings. We start with the light, the street and the people who will use the rooms. Then we draw as little as we can." |
| Link | "View the project →" (goes to `[case-study-1]`) |
| Hint under photo (pointer) | "Move over the photo" |
| Hint under photo (touch) | "Tap a pin" |
| Plan toggle | "Full plan" / "Back to photo" |
| Fragment caption | "FIG. 00 — fragment" |
| Hero credit caption (under the hero image, never over it) | "Image: {credit:1} · Stand-in photo" |
| Photo alt (literal) | "Concrete facade with a grid of narrow windows." (confirm against the chosen photo) |
Stand-in coverage of the hero: I chose the **shorter placement**, the two words "Stand-in photo" added to the hero credit caption, instead of repeating the full sentence under the hero. The full sentence ("Photographs are stand-ins by other photographers. They do not show this project.") stays once under the Work images and the footer detail repeats it for the whole site. Credit 1 is Marc Cordeau in both docs/IMAGE_CREDITS.md and photos.json (checked).
Placeholder facts: none beyond the fictional studio. The H1 is the approved prototype line.

### `[hero-hotspots]` Pin notes (number, name, one line)
These match the four pins in the approved prototype. Each line is at most about 70 characters.
| # | Name | Note |
|---|---|---|
| 01 | Entrance | "A recessed door, one step below the street." |
| 02 | Stair | "A single flight, lit from the well above." |
| 03 | Light well | "A square cut through the roof, the only north light." |
| 04 | Roof edge | "A thin overhang that keeps rain off the wall." |
Aria labels: "Hotspot 1: Entrance" and so on. Card hint line: "Click or Enter to pin" / "Tap again to close" / "Esc to close".
Placeholder facts: the plan and these building parts are fictional and do not describe the photographed building.

## 3. `[work]` and `[case-study-1]` House on the Ridge (full)
| Slot | Copy |
|---|---|
| Hidden section heading (h2, visually hidden, for `[work]`) | "Work" |
| Eyebrow | "Case study 01" |
| Title | "House on the Ridge" |
| Tagline | "One long room, one thick wall, one window toward the valley." |
Spec list (`dl`):
| Label | Value |
|---|---|
| Place | "Fictional ridge town" |
| Year | "2024" |
| Type | "Residential" |
| Role | "Architecture and interiors" |
| Area | "186 m²" |
| Client | "Private" |
Paragraphs (body, about 40 words each):
1. "The site is a narrow ridge with a long view south and a cold wind from the north. We kept the house to one room deep, so every space gets light from two sides and nothing sits in the dark."
2. "A thick concrete wall runs along the north edge. It holds the stair, the storage and the services, and it keeps the wind off the living space. Everything on the south side is thin and open."
3. "A long window is cut toward the valley, set low so that a person sitting sees the slope and not the sky. The material is plain: concrete, oak and glass, each used once and left alone."
Image captions (main image, two thumbnails, up to two extra; fixed aspect ratios per DNA):
| Slot | Caption |
|---|---|
| FIG. 01 main (4:5) | "FIG. 01 — North wall, with narrow windows. {credit:4}" |
| FIG. 02 thumb (3:2) | "FIG. 02 — Stair lit from above. {credit:6}" |
| FIG. 03 thumb (3:2) | "FIG. 03 — Window cut toward the valley. {credit:1}" |
| FIG. 04 optional | "FIG. 04 — Wall and floor meet. {credit:2}" |
| FIG. 05 optional | "FIG. 05 — Light on the lower flight. {credit:5}" |
Annotation spots on the main image (note cards, DNA 11.4):
| # | Aria label | Note |
|---|---|---|
| 1 | "Annotation 1: ribbon windows" | "1 · Ribbon windows face the valley" |
| 2 | "Annotation 2: stepped bands" | "2 · Stepped bands shade the lower floor" |
| 3 | "Annotation 3: north wall" | "3 · The thick wall takes the wind" |
Detail note (one line, under the thumbnails): "Detail: the north wall is 450 mm thick and holds the stair, storage and services."
Stand-in notice (small, mono-caption, under the images): "Photographs are stand-ins by other photographers. They do not show this project."
Placeholder facts: town, year 2024, role, area 186 m², client "Private", wall thickness 450 mm, the whole project. Image/caption pairing is a suggestion; Wren and Dex fix it against the chosen photos, and the captions describe the fictional project, not the photographed building.

## 4. `[case-study-2]` Courtyard Library (shorter)
| Slot | Copy |
|---|---|
| Eyebrow | "Case study 02" |
| Title | "Courtyard Library" |
| Tagline | "A reading room around a quiet yard." |
Spec list:
| Label | Value |
|---|---|
| Place | "Fictional river town" |
| Year | "2023" |
| Type | "Cultural" |
| Role | "Architecture" |
| Area | "1 240 m²" |
Paragraph (about 50 words): "The library wraps a small courtyard, so each reading room looks into green and away from the street. Brick walls match the old town. Inside, long tables sit under deep windows, and the stair doubles as seating for talks."
Captions:
| Slot | Caption |
|---|---|
| FIG. 06 | "FIG. 06 — Windows and brick bands. {credit:3}" |
| FIG. 07 optional | "FIG. 07 — Stair in daylight. {credit:5}" |
Placeholder facts: town, year 2023, area 1 240 m², role, the whole project. Same stand-in notice as case study 1 applies once for the Work section.

## 5. `[services]` (4 items, one line each)
Section label: "03 / Services". Optional heading: "What we do".
| Name | Line |
|---|---|
| "Architecture" | "New houses and small public buildings." |
| "Interiors" | "Rooms, joinery and light." |
| "Masterplanning" | "Sites, and how they are read." |
| "Heritage & retrofit" | "Old walls, new use." |
Icon descriptions for Vera: house outline, room with a bench, site plan step line, three arches (decorative, `aria-hidden`).
Placeholder facts: the service list is invented; no pricing, no capacity claims.

## 6. `[philosophy]` (pull line plus four principles)
Section label: "04 / Philosophy".
Pull line (display-quote, one line): "Begin with the window, end with the street."
| # | Principle (title) | One sentence |
|---|---|---|
| 1 | "Start with the opening." | "Where light enters and what it frames shape a room before the plan does." |
| 2 | "Measure before you draw." | "We walk the site and write down distances, slopes and shadows first." |
| 3 | "One material, one idea." | "Each material does a single job and is left as it is." |
| 4 | "Finish at the street." | "A building is read from outside first, so we test every design from the public edge." |
Placeholder facts: the philosophy is invented for the exercise and claims nothing about real practice.

## 7. `[contact]`
Section label: "05 / Contact".
| Slot | Copy |
|---|---|
| Heading | "Start a conversation" |
| Note | "Tell us about the site, the question or the brief. We read every message and reply within five working days." |
| Work enquiries line | "For work enquiries, mention your role and a link to your portfolio." |
| Name label | "Name" |
| Email label | "Email" |
| Message label | "Message" |
| Message help | "A few lines are enough." |
| Submit | "Send message" |
| Submit (sending) | "Sending…" |
| Success | "Sent. We will reply soon. (placeholder)" |
| Fallback email (no JS or failure) | "Or write to hello@studio-oriel.example" |
Error messages (shown under the field with an icon):
| Case | Copy |
|---|---|
| Name empty | "Enter your name." |
| Email empty | "Enter your email address." |
| Email invalid | "Check the email address. It should look like name@example.com." |
| Message empty | "Write a few words about your project." |
| Send failed | "We could not send this message. Please try again, or write to hello@studio-oriel.example." |
If the build uses `mailto:` only: replace the success line with "Your mail app should open. If it does not, write to hello@studio-oriel.example." (never claim "Sent").
Placeholder facts: the reply time "five working days" and the address (reserved .example domain, not real).

## 8. `[footer]`
| Slot | Copy |
|---|---|
| Notice | "Practice project, all content fictional." |
| Detail | "Studio Oriel, its projects and people are invented. Photographs are free Unsplash images of real buildings by other photographers and do not show this studio's work." |
| Credits pointer | "Photo credits: docs/IMAGE_CREDITS.md" |
| Press line | "Press: press@studio-oriel.example" |
| General line | "hello@studio-oriel.example" |
| Wordmark | "Studio Oriel" |
Placeholder facts: both addresses (reserved .example domain). The credits path is a practice-project pointer; a real site would link a credits page.

## 9. Invented content index
Added 2026-10-26: short header CTA label "Contact" (below 480 px), hero credit caption "Image: {credit:1} · Stand-in photo", hidden h2 "Work", and the image-slot table in section 10 (a suggested pairing, not a fact about any building). The footer "Press:" line is accepted. Everything here is invented: studio positioning, the two projects and their towns, years (2024, 2023), areas (186 m², 1 240 m²), the 450 mm wall, services, philosophy, reply time (five working days), both email addresses. Carried over from the approved prototype and not invented by me: the H1, the four pin names and lines, the services names, the annotation texts, the pull line.

## 10. Image slots to photos
Six photos (docs/IMAGE_CREDITS.md, photos.json: n = credit number) serve nine slots, so three are reused with a different crop each (C11). Suggested pairing for Dex; Vera or Dex adjust against the real pictures. Photos show real buildings by others, never this studio's work.
| Slot | Section | Photo (credit) | Photographer | Ratio | Note |
|---|---|---|---|---|---|
| Hero image | `[hero]` | 1 | Marc Cordeau | 35:32 | Matches the approved prototype and C7 |
| Fragment "FIG. 00 — fragment" | `[hero]` | 3 | Pawel Czerwinski | 4:5 | Tight crop on windows; per SECTION_SPECS C7 note |
| FIG. 01 main | `[case-study-1]` | 4 | Koen Sweers | 4:5 | Used in the prototype |
| FIG. 02 thumb | `[case-study-1]` | 6 | note thanun | 3:2 | Used in the prototype |
| FIG. 03 thumb | `[case-study-1]` | 1 | Marc Cordeau | 3:2 | Reuse of the hero photo: crop a different area |
| FIG. 04 optional | `[case-study-1]` | 2 | Claudio Poggio | 3:2 | Can be dropped |
| FIG. 05 optional | `[case-study-1]` | 5 | Peter Herrmann | 3:2 | Can be dropped |
| FIG. 06 | `[case-study-2]` | 3 | Pawel Czerwinski | 3:2 | Reuse of the fragment photo: a different crop |
| FIG. 07 optional | `[case-study-2]` | 5 | Peter Herrmann | 3:2 | Reuse of FIG. 05; drop one of the two |
Flags: (1) "FIG. 01" is used twice, for the hero fragment and for the case-study main image. Renumber one (for example the fragment becomes "FIG. 00" or "Fragment"); I did not change either. (2) Dropping the three optional slots leaves six slots and only two reuses.
