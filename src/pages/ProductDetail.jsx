import { useParams, Link, Navigate } from 'react-router-dom'
import { FileText, ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localize } from '../lib/utils'
import { getProductById, getRelatedProducts, products } from '../data/products'
import { categoryLabel } from '../data/categories'

export default function ProductDetail() {
  const { id } = useParams()
  const { lang, t, isRtl } = useLanguage()
  const product = getProductById(id)

  if (!product) return <Navigate to="/products" replace />

  const related = getRelatedProducts(product)
  const BackIcon = isRtl ? ArrowRight : ArrowLeft
  const indexInCatalog = products.findIndex((p) => p.id === product.id) + 1

  return (
    <div className="bg-paper py-16 sm:py-20">
      <Container className="flex flex-col gap-16">
        <div className="flex items-center justify-between border-b border-ink/15 pb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink">
            <BackIcon size={16} /> {t.productPage.backToProducts}
          </Link>
          <span className="font-display text-sm text-ink/40">
            {String(indexInCatalog).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-cream/40">
              <img src={product.image} alt={localize(product.name, lang)} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-forest">{categoryLabel(product.category, lang)}</p>
              <h1 className="mt-2 font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-5xl">
                {localize(product.name, lang)}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-ink/65">{localize(product.overview, lang)}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-y border-ink/15 py-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40">{t.productPage.packaging}</p>
                <p className="mt-1.5 text-ink/75">{localize(product.packaging, lang)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40">{t.productPage.availability}</p>
                <p className="mt-1.5 text-ink/75">
                  {product.availability === 'in-stock' ? t.common.inStock : t.common.availableOnRequest}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wide text-ink/40">{t.productPage.specifications}</h2>
              <dl className="mt-3 divide-y divide-ink/10">
                {(product.specifications[lang] || product.specifications.en).map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-ink/55">{spec.label}</dt>
                    <dd className="text-end font-medium text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wide text-ink/40">{t.productPage.applications}</h2>
              <ul className="mt-3 flex flex-col gap-1.5">
                {(localize(product.applications, lang) || []).map((app) => (
                  <li key={app} className="text-sm text-ink/70">— {app}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wide text-ink/40">{t.productPage.documents}</h2>
              <div className="mt-3 flex items-center gap-3 border border-dashed border-ink/20 px-4 py-3 text-sm text-ink/50">
                <FileText size={18} />
                <span>{t.catalogs.items[0].note}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 pt-2">
              <Button to="/contact" variant="solid">{t.productPage.requestQuote}</Button>
              <Button as="button" type="button" variant="text" className="cursor-not-allowed text-ink/35" disabled title={t.catalogs.items[0].note}>
                {t.productPage.downloadSheet}
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-ink/15 pt-14">
            <h2 className="font-display text-2xl text-ink">{t.productPage.related}</h2>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
