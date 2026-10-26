# UX — Studio Oriel

Phase 4 part 1 · Author: Nora · Date: 2026-10-26 · Inputs: docs/G0_INPUT.md, docs/PROJECT_BRIEF.md, docs/RESEARCH.md, design DNA.md (approved 2026-10-26), docs/VISUAL_DIRECTION.md, direction-c-hero-interactive.html.
Sections for Wren (sitemap, section specs, wireframes) are named by id, e.g. `[hero]`. Copy lives in docs/CONTENT.md.

> PRACTICE PROJECT. Studio Oriel, its projects and people are fictional. Personas below are reasoned assumptions from PROJECT_BRIEF section 3, not research with real users. No statistics are used.

## 1. Target users
| Group | Context | What they need from this page | Success looks like |
|---|---|---|---|
| Prospective clients (primary) | Desktop at work or phone in the evening; comparing a few studios | Taste, how the studio works, one project in depth, an easy way to get in touch | Opens the contact form after seeing a project and the philosophy |
| Collaborators (engineers, makers, consultants) | Short check before a call | Services, project facts, signs the studio credits partners | Can say what the studio does and finds a contact |
| Press and editors | Short on time, hunting facts and images | Project facts (place, year, type, role), credits, a press contact | Gets the facts and the press address without scrolling twice |
| Graduates and job seekers | Evening browsing | A point of view and a culture they can judge | Reads the philosophy and understands how the studio thinks |

## 2. Key user paths and scenarios
### Path A · Client shortlisting studios (primary)
Scenario: a person planning a house on a sloping site has three studio tabs open on a laptop. They have ten minutes.
| Step | User does | Page shows | Success / friction |
|---|---|---|---|
| 1 Arrive `[hero]` | Lands, reads the headline and intro | Photo, H1, intro, CTA already visible; lines draw in; one pin pulses once | Understands "houses, libraries, small public buildings" in one read |
| 2 Explore the hero | Moves over the photo, or taps a pin | Lens shows the plan; note card names a part of the building | Friction if pins are not noticed: the single halo pulse and the hint text "Move over the photo" mitigate (section 7) |
| 3 Explore a project `[case-study-1]` | Follows "View the project", reads facts and captions | Spec list (place, year, type, role), three short paragraphs, annotated image | Success: finds a project close to their own |
| 4 Trust `[philosophy]` | Scrolls on | Four principles and one line | Success: "they think like I do" |
| 5 Contact `[contact]` | Presses "Start a conversation" | Form with three fields | Success state "Sent"; error state keeps what they typed |
Keyboard variant: skip link, then header anchors, then the hero pins (Tab), Enter to pin a note, Esc to close, then "Start a conversation".

### Path B · Press looking for facts and credits
Scenario: an editor writing a piece on small libraries needs a place, year, role, image credit and a contact.
| Step | User does | Page shows | Success / friction |
|---|---|---|---|
| 1 | Presses "Work" in the header | Page scrolls (instant under reduced motion); focus moves to the Work heading | Lands on the right section |
| 2 | Opens `[case-study-2]` Courtyard Library | Spec list plus one paragraph plus credit line | Gets place, year, type, role at a glance |
| 3 | Looks for image credits | Each caption ends with the photographer and "Unsplash"; the footer points to docs/IMAGE_CREDITS.md (practice-project note) | Friction: the photos are stand-ins, so the editor must not take them for project photos. The case-study note says so (CONTENT section 3) |
| 4 | Looks for a press contact | Footer line "Press: press@studio-oriel.example" | Success in two scrolls or fewer |

### Path C · Graduate reading the philosophy
Scenario: a final-year student, on a phone on the sofa, wants to know if the studio has a point of view.
| Step | User does | Page shows | Success / friction |
|---|---|---|---|
| 1 | Opens Index (below 768 px), picks Philosophy | Index list opens; page scrolls; coordinate label reads "04 / Philosophy" | Index button is 44×44 |
| 2 | Reads the line and four principles | Rule draws, text rises 8 px; visible at once under reduced motion | Reads without waiting on motion |
| 3 | Moves on to services, then contact | Services show what the studio does | Understands the practice; may use the contact form to ask about opportunities |
Gap noted: the brief has no careers section, so this path ends at the contact form. See open questions.

## 3. Single-page journey
Order follows the page in the approved prototype. The moment names match DNA section 10.7.
| # | Section id | Coordinate label | DNA moment | Question the user is asking | What answers it |
|---|---|---|---|---|---|
| 0 | `[site-header]` | live | all | Where am I, where can I go? | Wordmark, label, 3 anchors, CTA |
| 1 | `[hero]` | 01 / Intro | Arrive, Understand, Hero exploration | What is this and is it for me? | H1, intro, photo with plan lens and pins |
| 2 | `[work]` (`[case-study-1]`, `[case-study-2]`) | 02 / Work | Explore a project | What have they actually made, and how well? | Facts, paragraphs, annotated image, captions |
| 3 | `[services]` | 03 / Services | Decide | Can they do what I need? | Four services, one line each |
| 4 | `[philosophy]` | 04 / Philosophy | Trust | Will they think the way I want? | Pull line plus four principles |
| 5 | `[contact]` | 05 / Contact | Contact | How do I start, and what happens next? | Form, reply promise, success and error states |
| 6 | `[footer]` | not labelled | none | Who is behind this, and is it real? | Fictional notice, press line, credits pointer |
Note: Milo's moment list puts "decide" after "trust"; the prototype and DNA nav put Services before Philosophy. I followed the prototype. Wren can reorder, but the DNA nav (Work, Services, Philosophy) would change with it.

