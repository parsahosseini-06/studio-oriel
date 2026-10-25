# VISUAL_DIRECTION — Studio Oriel

> **Decision (2026-10-25):** Parsa chose **Direction C — Survey Sheet**. Paper depth from Direction A (Paper Strata) is added only if Parsa asks later. Directions A, B, D and E stay below for the record. Interactive hero prototype: design/mockups/direction-previews/direction-c-hero-interactive.html.


Phase 2 · Author: Vera · Inputs: docs/G0_INPUT.md, docs/PROJECT_BRIEF.md, docs/RESEARCH.md, AGENTS.md · Status: five directions for Parsa to pick from.

> PRACTICE PROJECT. Studio Oriel, its projects and people are fictional. Photos are free Unsplash/Pexels architecture images and never show the studio's work.

## How to read this file
- Font names are **candidate free/Google fonts, examples only**. Colour values are **indicative examples only**. Final tokens come in Phase 3 (design DNA.md).
- Stack constraint (AGENTS.md): React + Vite + Framer Motion. Every motion idea below is feasible with CSS state transitions plus Framer Motion (`useScroll`, `layout`, `AnimatePresence`). Nothing needs GSAP or another library.
- The brief's rules hold in every direction: English, LTR, contrast of at least 4.5:1 for text, a reduced-motion variant for each animation, collage never sits under body text.
- **References actually inspected:** none visually. I did not open any site this session and Refero is not connected. I used the four text-only notes in docs/RESEARCH.md (BIG, Snøhetta, David Chipperfield Architects, Kinfolk), which Nora read as page text only, plus my own general knowledge of editorial and architectural-drawing conventions. Every INSPIRED BY below is a principle, not an observed layout.

## Summary

| # | Name | Collage method | Type voice | Colour mood | Motion personality |
|---|---|---|---|---|---|
| A | Paper Strata | Layered paper cut-outs with soft edge shadows | Text serif + quiet sans | Warm bone, ink, clay-grey | Settling, tactile |
| B | Gridwork | Grid-snapped crops, modular tiles | Neutral grotesk, tabular figures | Cool white, graphite, one oxide accent | Precise, stepwise |
| C | Survey Sheet | Drawing overlays on toned photos | Light sans + mono labels | Tracing-paper grey-blue, graphite | Drawn, measured |
| D | Close Reading | Scale-contrast detail crops | Large light display sans | Deep stone, mineral pale | Zooming, patient |
| E | One Window | Single-image slow reveal through a frame | Wide-tracked caps + reading serif | Mist, limewash, deep umber | Slow, cinematic-calm |

---

## A · Paper Strata
**Concept:** the page is a table of cut paper: photographs are trimmed like card, stacked in layers, and the studio's thoughts sit on the clean sheets between them.

**Keywords:** tactile, layered, warm, hand-composed, quiet.

**Typography:** a refined text serif for headlines in roman (no italic swaps) and a restrained humanist sans for labels and UI. Headlines are mid-large, never shouting. Captions are small, spaced, uppercase. Examples: Newsreader or Source Serif 4 with Hanken Grotesk.

**Colour:** a warm bone canvas, near-black ink for text, a clay-grey and a muted sage as paper tones behind cut-outs. One deep ink-blue for links and focus. Mood: archival, calm, never beige-sweet. Examples: #F1EDE6, #1B1A18, #B9B2A6, #8C9486, #23304A.

**Layout:** 12-column grid with deliberate off-grid overlaps; text columns stay on clean sheets, collage lives in generous margins and between sections.

**Collage method:** photos are cropped with straight or single-diagonal cuts, stacked in 3 depth levels, each with a tiny edge shadow and a 1px paper edge. A few torn-free, precise cuts only. No rotation beyond about 2°.

**Image direction:** warm-neutral grade across all photos, lifted blacks, reduced saturation, one grain overlay. Crop to façades, shadows and material fragments rather than whole buildings.

**Shape language:** rectangles, one 45° cut per composition, hairline edges. No rounded corners.

**Navigation:** slim top bar, wordmark left, three anchors and "Start a conversation" as a paper tab on the right.

