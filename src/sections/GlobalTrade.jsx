import Container from '../components/Container.jsx'
import WorldAtlas from '../map/WorldAtlas.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function GlobalTrade({ sectionNumber = null }) {
  const { t } = useLanguage()

  return (
    <section id="global-trade" className="bg-forest-dark py-24 text-paper sm:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-6 border-b border-paper/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-sm text-gold">{sectionNumber && `${sectionNumber} — `}{t.globalTrade.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl">
              {t.globalTrade.heading}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper/60">{t.globalTrade.subheading}</p>
        </div>

        <WorldAtlas regionCopy={t.globalTrade.regions} heritageLabel={t.globalTrade.origin} />
      </Container>
    </section>
  )
}
