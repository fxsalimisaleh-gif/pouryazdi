import { motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Heritage() {
  const { t } = useLanguage()

  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-sm text-gold">{t.heritage.eyebrow}</p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.05] tracking-tightest sm:text-5xl">
            {t.heritage.heading}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">{t.heritage.subheading}</p>
          <div className="mt-10 aspect-[4/3] overflow-hidden">
            <img
              src="/images/heritage/heritage-ledger.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-2">
          <ol className="relative flex flex-col gap-10 ps-8">
            <div className="absolute top-1 bottom-1 w-px bg-paper/15 start-[7px]" aria-hidden="true" />
            {t.heritage.timeline.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-ink start-[-32px]" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">{item.label}</p>
                <h3 className="mt-1 font-display text-2xl text-paper">{item.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-paper/65">{item.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
