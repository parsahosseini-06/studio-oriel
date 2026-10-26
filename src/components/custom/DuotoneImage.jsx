import './DuotoneImage.css'

// Greyscale + contrast + multiply on --color-photo-base (DNA section 8).
// `alt` is required ("" only for a purely decorative image). `children` is the linework overlay slot, drawn above the photo.
// Crop inputs: zoom (scale), originX/originY (percent), objectPosition.
export default function DuotoneImage({
  src,
  alt,
  width,
  height,
  ratio,
  priority = false,
  zoom,
  originX,
  originY,
  objectPosition,
  className = '',
  children,
}) {
  if (alt === undefined && import.meta.env.DEV) console.error('DuotoneImage: alt is required', src)
  const style = {}
  if (ratio) style.aspectRatio = ratio
  if (zoom) style['--zoom'] = zoom
  if (originX) style['--ox'] = originX
  if (originY) style['--oy'] = originY
  if (objectPosition) style['--pos'] = objectPosition
  return (
    <div className={`duo ${className}`.trim()} style={style}>
      <img
        src={src}
        alt={alt ?? ''}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
      {children && <div className="duo__overlay">{children}</div>}
    </div>
  )
}
