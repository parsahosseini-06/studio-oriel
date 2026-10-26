import { lazy, Suspense } from 'react'
import SkipLink from './components/custom/SkipLink.jsx'
import Header from './components/custom/Header.jsx'
import Footer from './components/custom/Footer.jsx'
import { sections } from './content/en/shell.js'
import './App.css'

// Dev-only component review. import.meta.env.DEV is false in the production build, so the chunk is dropped.
const Kit = import.meta.env.DEV ? lazy(() => import('./dev/Kit.jsx')) : null

// PHASE 8 PLACEHOLDERS: headings below are stand-ins, real copy comes from src/content in Phase 8.
const placeholders = {
  hero: { level: 1, text: 'Notes toward a quieter building.' },
  work: { level: 2, text: 'Work' },
  services: { level: 2, text: 'What we do' },
  philosophy: { level: 2, text: 'Begin with the window, end with the street.' },
  contact: { level: 2, text: 'Start a conversation' },
}

function Placeholder({ id, sec }) {
  const { level, text } = placeholders[id]
  const Heading = `h${level}`
  return (
    <section className="section phase8" id={id} aria-labelledby={`${id}-title`} data-sec={sec}>
      <div className="wrap">
        <p className="mono-label phase8__tag">{sec} · Phase 8 placeholder</p>
        <Heading className={level === 1 ? undefined : 'heading'} id={`${id}-title`} tabIndex={-1}>
          {text}
        </Heading>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1}>
        {sections.map((s) => (
          <Placeholder key={s.id} id={s.id} sec={s.sec} />
        ))}
        {Kit && (
          <Suspense fallback={null}>
            <Kit />
          </Suspense>
        )}
      </main>
      <Footer />
    </>
  )
}