**Hero:** a large photo layer, two smaller layers overlapping its corner, the statement set on a bone sheet that overlaps the bottom.

**Motion (settling, tactile):** Arrive: layers drop into place back to front, 400–600 ms total. Understand: layers shift 8–16 px in parallax, so text stays still. Trust: principles appear as sheets sliding onto a stack. Explore: a layer lifts and expands into the case study. Decide: services lift 2 px on hover/focus. Contact: field focus raises the form sheet slightly.

**Interaction:** hover lifts a layer; focus rings in ink-blue; click expands.

**Risks:** shadows can feel skeuomorphic or scrapbook-cute; parallax can make text hard to read.

**Best use:** studios whose pitch is craft and warmth.

**INSPIRED BY:** the Kinfolk-style magazine feel of calm, paper-like composition (from RESEARCH.md R4 text only), and physical paper-collage practice. **DO NOT COPY:** Kinfolk's carousel, palette, layouts or photography.

---

## B · Gridwork
**Concept:** collage as rigour: every photo is cropped to the grid and snapped to its modules, so the page reads like a well-set architectural monograph.

**Keywords:** exact, modular, factual, cool, numbered.

**Typography:** one neutral grotesk in two weights, with tabular figures for numbering and credits. Headlines are large, tightly tracked, and set flush left. Examples: Schibsted Grotesk or Inter Tight, with IBM Plex Mono only for tiny data.

**Colour:** cool white, graphite text, a mid grey for rules, and a single oxide-red accent used for the CTA and numbers only. Mood: factual luxury. Examples: #F6F7F7, #16181A, #8B9094, #B0432B.

**Layout:** strict 12-column grid with a visible baseline rhythm. Sections are numbered 01–05 in the margin.

**Collage method:** photos are cut into rectangles that span 1, 2, 3 or 4 modules, abutting with a 1px gutter. A big crop and several small crops of the same photo make variety from few assets. Never overlap.

**Image direction:** neutral to cool grade, matched contrast, desaturated by about 15%. Straight-on, axial crops preferred.

**Shape language:** orthogonal only, 0 radius, hairline rules, small numerals.

**Navigation:** sticky left rail with section numbers (collapses to a top bar on mobile).

**Hero:** a 4×3 mosaic of crops with the statement spanning the first two columns on white.

**Motion (precise, stepwise):** Arrive: tiles reveal in reading order by clip-path wipe, 60 ms apart. Understand: section numerals tick as you scroll. Trust: principles reveal row by row. Explore: a tile expands into the case study through a layout transition. Decide: services rows underline on focus. Contact: field validation steps in 120 ms.

**Interaction:** hover swaps a tile's crop to a different crop of the same photo.

**Risks:** can read cold or Swiss-template; needs a strong typographic hand to stay luxurious.

**Best use:** a rigorous, speed-first build.

**INSPIRED BY:** the numbered, factual feed and understated copy from RESEARCH.md R3 (Chipperfield, text only). **DO NOT COPY:** its news-feed homepage, taxonomy, copy or images.

---

## C · Survey Sheet
**Concept:** photographs are laid on a drafting table; plan lines, dimensions and annotations connect them like a survey of the studio's thinking.

**Keywords:** drawn, measured, analytic, pale, annotated.

**Typography:** a light sans for headlines at medium size and a monospaced face for dimension labels, figure numbers and captions. Headline sentences are plain and short. Examples: Manrope Light or Instrument Sans with JetBrains Mono.

**Colour:** pale tracing-paper grey-blue canvas, graphite for text, a mid blue-grey for linework, and one soft vermilion pin for the CTA. Mood: quiet technical. Examples: #E9EDEF, #1D2226, #6F8190, #D9552F.

**Layout:** a loose drafting grid with margin annotations; text blocks sit in clear panels.

**Collage method:** toned photos sit beneath thin vector overlays: plan outlines, section lines, dimension ticks, north arrow. Overlays link photo fragments with leader lines. Overlay is always above the photo, never beneath body text.

