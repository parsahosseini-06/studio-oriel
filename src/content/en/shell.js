// Copy for the shell (docs/CONTENT.md sections 1 and 8). Section copy arrives in Phase 8.
export const header = {
  wordmark: 'Studio Oriel',
  skipLink: 'Skip to content',
  anchors: [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#philosophy', label: 'Philosophy' },
  ],
  cta: { href: '#contact', label: 'Start a conversation', shortLabel: 'Contact' },
  indexButton: 'Index',
  navLabel: 'Primary',
}

// Coordinate labels, one per section (CoordLabel reads them from data-sec).
export const sections = [
  { id: 'hero', sec: '01 / Intro' },
  { id: 'work', sec: '02 / Work' },
  { id: 'services', sec: '03 / Services' },
  { id: 'philosophy', sec: '04 / Philosophy' },
  { id: 'contact', sec: '05 / Contact' },
]

export const footer = {
  wordmark: 'Studio Oriel',
  notice: 'Practice project, all content fictional.',
  detail:
    "Studio Oriel, its projects and people are invented. Photographs are free Unsplash images of real buildings by other photographers and do not show this studio's work.",
  credits: 'Photo credits: docs/IMAGE_CREDITS.md',
  press: { label: 'Press: press@studio-oriel.example', href: 'mailto:press@studio-oriel.example' },
  general: { label: 'hello@studio-oriel.example', href: 'mailto:hello@studio-oriel.example' },
}
