# SITEMAP — Studio Oriel

Phase 4 part 2 · Author: Wren · Date: 2026-10-26 · Inputs: docs/UX.md, docs/CONTENT.md, docs/PROJECT_BRIEF.md, design DNA.md (approved 2026-10-26). English only, LTR. Section specs: docs/SECTION_SPECS.md. Wireframes: design/wireframes/index.html.

> PRACTICE PROJECT. Studio Oriel, its projects and people are fictional.

## 1. Shape of the site
One landing page, no sub-pages. The "sitemap" is the section order on that page. Nothing is added that CONTENT.md does not supply.

```
/  (single page, <main id="main">)
├─ [skip link]            first tab stop, jumps to #main
├─ [site-header]          sticky, 60 px, landmark <header>
├─ <main>
│  ├─ [hero]              #hero         01 / Intro
│  │   └─ [hero-hotspots] (pins + plan lens inside the hero image, not a section)
│  ├─ [work]              #work         02 / Work
│  │   ├─ [case-study-1]  #case-study-1 House on the Ridge (full)
│  │   └─ [case-study-2]  #case-study-2 Courtyard Library (short)
│  ├─ [services]          #services     03 / Services
│  ├─ [philosophy]        #philosophy   04 / Philosophy
│  └─ [contact]           #contact      05 / Contact
└─ [footer]               #footer       landmark <footer>, not labelled
```

## 2. Navigation purpose
| Element | Purpose | Goes to | Notes |
|---|---|---|---|
| Skip link "Skip to content" | Keyboard and screen-reader shortcut | `#main` | First focusable element; visible on focus |
| Wordmark "Studio Oriel" | Orientation, return to top | `#hero` | Link; not a separate page |
| Anchor "Work" | Jump to projects | `#work` | Focus moves to the Work heading (visually hidden h2) |
| Anchor "Services" | Jump to what the studio does | `#services` | Focus moves to the h2 |
| Anchor "Philosophy" | Jump to how the studio thinks | `#philosophy` | Focus moves to the h2 (the pull line) |
| CTA "Start a conversation" | The one primary action, always visible | `#contact` | Visible at all widths; label wraps to two lines below 480 px (see conflicts in SECTION_SPECS section 12) |
| Index (below 768 px) | Holds the three anchors | opens panel with Work, Services, Philosophy | 44×44, `aria-expanded`; panel stays mounted |
| CoordLabel | Tells the sighted user where they are | none (not a link) | `aria-hidden`; hidden below 768 px (see conflicts) |
| Hero "View the project →" | Secondary action | `#case-study-1` | |
| Footer "hello@studio-oriel.example" | Fallback contact | `#contact` section or `mailto:` | Decision: `mailto:` link to the address; the form stays the primary route |
| Footer "Press: press@studio-oriel.example" | Press route | `mailto:` | Accepted as written in CONTENT (see SECTION_SPECS conflicts) |

No search, no mega-menu, no breadcrumbs, no back-to-top button (the wordmark does it).

## 3. Section order and what each must achieve
| # | Id | Anchor | CoordLabel | DNA moment | Must achieve (user can say afterwards) | Next section's link |
|---|---|---|---|---|---|---|
| 0 | `[site-header]` | none | live | all | "I know where I am and how to start." | Always present |
| 1 | `[hero]` | `#hero` | 01 / Intro | Arrive, Understand, Hero exploration | "A small practice for houses, libraries and small public buildings, calm and precise." | "View the project →" to `#case-study-1` |
| 2 | `[work]` | `#work` | 02 / Work | Explore a project | "They have made something I can compare to my own project, and they show facts." | Case-study 2 follows; then services |
| 3 | `[services]` | `#services` | 03 / Services | Decide | "They can do what I need." | Order only |
| 4 | `[philosophy]` | `#philosophy` | 04 / Philosophy | Trust | "They think the way I want an architect to think." | Order only; CTA stays in the header |
| 5 | `[contact]` | `#contact` | 05 / Contact | Contact | "I know how to start and what happens next (a reply within five working days)." | Footer follows |
| 6 | `[footer]` | `#footer` | none | none | "This is a practice project; here are credits and a press line." | End |

Order follows the approved prototype and docs/UX.md section 3: Services before Philosophy.

## 4. Links between sections
| From | To | Via |
|---|---|---|
| Header anchors | work, services, philosophy | in-page anchors |
| Header CTA | contact | in-page anchor |
| Hero link | case-study-1 | TextLink |
| Footer general line | contact (decision: mailto) | TextLink |
| Case-study-1 | none | no outbound links; the CTA in the header stays within reach |
| Contact fallback line | mailto | plain text address, also a TextLink |

Reach-the-form rule (brief section 9): the contact form is one action away from every section through the sticky header CTA.

## 5. Header and footer content
| Slot | Header | Footer |
|---|---|---|
| Start | Wordmark | Wordmark |
| Centre | CoordLabel (≥768 px) | none |
| End | Work, Services, Philosophy, CTA (≥768 px); Index + CTA (<768 px) | none |
| Lines | none | Notice "Practice project, all content fictional."; detail paragraph; "Photo credits: docs/IMAGE_CREDITS.md"; "Press: press@studio-oriel.example"; "hello@studio-oriel.example" |

## 6. DNA inventory components used per section
All components exist in design DNA section 12. New components appear only as **proposals** (marked P) for Vera to log; they use existing tokens and type roles.

| Section | Existing components (DNA section 12) | Proposed (P) |
|---|---|---|
| Skip + header | SkipLink, Header, CoordLabel, IndexDisclosure, Button (primary), TextLink | none |
| `[hero]` | DuotoneImage, HeroPlanLens (Hotspot ×4, NoteCard, PlanToggle), Panel, FragmentFigure, Button/TextLink | none. A credit/stand-in caption near the photo is a caption row using mono-caption, no new component |
| `[work]` | CaseStudy, SpecList, DuotoneImage, NoteCard (annotation spots, DNA 11.4), Panel, FragmentFigure not used | **FigureCaption** (P): figure number + caption + credit in mono-caption under an image |
| `[services]` | ServiceItem ×4 | **SectionLabel** (P): the mono-label coordinate line printed above a heading, e.g. "03 / Services" |
| `[philosophy]` | PhilosophyQuote | **PrincipleList** (P): four principles as a quiet list on a Panel below the line (type roles body, body-small, mono-label only) |
| `[contact]` | Panel, ContactForm (Field ×3, FieldError, SentMessage), Button (primary), TextLink | none |
| `[footer]` | Footer, TextLink | none |

SectionLabel and FigureCaption are named separately only so Dex can reuse them; Vera may fold them into existing components instead. No token is invented.

## 7. Heading and landmark map
| Landmark / heading | Text | Level |
|---|---|---|
| `<header>` | wordmark + nav | landmark `banner`; `<nav aria-label="Primary">` |
| `<main id="main">` | | landmark |
| hero | "Notes toward a quieter building." | h1 |
| work | "Work" (visually hidden) | h2 |
| case-study-1 / 2 | House on the Ridge / Courtyard Library | h3 |
| services | "What we do" | h2 |
| service items | Architecture, Interiors, Masterplanning, Heritage & retrofit | h3 |
| philosophy | "Begin with the window, end with the street." | h2 |
| principles | four titles | h3 (inside the list items) |
| contact | "Start a conversation" | h2 |
| `<footer>` | | landmark `contentinfo` |

## 8. Out of scope (not in the sitemap)
About page, team, careers block (one line inside contact only), press kit page, journal, project index, pricing, testimonials, awards, logos, newsletter, cookie banner, search, language switch. None is in CONTENT.md or the brief.
