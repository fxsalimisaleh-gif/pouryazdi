import Container from '../components/Container.jsx'
import BusinessInquiry from '../sections/BusinessInquiry.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="bg-paper py-24 sm:py-28">
        <Container className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="font-display text-sm text-gold-dark">{t.inquiry.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-6xl">
              {t.inquiry.heading}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              {t.inquiry.subheading}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 border-s border-ink/10 ps-8">
            <p className="text-sm text-ink/70">{t.footer.address}</p>
            <a href="mailto:trade@pouryazdi.com" className="text-sm text-ink/70 hover:text-ink">trade@pouryazdi.com</a>
            <a href="tel:+37400000000" className="text-sm text-ink/70 hover:text-ink">+374 00 000 000</a>
          </div>
        </Container>
      </div>
      <BusinessInquiry />
    </div>
  )
}