## 4. Navigation pattern (DNA section 11.1)
- First tab stop: skip link to `main`.
- Sticky 60 px header: wordmark at start, CoordLabel centred (`aria-hidden`, headings name the sections), anchors Work, Services, Philosophy, CTA "Start a conversation" at end.
- Anchors scroll smoothly only under `prefers-reduced-motion: no-preference`; focus moves to the target section's heading.
- Below 768 px the anchors collapse into an **Index** button (44×44, `aria-expanded`); the CTA stays visible.
- In-page links: hero "View the project" goes to `[case-study-1]`; the CTA and the footer contact line go to `[contact]`.
- The coordinate label updates when a section crosses the 40–55 % band (IntersectionObserver). No other scroll behaviour.
- No search, no mega-menu, no multi-page nav.

## 5. Contact form: states
Fields: Name, Email, Message. No backend (G0). Behaviour depends on the build choice (open question 1): "mailto" opens the visitor's mail app and cannot confirm delivery; a placeholder form can only simulate sending.
| State | Trigger | What the user sees | Rules |
|---|---|---|---|
| Empty (initial) | Page load | Three labelled fields, helper line, enabled "Send message" button | Labels above fields, never placeholder-only |
| Focus | Field focused | Accent line draws under the field (`scaleX`); label stays | Instant under reduced motion |
| Valid input | Typing | No message | Validate on submit; after first failure, re-validate on blur |
| Error: empty field | Submit with a blank field | Message under each bad field, danger colour plus icon plus text; focus moves to the first invalid field | `aria-invalid`, `aria-describedby`; typed values kept |
| Error: bad email | Email without a valid shape | "Check the email address." style message (copy in CONTENT section 7) | Same rules |
| Sending | Submit passes validation | Button reads "Sending…", `aria-busy`, fields not editable | Short; not shown if the send is instant |
| Success | Placeholder send completes | "Sent. We will reply soon. (placeholder)" in success colour with check icon, `role="status"`; form clears; focus stays on the message | Never colour alone; honest wording if only mailto |
| Error: send failed | Send step fails | Plain message plus the fallback email; values kept; button re-enabled | Danger colour plus icon plus text |
| Reduced motion | OS setting | Same states, no line draw, instant fades | Information never depends on motion |
| Offline / JS off | No script | Visible fallback line with the placeholder email | Page stays readable without JS |
Other empty/error states: an image that fails to load keeps its reserved aspect-ratio box on the photo base colour with its caption; a note card never leaves the user without the same facts in the section text.

## 6. Hero lens and hotspots: usability risks
| # | Risk | Who it hurts | Mitigation |
|---|---|---|---|
| 1 | **Touch:** the lens needs a pointer, pins are small and look decorative, and a finger on the large image may fight page scrolling | Phone and tablet users (a likely majority of first visits) | Pin hit areas 44×44; one halo pulse on pin 1 after the arrive draws; hint "Move over the photo" becomes "Tap a pin" when `hover: none`; tap a pin opens its card with the small 80 px lens and tap again closes; allow vertical page scroll over the image; plan toggle always visible. Content in the cards is also in the case-study text, so nothing is lost if pins are missed |
| 2 | **Keyboard and screen readers:** the lens follows a pointer, so keyboard users could miss the plan; the "P" shortcut could clash with typing or screen-reader keys | Keyboard, switch and screen-reader users | Pins are real buttons in order 1 to 4, then the plan toggle; focus on a pin shows its card and moves the lens there; Enter pins, Esc closes and returns focus to the pin; "P" works only while focus is inside the hero and never inside a text field; labels like "Hotspot 1: Entrance" |
| 3 | **Reduced motion:** lens lag, pin pull and the wipe could cause discomfort, and a visitor could think the plan is gone | Users with vestibular sensitivity | Under `prefers-reduced-motion` the lens and pins respond with no lag or pull and the wipe is instant; halo static; every state is reachable by button, tap or key; no information only in motion |
Known prototype issues already in DNA 11.3 (tiny plan labels at 390 px, a note card covering its own pin) are not repeated here.

## 7. Open questions (max 3)
1. **Contact build:** `mailto:` link or placeholder form that only simulates sending? The "Sent" message is only honest in the second case. Copy in CONTENT supports both.
2. **Graduates path:** the brief has no careers or "join us" content. Is one line in `[contact]` ("For work enquiries...") enough, or add a small block later?
3. **DNA philosophy layout vs four principles:** DNA section 5 describes philosophy as one display line, while the brief asks for four principles and a pull quote. Vera/Wren must decide where the four principles sit. I report it and do not decide it.
