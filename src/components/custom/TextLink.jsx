import './TextLink.css'

// Ink text, accent underline. `mono` switches to the mono-ui role. Disabled: muted, no underline.
export default function TextLink({ href, mono = false, disabled = false, className = '', children, onClick, ...rest }) {
  const classes = `tlink${mono ? ' mono-ui' : ''} ${className}`.trim()
  return (
    <a
      className={classes}
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      {...rest}
    >
      {children}
    </a>
  )
}
