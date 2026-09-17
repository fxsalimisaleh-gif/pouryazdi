import TrustHeritage from '../sections/TrustHeritage.jsx'
import Heritage from '../sections/Heritage.jsx'
import OriginToWorld from '../sections/OriginToWorld.jsx'
import QualityDelivery from '../sections/QualityDelivery.jsx'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function HeritagePage() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="bg-ink py-24 text-paper sm:py-28">
        <Container>
          <p className="font-display text-sm text-gold">{t.heritage.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl">
            {t.heritage.heading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/65">{t.heritage.subheading}</p>
        </Container>
      </div>
      <TrustHeritage />
      <Heritage />
      <OriginToWorld />
      <QualityDelivery />
    </div>
  )
}
