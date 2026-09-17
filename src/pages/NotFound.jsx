import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="bg-paper py-32">
      <Container className="flex flex-col items-start gap-6">
        <p className="font-display text-sm text-gold-dark">404</p>
        <h1 className="font-display text-4xl text-ink sm:text-6xl">Page not found.</h1>
        <Button to="/" variant="solid">{t.discovery.all}</Button>
      </Container>
    </div>
  )
}
