import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localize, cx } from '../lib/utils'
import { products } from '../data/products'
import { categories, categoryLabel } from '../data/categories'
import ProductCard from './ProductCard.jsx'

export default function ProductExplorer({ limit, initialCategory = 'all' }) {
  const { lang, t } = useLanguage()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filtered = useMemo(() => {
    let list = products
    if (activeCategory !== 'all') list = list.filter((p) => p.category === activeCategory)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => {
        const name = localize(p.name, lang).toLowerCase()
        const desc = localize(p.descriptor, lang).toLowerCase()
        return name.includes(q) || desc.includes(q)
      })
    }
    return limit ? list.slice(0, limit) : list
  }, [activeCategory, query, lang, limit])

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-6 md:flex-row md:items-end md:justify-between">
        <div
          className="flex w-full max-w-sm items-center gap-3 border-b border-ink/20 pb-2 focus-within:border-ink"
        >
          <Search size={16} className="shrink-0 text-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.discovery.searchPlaceholder}
            aria-label={t.discovery.searchPlaceholder}
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          />
        </div>
        <div
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          role="tablist"
          aria-label={t.discovery.heading}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={cx(
              'border-b-2 pb-1 font-medium transition-colors duration-200',
              activeCategory === 'all' ? 'border-forest text-ink' : 'border-transparent text-ink/50 hover:text-ink'
            )}
          >
            {t.discovery.all}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === c.id}
              onClick={() => setActiveCategory(c.id)}
              className={cx(
                'border-b-2 pb-1 font-medium transition-colors duration-200',
                activeCategory === c.id ? 'border-forest text-ink' : 'border-transparent text-ink/50 hover:text-ink'
              )}
            >
              {categoryLabel(c.id, lang)}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs uppercase tracking-wide text-ink/40">
        {filtered.length} {t.discovery.resultsLabel}
      </p>

      {filtered.length === 0 ? (
        <p className="border border-ink/10 bg-cream/30 px-6 py-10 text-center text-sm text-ink/60">
          {t.discovery.noResults}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
