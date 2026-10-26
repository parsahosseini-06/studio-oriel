import './Panel.css'

// Surface for every paragraph, form and sentence list. Text measure is capped at 40ch.
export default function Panel({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`panel ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
