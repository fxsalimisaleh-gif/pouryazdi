import { motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const ease = [0.22, 1, 0.36, 1]

/** Abstract supply-line graphic — used instead of unverifiable warehouse photography. */
function SupplyDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <g stroke="#F4E5BA" strokeOpacity="0.35" strokeWidth="1">
        <line x1="0" y1="40" x2="400" y2="40" />
        <line x1="0" y1="110" x2="400" y2="110" />
        <line x1="0" y1="180" x2="400" y2="180" />
      </g>
      <path
        d="M10 180 C 100 180, 100 40, 200 40 S 300 110, 390 110"
        fill="none"
        stroke="#D99A56"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      {[
        [10, 180],
        [200, 40],
        [390, 110],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill={i === 1 ? '#D99A56' : '#99CC01'} />
      ))}
      {[...Array(6)].map((_, i) => (
        <rect key={i} x={20 + i * 60} y={195} width="22" height="16" fill="none" stroke="#F4E5BA" strokeOpacity="0.4" />
      ))}
    </svg>
  )
}

export default function QualityDelivery({ sectionNumber = null }) {
  const { t } = useLanguage()

  return (
    <section id="quality" className="bg-forest py-24 text-paper sm:py-32">
      <Container>
        <p className="font-display text-sm text-cream">{sectionNumber && `${sectionNumber} — `}{t.quality.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl">
          {t.quality.heading}
        </h2>

        <div className="mt-16 grid gap-10 border-t border-paper/15 pt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="font-display text-xs text-cream/60">01</span>
            <h3 className="mt-3 font-display text-2xl">{t.quality.qualityTitle}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">{t.quality.qualityBody}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <span className="font-display text-xs text-cream/60">02</span>
            <h3 className="mt-3 font-display text-2xl">{t.quality.deliveryTitle}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">{t.quality.deliveryBody}</p>
          </motion.div>
        </div>

        <div className="mt-14 h-48 border-t border-paper/15 pt-6 sm:h-56">
          <SupplyDiagram />
        </div>
      </Container>
    </section>
  )
}
