import './Button.css'

// Primary button. Renders <a> when href is given. Disabled uses aria-disabled so it stays focusable and announced.
export default function Button({ href, disabled = false, className = '', children, onClick, type = 'button', ...rest }) {
  const classes = `btn mono-ui ${className}`.trim()
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    onClick?.(event)
  }
  if (href) {
    return (
      <a className={classes} href={href} aria-disabled={disabled || undefined} onClick={handleClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} type={type} aria-disabled={disabled || undefined} onClick={handleClick} {...rest}>
      {children}
    </button>
  )
}
