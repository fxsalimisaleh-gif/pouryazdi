import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localize } from '../lib/utils'
import { products } from '../data/products'

const initialForm = { name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', message: '' }

export default function BusinessInquiry({ sectionNumber = null }) {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Frontend-only preview: no data leaves the browser. A submit handler can
    // POST to a trade-inquiry endpoint here once a backend exists.
    setSubmitted(true)
  }

  const fields = t.inquiry.fields

  return (
    <section id="inquiry" className="bg-ink py-24 text-paper sm:py-32">
      <Container className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-sm text-gold">{sectionNumber && `${sectionNumber} — `}{t.inquiry.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.98] tracking-tightest sm:text-6xl">
            {t.inquiry.heading}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">{t.inquiry.subheading}</p>
        </div>

        <div className="md:col-span-8">
          {submitted ? (
            <div className="flex items-start gap-4 border border-paper/20 p-8">
              <CheckCircle2 className="mt-0.5 shrink-0 text-bright" size={28} />
              <p className="text-base leading-relaxed text-paper/90">{t.inquiry.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
              <Field label={fields.name} name="name" value={form.name} onChange={handleChange} required />
              <Field label={fields.company} name="company" value={form.company} onChange={handleChange} required />
              <Field label={fields.email} name="email" type="email" value={form.email} onChange={handleChange} required />
              <Field label={fields.phone} name="phone" type="tel" value={form.phone} onChange={handleChange} />
              <Field label={fields.country} name="country" value={form.country} onChange={handleChange} required />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="product" className="text-xs uppercase tracking-wide text-paper/50">
                  {fields.product}
                </label>
                <select
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="border-b border-paper/25 bg-transparent py-2 text-base text-paper focus:border-cream focus:outline-none"
                >
                  <option value="" className="text-ink">—</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id} className="text-ink">
                      {localize(p.name, lang)}
                    </option>
                  ))}
                </select>
              </div>
              <Field label={fields.quantity} name="quantity" value={form.quantity} onChange={handleChange} />
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wide text-paper/50">
                  {fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="border-b border-paper/25 bg-transparent py-2 text-base text-paper placeholder:text-paper/30 focus:border-cream focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-4 pt-4 sm:col-span-2">
                <Button type="submit" variant="solidLight" className="w-fit">
                  {t.inquiry.submit}
                </Button>
                <p className="text-xs text-paper/40">{t.inquiry.note}</p>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs uppercase tracking-wide text-paper/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="border-b border-paper/25 bg-transparent py-2 text-base text-paper placeholder:text-paper/30 focus:border-cream focus:outline-none"
      />
    </div>
  )
}