**Image direction:** monochrome-leaning duotone (graphite to pale blue) so linework sits cleanly on any photo. Crop to structure: stairs, frames, junctions.

**Shape language:** thin 1px lines, small circles at junctions, right angles, no fills.

**Navigation:** a thin header with a coordinate-style label ("01 / Intro") that updates on scroll.

**Hero:** one large duotone photo with a plan outline drawing over it, wordmark and statement on a clear panel.

**Motion (drawn, measured):** Arrive: linework draws in over about 900 ms, then the photo settles. Understand: leader lines extend from the text to the matching image fragment. Trust: dimension labels resolve as principles come in. Explore: the plan line morphs into the case study frame. Decide: service names highlight their related line. Contact: a short line draws under the focused field.

**Interaction:** hover on an image reveals its annotation; focus follows keyboard order.

**Risks:** SVG overlays need care on small screens; can feel like a blueprint cliché if lines are heavy.

**Best use:** a studio whose story is process and precision.

**INSPIRED BY:** the quiet technical documentation tone and "place + year + typology" caption unit from RESEARCH.md R1 (BIG, text only), and general drawing conventions. **DO NOT COPY:** BIG's long project stack, mega-menu, icons or imagery.

---

## D · Close Reading
**Concept:** the page looks at architecture the way a critic does, moving from one huge fragment of material down to the whole building and back.

**Keywords:** monumental, tactile, dark, patient, intimate.

**Typography:** one large, light-weight display sans for headlines at very big sizes, with a small, steady sans for body and captions. The scale contrast is the typographic feature. Examples: Outfit Light or Albert Sans with DM Sans.

**Colour:** deep stone near-black canvas, pale mineral off-white for text, a mid slate for secondary text, one pale brass-free warm grey as highlight. Mood: night gallery, sober. Examples: #121312, #ECEAE4, #8A8D88.

**Layout:** full-bleed fragments alternate with small text islands; strong asymmetry and long vertical pauses.

**Collage method:** scale contrast. One enormous macro crop of a surface fills the viewport, while a tiny thumbnail of the whole building sits inside or beside it at 1/10 scale. Zoom levels become the sequence.

**Image direction:** low-key, high-contrast, slight cool grade, deep shadows kept. Favour textures: concrete, timber, glass edges, light on stone.

**Shape language:** big rectangles, thin frames around the small thumbnails, no ornament.

**Navigation:** minimal fixed corner nav (wordmark and a menu word); the CTA is a quiet text link.

**Hero:** an edge-to-edge detail crop with the statement at lower left and a tiny whole-building inset at upper right.

**Motion (zooming, patient):** Arrive: the macro crop eases out over about 1.2 s to reveal context. Understand: scroll scales the fragment down while the text rises. Trust: principles appear one at a time against black. Explore: the thumbnail grows to full screen as the case study. Decide: services dim to focus. Contact: the page quietens, the form fades in.

**Interaction:** hover on a thumbnail previews the full building.

**Risks:** dark theme contrast and photo weight; crops of few photos may repeat; less welcoming.

**Best use:** a bold, cinematic brand with strong photography.

**INSPIRED BY:** the one-line evocative taglines from RESEARCH.md R2 (Snøhetta, text only) and film-like pacing. **DO NOT COPY:** Snøhetta's card grids, taglines, dark-mode toggle or imagery.

---

## E · One Window
**Concept:** a single frame, shaped like an oriel window, shows one image at a time; the collage is made over time as pieces slide in and rest beside it.

**Keywords:** serene, framed, slow, airy, deliberate.

**Typography:** wide-tracked small caps in a clean sans for section labels and navigation, and a readable serif in roman for statements and body. Headlines are modest. Examples: Jost caps with Source Serif 4, or Cormorant Garamond only for large display if it holds contrast.

**Colour:** mist and limewash neutrals as canvas, deep umber for text, a soft moss for secondary details, and a single terracotta-free clay for the CTA. Mood: soft morning light. Examples: #EEEEE9, #2B2420, #7D8573, #A4674A.

**Layout:** wide margins, a central frame, text shifting left or right of it per section. Lots of air.

