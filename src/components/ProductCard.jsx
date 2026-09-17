import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localize } from '../lib/utils'
import { categoryLabel } from '../data/categories'

/** Editorial product specimen card — numbered, thin rules, no rounded corners or shadow. */
export default function ProductCard({ product, index }) {
  const { lang, t } = useLanguage()
  const name = localize(product.name, lang)
  const descriptor = localize(product.descriptor, lang)

  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col border-t border-ink/15 pt-5 transition-colors duration-300 ease-editorial hover:border-ink/40"
    >
      <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-cream/40">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        {typeof index === 'number' && (
          <span className="font-display text-xs text-ink/35">{String(index + 1).padStart(2, '0')}</span>
        )}
        <span className="text-xs uppercase tracking-wide text-ink/40">
          {categoryLabel(product.category, lang)}
        </span>
      </div>
      <h3 className="mt-2 font-display text-xl leading-snug text-ink">{name}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-ink/55">{descriptor}</p>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {t.discovery.viewProduct}
      </span>
    </Link>
  )
}
