// Replaces the "→" glyph, which neither font has. Stroke matches the TextLink underline (1 px at 16 px).
export default function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={`arrow-icon ${className}`.trim()}
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  )
}
