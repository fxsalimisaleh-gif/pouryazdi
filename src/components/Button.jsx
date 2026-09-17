import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cx } from '../lib/utils'
import { useLanguage } from '../context/LanguageContext.jsx'

const base =
  'group relative inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 ease-editorial'

const variants = {
  // Solid: used once per view at most — the single strongest action
  solid: 'bg-ink text-paper px-7 py-3.5 hover:bg-forest',
  solidLight: 'bg-paper text-ink px-7 py-3.5 hover:bg-cream',
  // Line: border reveal, no fill — the everyday secondary action
  line: 'border border-current px-7 py-3.5',
  // Text: underline-reveal link, used inline / in navigation
  text: 'py-1',
}

function Arrow({ variant, isRtl }) {
  return (
    <ArrowUpRight
      size={variant === 'text' ? 14 : 16}
      className={cx(
        'transition-transform duration-300 ease-editorial',
        'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
        isRtl && 'rotate-90 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5'
      )}
    />
  )
}

const Button = forwardRef(function Button(
  { as = 'button', to, href, variant = 'line', className, children, ...props },
  ref
) {
  const { isRtl } = useLanguage()
  const classes = cx(base, variants[variant], className)

  const content = (
    <>
      <span
        className={cx(
          variant === 'text' &&
            'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-300 ease-editorial group-hover:bg-[length:100%_1px] pb-0.5'
        )}
      >
        {children}
      </span>
      <Arrow variant={variant} isRtl={isRtl} />
    </>
  )

  if (to) {
    return (
      <Link to={to} ref={ref} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} ref={ref} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  )
})

export default Button
