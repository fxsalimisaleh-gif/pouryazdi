import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function FinalStatement({ sectionNumber = null }) {
  const { t } = useLanguage()

  return (
    <section className="bg-forest-dark py-28 text-paper sm:py-36">
      <Container className="flex flex-col items-start gap-10">
        <p className="font-display text-sm text-gold">{sectionNumber && `${sectionNumber} — `}{t.finalStatement.eyebrow}</p>
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl lg:text-7xl">
          {t.finalStatement.heading}
        </h2>
        <Button to="/contact" variant="solidLight">
          {t.nav.cta}
        </Button>
      </Container>
    </section>
  )
}
