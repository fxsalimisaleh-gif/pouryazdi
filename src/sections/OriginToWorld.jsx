import { motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const ease = [0.22, 1, 0.36, 1]

const STEPS = [
  { key: 'origin', image: '/images/heritage/heritage-ledger.jpg' },
  { key: 'product', image: '/images/products/infant-formula-makan.jpg' },
  { key: 'quality', image: '/images/products/coffee-ground-coffee.jpg' },
  { key: 'supply', image: '/images/products/juice-pineapple-khoshava.jpg' },
]

export default function OriginToWorld({ sectionNumber = null }) {
  const { t } = useLanguage()
  const copy = t.journey

  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 border-b border-paper/15 pb-10">
          <p className="font-display text-sm text-gold">{sectionNumber && `${sectionNumber} — `}{copy.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl">
            {copy.heading}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-ink"
            >
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative p-6">
                <span className="font-display text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-2xl leading-tight">{copy.steps[step.key].title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-paper/70">
                  {copy.steps[step.key].body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-display text-xl italic text-cream sm:text-2xl">{copy.closing}</p>
      </Container>
    </section>
  )
}
