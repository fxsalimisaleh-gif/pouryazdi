import { cx } from '../lib/utils'

/**
 * Editorial section heading with an optional chapter number ("03") instead
 * of a generic decorative eyebrow on every section — used sparingly so the
 * numbering reads as a narrative device, not template chrome.
 */
export default function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  size = 'lg',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-start'
  const toneClass = tone === 'light' ? 'text-paper' : 'text-ink'
  const subtleClass = tone === 'light' ? 'text-paper/65' : 'text-ink/60'
  const titleSize = size === 'xl' ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'

  return (
    <div className={cx('flex max-w-2xl flex-col gap-4', alignClass, className)}>
      {(number || eyebrow) && (
        <p className={cx('font-display text-sm', tone === 'light' ? 'text-gold' : 'text-gold-dark')}>
          {number && <span>{number} — </span>}
          {eyebrow}
        </p>
      )}
      <h2 className={cx('font-display leading-[1.05] tracking-tightest', titleSize, toneClass)}>
        {title}
      </h2>
      {subtitle && <p className={cx('text-base leading-relaxed sm:text-lg', subtleClass)}>{subtitle}</p>}
    </div>
  )
}
