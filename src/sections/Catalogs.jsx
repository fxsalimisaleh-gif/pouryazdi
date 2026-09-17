import { FileText } from 'lucide-react'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Catalogs({ sectionNumber = null }) {
  const { t } = useLanguage()

  return (
    <section id="catalogs" className="bg-paper py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm text-gold-dark">{sectionNumber && `${sectionNumber} — `}{t.catalogs.eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-6xl">
              {t.catalogs.heading}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55">{t.catalogs.subheading}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {t.catalogs.items.map((doc, i) => (
            <div key={doc.title} className="group flex flex-col">
              <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden border border-ink/15 bg-forest p-6 text-paper transition-colors duration-300 ease-editorial group-hover:border-forest">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(115deg, #F4E5BA 0px, #F4E5BA 1px, transparent 1px, transparent 26px)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between">
                  <span className="font-display text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <FileText size={18} className="text-cream" strokeWidth={1.5} />
                </div>
                <p className="relative font-display text-xl leading-snug">{doc.title}</p>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink/40">
                {doc.type} · {doc.note}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
