import './SpecList.css'

// items: [{ term, value }]. Renders a description list (place, year, type).
export default function SpecList({ items, className = '' }) {
  return (
    <dl className={`spec ${className}`.trim()}>
      {items.map(({ term, value }) => (
        <div key={term}>
          <dt className="mono-label">{term}</dt>
          <dd className="mono-caption">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
