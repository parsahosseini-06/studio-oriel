import { header } from '../../content/en/shell.js'
import { goToAnchor } from './anchorNav.js'
import Button from './Button.jsx'
import CoordLabel from './CoordLabel.jsx'
import IndexDisclosure from './IndexDisclosure.jsx'
import './Header.css'

export default function Header() {
  const { wordmark, anchors, cta, indexButton, navLabel } = header
  return (
    <header className="site-header" id="site-header">
      <div className="wrap hdr">
        <a className="wordmark" href="#hero" onClick={goToAnchor}>
          {wordmark}
        </a>
        <CoordLabel initial="01 / Intro" />
        <nav className="nav" aria-label={navLabel}>
          <ul className="nav-links">
            {anchors.map((a) => (
              <li key={a.href}>
                <a className="mono-caption" href={a.href} onClick={goToAnchor}>
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
          <IndexDisclosure label={indexButton} links={anchors} />
          <Button className="cta" href={cta.href} aria-label={cta.label} onClick={goToAnchor}>
            <span className="cta__long">{cta.label}</span>
            <span className="cta__short" aria-hidden="true">
              {cta.shortLabel}
            </span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
