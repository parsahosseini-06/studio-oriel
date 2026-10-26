import { footer } from '../../content/en/shell.js'
import TextLink from './TextLink.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="wrap foot">
        <p className="foot__wm mono-ui">{footer.wordmark}</p>
        <div className="foot__text mono-caption">
          <p className="foot__notice">{footer.notice}</p>
          <p>{footer.detail}</p>
        </div>
        <div className="foot__links mono-caption">
          <span className="muted">{footer.credits}</span>
          <TextLink href={footer.press.href}>{footer.press.label}</TextLink>
          <TextLink href={footer.general.href}>{footer.general.label}</TextLink>
        </div>
      </div>
    </footer>
  )
}
