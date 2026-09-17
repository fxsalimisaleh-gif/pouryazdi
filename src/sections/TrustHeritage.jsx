import { motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function TrustHeritage({ sectionNumber = null }) {
  const { t, isRtl } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col gap-4">
        <p className="font-display text-sm text-gold-dark">{sectionNumber && `${sectionNumber} — `}{t.trust.eyebrow}</p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-[30vw] leading-[0.8] tracking-tightest text-forest sm:text-[22vw] lg:text-[16vw]"
        >
          {isRtl ? '٢٥' : '25'}
        </motion.p>

        <div className="grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-12">
          <h2 className="font-display text-3xl leading-[1.08] tracking-tightest text-ink sm:text-4xl md:col-span-5">
            {t.trust.heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg md:col-span-7">
            {t.trust.body}
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {t.trust.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="border-t border-ink/15 pt-5"
            >
              <span className="font-display text-xs text-ink/35">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-lg text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{point.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