**Collage method:** one dominant image at a time inside the frame. Supporting fragments arrive as small cut-outs along the frame edge and rest there, so the collage accumulates as you scroll and is complete at the end.

**Image direction:** soft, bright, low contrast, slight warm lift, matched white point. Favour windows, thresholds, light through openings.

**Shape language:** a repeated oriel frame (rectangle with one bay projection), thin outline, 0 radius elsewhere.

**Navigation:** centred wordmark, links left and right of it, CTA as outlined text.

**Hero:** the frame holds one slow image; the statement sits beside it on limewash.

**Motion (slow, cinematic-calm):** Arrive: the frame image fades in and drifts about 2% over 1.5 s. Understand: scroll swaps the frame image with a soft mask wipe. Trust: fragments settle along the frame edge, one per principle. Explore: the frame opens into the case study at full width. Decide: services list sits plainly with a thin underline. Contact: the frame narrows to a window onto the form.

**Interaction:** keyboard-friendly previous/next on frame images.

**Risks:** pinned scroll can feel slow or hide content; speed priority suffers if many large images are swapped; fewer visible collage pieces at once.

**Best use:** calm, premium storytelling that values pace.

**INSPIRED BY:** the "oriel" window idea from the studio name (PROJECT_BRIEF §10) and Kinfolk's unhurried magazine pacing (RESEARCH.md R4, text only). **DO NOT COPY:** Kinfolk's carousel, covers, copy or palette.

---

## Comparison

| Criterion | A Paper Strata | B Gridwork | C Survey Sheet | D Close Reading | E One Window |
|---|---|---|---|---|---|
| Minimal + luxury | High | High | Medium-high | High | High |
| Collage is core | Very strong | Medium (modular) | Strong (layered) | Strong (scale) | Medium (sequential) |
| Editorial feel | Strong | Strong | Medium | Medium | Strong |
| Fits few photos | Good | Very good | Very good | Good | Weak-good |
| Speed (priority 3) | Good | Best | Good | Medium | Medium |
| Motion fit to journey | Good | Good | Very good | Very good | Good |
| Accessibility effort | Medium | Low | Medium | Medium (contrast) | Medium (pinned scroll) |
| Risk of cliché | Scrapbook | Swiss template | Blueprint | Dark cinematic | Slow-scroll gimmick |
| Distinct from others | Yes | Yes | Yes | Yes | Yes |

## Recommendation

**Choose C · Survey Sheet as the base, with the paper depth of A for two layered moments.**

Reasons:
1. **It is the most architecture-specific.** Drawing overlays give collage a reason to exist: they connect fragments, which fixes the "collage as noise" risk named in PROJECT_BRIEF §5.
2. **It works with few licensed photos.** Duotone treatment unifies mixed Unsplash/Pexels images, and the overlay layer adds variety without more assets.
3. **Its motion has a purpose at every journey moment** (draw, connect, resolve, morph), which matches the brief's rule that every animation serves hierarchy, continuity, state or feedback.
4. **It stays light and fast.** SVG lines are small, and effects are transform/opacity/stroke only.
5. **It is calm and premium** if the linework is kept hairline and sparse.

**Parts of other directions that combine well:**
- From **B**: the numbered section labels and tabular figures, plus grid-snapped sizes for the case-study image set.
- From **A**: one or two paper-cut layered overlaps in the hero and the case-study opening, so the page has some warmth and depth.
- From **D**: one macro-detail crop in the case-study opening, for a scale-contrast moment.
- From **E**: the slow, single-image pacing for the philosophy section only.

Avoid combining A and D wholesale (warm paper and dark stone pull the palette apart) and avoid pinned scroll (E) across the whole page because of the speed priority.

## Unverified
- No reference was visually inspected; no Refero. Direction claims are design reasoning, not observed examples.
- Fonts were not checked for licence, glyph coverage or loading weight beyond being common free/Google families.
- Colour examples have not been contrast-tested; that happens in Phase 3.
- No photos were searched, so the image treatments are untested on real Unsplash/Pexels images.
- Feasibility of the motion ideas with Framer Motion alone was reasoned, not prototyped.
