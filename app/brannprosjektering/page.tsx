import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.stavangerbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannprosjektering', item: 'https://www.stavangerbrannkonsult.no/brannprosjektering' },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brannprosjektering',
  description: 'Brannprosjektering for tilbygg, nybygg og bruksendring i Stavanger og Rogaland. Sentralt godkjent foretak. Fastpris fra kr 15 000 ekskl. mva.',
  url: 'https://www.stavangerbrannkonsult.no/brannprosjektering',
  provider: { '@type': 'LocalBusiness', name: 'Stavanger Brannkonsult AS', url: 'https://www.stavangerbrannkonsult.no' },
  areaServed: ['Stavanger', 'Sandnes', 'Sola', 'Randaberg', 'Rogaland'],
  offers: { '@type': 'Offer', priceCurrency: 'NOK', price: '15000', priceSpecification: { '@type': 'PriceSpecification', minPrice: '15000', priceCurrency: 'NOK', description: 'Fra kr 15 000 ekskl. mva. for tiltaksklasse 2' } },
}

export const metadata: Metadata = {
  title: 'Brannprosjektering Stavanger | Stavanger Brannkonsult',
  description: 'Brannprosjektering i Stavanger og Rogaland. Sentralt godkjent foretak med fastpris. Vi hjelper deg med alle typer byggesaker.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Stavanger?',
    answer: 'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg?',
    answer: 'Ja, de fleste søknadspliktige tiltak krever brannprosjektering — tilbygg, bruksendring, ny boenhet og rehabilitering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere tilbygg er det som regel ikke nødvendig. Digitale tegninger er ofte tilstrekkelig.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer: 'Nei — vi er en nøytral rådgiver og selger ingen produkter.',
  },
  {
    question: 'Hva trenger dere for pristilbud?',
    answer: 'Adresse, plantegninger og en kort prosjektbeskrivelse. Vi svarer med fastpris innen 24 timer.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Tjenester</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Brannprosjektering</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet i Stavanger og Rogaland. Fastpris alltid.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {['Tilbygg og påbygg', 'Ny boenhet', 'Bruksendring', 'Rehabilitering', 'Nybygg', 'Garasje tiltaksklasse 2', 'Næringsbygg', 'Sammenbygging'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-brand-orange shrink-0" />
                      <span className="text-brand-darkgray">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasser og brannklasser</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-white rounded-[20px] p-6 border border-brand-gray">
                    <h3 className="font-bold text-brand-black text-lg mb-3">Risikoklasser (RKL 1–6)</h3>
                    <ul className="space-y-2 text-sm text-brand-darkgray">
                      <li><strong>RKL 1:</strong> Kjente rømningsveier</li>
                      <li><strong>RKL 2:</strong> Boliger</li>
                      <li><strong>RKL 3:</strong> Leilighetsbygg, kontorer</li>
                      <li><strong>RKL 4:</strong> Butikker, hoteller</li>
                      <li><strong>RKL 5:</strong> Sykehus</li>
                      <li><strong>RKL 6:</strong> Industri og lager</li>
                    </ul>
                  </div>
                  <div className="bg-brand-white rounded-[20px] p-6 border border-brand-gray">
                    <h3 className="font-bold text-brand-black text-lg mb-3">Brannklasser (BKL 1–4)</h3>
                    <ul className="space-y-2 text-sm text-brand-darkgray">
                      <li><strong>BKL 1:</strong> Inntil 2 etasjer</li>
                      <li><strong>BKL 2:</strong> Inntil 4 etasjer</li>
                      <li><strong>BKL 3:</strong> Inntil 8 etasjer</li>
                      <li><strong>BKL 4:</strong> Over 8 etasjer</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Område vi betjener</h2>
                <p className="text-brand-darkgray leading-relaxed">
                  Vi leverer brannprosjektering i Stavanger, Sandnes, Sola, Randaberg og hele Rogaland — og tar oppdrag over hele landet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-5">Vanlige spørsmål</h2>
                <div className="bg-brand-white rounded-[20px] p-6 border border-brand-gray">
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal delay={100} className="sticky top-28 space-y-6">
                <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                  <h3 className="font-black text-xl mb-4">Be om tilbud</h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-6">Send tegninger og prosjektbeskrivelse — vi svarer med fastpris innen 24 timer.</p>
                  <Link href="/kontakt-oss" className="block w-full bg-brand-orange text-brand-white font-bold px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity text-center">
                    Kontakt oss
                  </Link>
                </div>
                <div className="bg-brand-white rounded-[30px] p-6 border border-brand-gray flex flex-col items-center text-center">
                  <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent DiBK tiltaksklasse 1 og 2" width={80} height={80} className="object-contain mb-3" />
                  <p className="text-brand-darkgray text-xs leading-relaxed">Sentralt godkjent foretak for brannprosjektering i tiltaksklasse 1 og 2</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-10">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white font-bold text-lg">Be om tilbud på brannprosjektering i Stavanger</p>
          <Link href="/kontakt-oss" className="border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all whitespace-nowrap">
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
