import { useSearchParams } from 'react-router-dom'
import Container from '../components/Container.jsx'
import ProductExplorer from '../components/ProductExplorer.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Products() {
  const { t } = useLanguage()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  return (
    <div className="bg-paper py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="max-w-2xl border-b border-ink/15 pb-10">
          <p className="font-display text-sm text-gold-dark">{t.discovery.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-6xl">
            {t.discovery.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">{t.discovery.subheading}</p>
        </div>
        <ProductExplorer initialCategory={category} key={category} />
      </Container>
    </div>
  )
}
