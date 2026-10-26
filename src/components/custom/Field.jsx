import { useId } from 'react'
import './Field.css'

// Input or textarea with a label above and a line that draws under it on focus.
// error: message string (shows icon + text, sets aria-invalid and aria-describedby). help: optional hint. No backend.
export default function Field({ label, name, multiline = false, error, help, disabled = false, className = '', ...rest }) {
  const uid = useId()
  const id = `${uid}-field`
  const helpId = `${uid}-help`
  const errorId = `${uid}-error`
  const describedBy = [help && helpId, error && errorId].filter(Boolean).join(' ')
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className={`field${disabled ? ' field--disabled' : ''} ${className}`.trim()}>
      <label className="mono-caption" htmlFor={id}>
        {label}
      </label>
      <div className="field__ctl">
        <Control
          id={id}
          name={name}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy || undefined}
          rows={multiline ? 5 : undefined}
          {...rest}
        />
        <span className="field__line" aria-hidden="true" />
      </div>
      {help && (
        <p className="field__help body-small" id={helpId}>
          {help}
        </p>
      )}
      <p className="field__error body-small" id={errorId} hidden={!error}>
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="8" cy="8" r="6.2" />
          <path d="M8 4.6V8.6M8 10.9v.1" />
        </svg>
        <span>{error}</span>
      </p>
    </div>
  )
}
