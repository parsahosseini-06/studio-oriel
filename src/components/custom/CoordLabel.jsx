import { useEffect, useState } from 'react'
import './CoordLabel.css'

// Mono coordinate line ("01 / Intro"). Sections carry data-sec; an IntersectionObserver picks the one at reading height.
// aria-hidden: the headings already name the sections.
export default function CoordLabel({ initial = '' }) {
  const [label, setLabel] = useState(initial)
  useEffect(() => {
    const sections = document.querySelectorAll('[data-sec]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setLabel(e.target.dataset.sec)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])
  return (
    <span className="coord mono-label" aria-hidden="true">
      {label}
    </span>
  )
}
