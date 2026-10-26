import { useEffect } from 'react'

// PHASE 6 SMOKE PAGE: throwaway. Proves tokens, fonts and grid work. Replace in Phase 7.
const colors = [
  'bg', 'surface', 'text', 'text-muted', 'border', 'border-subtle', 'grid-line', 'accent',
  'accent-hover', 'on-accent', 'focus', 'focus-on-photo', 'inverse', 'on-inverse',
  'success', 'danger', 'photo-base',
]
const spaces = [1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40]
const roles = [
  ['display', 'display', 'Notes toward a quieter building'],
  ['display-quote', 'display-quote', 'A building should be quiet.'],
  ['heading', 'heading', 'Case study heading'],
  ['title', 'title', 'Small title, Manrope 500'],
  ['body', '', 'Body text, Manrope 300 at 17px with a 1.6 line height. Practice project, all content fictional.'],
  ['body-small', 'body-small', 'Body small, Manrope 400 at 14px.'],
  ['mono-ui', 'mono-ui', 'Mono UI 0123456789'],
  ['mono-caption', 'mono-caption', 'Mono caption 0123456789'],
  ['mono-label', 'mono-label', 'Mono label 0123456789'],
]

export default function App() {
  useEffect(() => {
    const set = (k, v) => { const el = document.querySelector(`[data-smoke="${k}"]`); if (el) el.textContent = v }
    document.fonts.ready.then(() => {
      const ok = (f) => document.fonts.check(`16px "${f}"`)
      set('fonts', `Manrope ${ok('Manrope') ? 'loaded' : 'MISSING'}, JetBrains Mono ${ok('JetBrains Mono') ? 'loaded' : 'MISSING'}`)
    })
    set('margin', getComputedStyle(document.documentElement).getPropertyValue('--margin') + ` at ${window.innerWidth}px`)
  }, [])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <main id="main" tabIndex={-1} className="wrap section" style={{ paddingBlockEnd: 'var(--sec-pad)' }}>
        <p className="mono-label" style={{ color: 'var(--color-accent-hover)' }}>Phase 6 smoke page, replaced in Phase 7</p>
        <h1 data-smoke="h1">Studio Oriel tokens</h1>
        <p className="mono-caption muted" data-smoke="meta">
          Fonts: <span data-smoke="fonts" /> | Margin <span data-smoke="margin" />
        </p>

        <h2 className="title" style={{ marginBlockStart: 'var(--space-12)' }}>Colour</h2>
        <ul className="grid-12" style={{ rowGap: 'var(--space-4)', marginBlockStart: 'var(--space-4)' }}>
          {colors.map((c) => (
            <li key={c} style={{ gridColumn: "span 6" }}>
              <div style={{ background: `var(--color-${c})`, border: 'var(--line-hair) solid var(--color-border)', blockSize: 'var(--space-12)' }} />
              <span className="mono-caption">--color-{c}</span>
            </li>
          ))}
        </ul>

        <h2 className="title" style={{ marginBlockStart: 'var(--space-12)' }}>Type</h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', marginBlockStart: 'var(--space-4)' }}>
          {roles.map(([name, cls, text]) => (
            <div key={name}>
              <span className="mono-label muted">{name}</span>
              <p className={cls}>{text}</p>
            </div>
          ))}
        </div>

        <h2 className="title" style={{ marginBlockStart: 'var(--space-12)' }}>Spacing</h2>
        <ul style={{ marginBlockStart: 'var(--space-4)', display: 'grid', gap: 'var(--space-1)' }}>
          {spaces.map((s) => (
            <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span className="mono-caption" style={{ minInlineSize: '10ch' }}>--space-{s}</span>
              <span style={{ inlineSize: `var(--space-${s})`, blockSize: 'var(--space-2)', background: 'var(--color-accent)' }} />
            </li>
          ))}
        </ul>

        <h2 className="title" style={{ marginBlockStart: 'var(--space-12)' }}>12-column grid</h2>
        <div className="grid-12" style={{ marginBlockStart: 'var(--space-4)' }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="mono-caption" style={{ background: 'var(--color-surface)', border: 'var(--line-hair) solid var(--color-border)', padding: 'var(--space-2) 0', textAlign: 'center' }}>{i + 1}</div>
          ))}
        </div>

        <h2 className="title" style={{ marginBlockStart: 'var(--space-12)' }}>Photos and focus</h2>
        <div className="grid-12" style={{ marginBlockStart: 'var(--space-4)', rowGap: 'var(--space-4)' }}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <a key={n} href="#main" className="on-photo" style={{ gridColumn: 'span 4' }} aria-label={`Photo ${n}`}>
              <img src={`/images/photo-${n}.jpg`} alt="" width="400" height="300" loading="lazy" style={{ inlineSize: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} />
            </a>
          ))}
        </div>
        <p className="body-small" style={{ marginBlockStart: 'var(--space-6)' }}>
          <button type="button" style={{ background: 'var(--color-accent)', color: 'var(--color-on-accent)', border: 0, minBlockSize: '44px', paddingInline: 'var(--space-6)' }} className="mono-ui">Tab to me</button>
        </p>
      </main>
    </>
  )
}
