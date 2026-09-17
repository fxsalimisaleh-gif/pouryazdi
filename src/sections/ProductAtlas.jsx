import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localize, cx } from '../lib/utils'
import { categories, categoryLabel } from '../data/categories'
import { products } from '../data/products'

const ease = [0.22, 1, 0.36, 1]

export default function ProductAtlas({ sectionNumber = null }) {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState(categories[0].id)

  const activeProduct = products.find((p) => p.category === active) || products[0]

  return (
    <section id="products" className="bg-paper py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm text-gold-dark">{sectionNumber && `${sectionNumber} — `}{t.discovery.eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-6xl">
              {t.discovery.heading}
            </h2>
          </div>
          <Button to="/products" variant="text" className="text-ink shrink-0">
            {t.discovery.all}
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <ol className="flex flex-col lg:col-span-5">
            {categories.map((c, i) => {
              const isActive = active === c.id
              return (
                <li key={c.id} className="border-t border-ink/15 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(c.id)}
                    onFocus={() => setActive(c.id)}
                    onClick={() => setActive(c.id)}
                    aria-pressed={isActive}
                    className={cx(
                      'flex w-full items-baseline gap-5 py-5 text-start transition-colors duration-300 ease-editorial',
                      isActive ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
                    )}
                  >
                    <span className="font-display text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-2xl leading-tight sm:text-3xl">
                      {categoryLabel(c.id, lang)}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease }}
                className="flex flex-col gap-6"
              >
                <Link to={`/products/${activeProduct.id}`} className="group relative block aspect-[4/3] overflow-hidden bg-cream/40">
                  <img
                    src={activeProduct.image}
                    alt={localize(activeProduct.name, lang)}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </Link>
                <div>
                  <h3 className="font-display text-2xl text-ink">{localize(activeProduct.name, lang)}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">
                    {localize(activeProduct.descriptor, lang)}
                  </p>
                </div>
                <Button to={`/products/${activeProduct.id}`} variant="text" className="text-ink self-start">
                  {t.discovery.viewProduct}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
