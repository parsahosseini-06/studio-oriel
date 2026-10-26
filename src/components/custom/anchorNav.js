// In-page anchor behaviour: scroll (smooth via CSS, instant under reduced motion), update hash, move focus to the heading.
function focusTarget(el) {
  const heading = el.matches('h1,h2,h3') ? el : el.querySelector('h1,h2,h3') || el
  if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1')
  heading.focus({ preventScroll: true })
}

export function goToAnchor(event, afterNavigate) {
  const href = event.currentTarget.getAttribute('href')
  if (!href || !href.startsWith('#')) return
  const id = href.slice(1)
  const target = id && document.getElementById(id)
  if (!target) return
  event.preventDefault()
  if (afterNavigate) afterNavigate()
  target.scrollIntoView({ block: 'start' })
  history.replaceState(null, '', `#${id}`)
  if (id === 'hero') document.getElementById('main')?.focus({ preventScroll: true })
  else focusTarget(target)
}
