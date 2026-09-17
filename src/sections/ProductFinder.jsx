import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { industries, categories, categoryLabel } from '../data/categories'
import { products } from '../data/products'
import { cx } from '../lib/utils'

const ease = [0.22, 1, 0.36, 1]

export default function ProductFinder() {
  const { t, lang } = useLanguage()
  const [industry, setIndustry] = useState(null)
  const [category, setCategory] = useState(null)

  const availableCategories = industry ? categories.filter((c) => industry.categories.includes(c.id)) : []
  const results = category ? products.filter((p) => p.category === category) : []

  function reset() {
    setIndustry(null)
    setCategory(null)
  }

  return (
    <section className="bg-cream/40 py-24 sm:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm text-gold-dark">{t.finder.eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              {t.finder.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/60">{t.finder.subheading}</p>
          </div>
          {(industry || category) && (
            <Button type="button" onClick={reset} variant="text" className="text-ink shrink-0">
              {t.finder.reset}
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-wide text-ink/40">01 — {t.finder.step1}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => {
                  setIndustry(ind)
                  setCategory(null)
                }}
                className={cx(
                  'border-b pb-1 text-sm font-medium transition-colors duration-200',
                  industry?.id === ind.id
                    ? 'border-forest text-ink'
                    : 'border-transparent text-ink/50 hover:border-ink/30 hover:text-ink'
                )}
              >
                {t.finder.industries[ind.id]}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {industry && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease }}
              className="flex flex-col gap-3 overflow-hidden"
            >
              <p className="text-xs uppercase tracking-wide text-ink/40">02 — {t.finder.step2}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {availableCategories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className={cx(
                      'border-b pb-1 text-sm font-medium transition-colors duration-200',
                      category === c.id
                        ? 'border-forest text-ink'
                        : 'border-transparent text-ink/50 hover:border-ink/30 hover:text-ink'
                    )}
                  >
                    {categoryLabel(c.id, lang)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {category && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs uppercase tracking-wide text-ink/40">03 — {t.finder.step3}</p>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
