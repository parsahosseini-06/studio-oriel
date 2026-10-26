import { useEffect, useRef, useState } from 'react'
import { goToAnchor } from './anchorNav.js'
import './IndexDisclosure.css'

// Below 768 px: "Index" button (44x44 min) that opens a full-width list of anchors.
// The panel stays mounted; it opens with translateY + opacity (CSS), never height. Esc closes and returns focus to the button.
export default function IndexDisclosure({ label, links }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const panelId = 'index-panel'

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    // the button and panel disappear at 768, so close the state with them
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <button
        ref={buttonRef}
        className="index-btn mono-caption"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <i aria-hidden="true" />
        {label}
      </button>
      <div className={`index-panel${open ? ' index-panel--open' : ''}`} id={panelId}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a className="mono-caption" href={l.href} onClick={(e) => goToAnchor(e, () => setOpen(false))}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
