import { header } from '../../content/en/shell.js'

// First tab stop. Style (.skip) lives in globals.css.
export default function SkipLink({ target = 'main' }) {
  return (
    <a className="skip" href={`#${target}`}>
      {header.skipLink}
    </a>
  )
}
