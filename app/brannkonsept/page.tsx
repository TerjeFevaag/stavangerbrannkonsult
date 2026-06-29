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
    { '@type': 'ListItem', position: 2, name: 'Brannkonsept', item: 'https://www.stavangerbrannkonsult.no/brannkonsept' },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brannkonsept',
  description: 'Utarbeidelse av brannkonsept for byggesaker i Stavanger og Rogaland. Sentralt godkjent foretak. Fastpris fra kr 15 000 ekskl. mva.',
  url: 'https://www.stavangerbrannkonsult.no/brannkonsept',
  provider: { '@type': 'LocalBusiness', name: 'Stavanger Brannkonsult AS', url: 'https://www.stavangerbrannkonsult.no' },
  areaServed: ['Stavanger', 'Sandnes', 'Sola', 'Randaberg', 'Rogaland'],
  offers: { '@type': 'Offer', priceCurrency: 'NOK', price: '15000', priceSpecification: { '@type': 'PriceSpecification', minPrice: '15000', priceCurrency: 'NOK', description: 'Fra kr 15 000 ekskl. mva. for tiltaksklasse 2' } },
}

export const metadata: Metadata = {
  title: 'Brannkonsept Stavanger – Sentralt godkjent | Brannkonsult AS',
  description: 'Trenger du brannkonsept til byggesøknaden? Vi leverer for tilbygg, nybygg og bruksendring i Stavanger, Sandnes og Rogaland. Fastpris fra kr 15 000. Svar innen 24 timer.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva er et brannkonsept?',
    answer: 'Et brannkonsept er en helhetlig plan for brannsikkerheten i et bygg. Det beskriver hvilke branntekniske tiltak som er valgt og dokumenterer at bygget oppfyller sikkerhetskravene i TEK17.',
  },
  {
    question: 'Når trenger jeg et brannkonsept?',
    answer: 'Det kreves brannkonsept ved de fleste søknadspliktige byggesaker — inkludert nybygg, tilbygg, bruksendring og rehabilitering. Ta kontakt for å avklare om ditt prosjekt er søknadspliktig.',
  },
  {
    question: 'Hva koster et brannkonsept i Stavanger?',
    answer: 'Vi tilbyr alltid fastpris. Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva. Kontakt oss for et konkret tilbud.',
  },
  {
    question: 'Leverer dere til Stavanger kommune?',
    answer: 'Ja, vi har god erfaring med kravene i Stavanger kommune og leverer dokumentasjon tilpasset kommunens byggesaksavdeling. Vi tar også oppdrag i hele Rogaland.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {/* Page header — left orange border */}
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Tjenester</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Brannkonsept</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              Kommunen krever et brannkonsept ved de fleste søknadspliktige byggesaker i Stavanger. Vi utarbeider helhetlige brannkonsept til fastpris.
            </p>
          </div>
        </div>
      </section>

      {/* Main 70/30 content */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inkluderer brannkonseptet?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-5">
                  Et brannkonsept er et strategidokument for brannsikkerhet i byggeprosjektet. Det tar stilling til bærende prinsipper: risikoklasse, brannklasse, bæreevne ved brann, branncelleinndeling, røykventilasjon, rømning og slokkesystem.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Risikoklasse og brannklasse',
                    'Branncelleinndeling og seksjonering',
                    'Rømningsveier og nødutganger',
                    'Bærende konstruksjoner',
                    'Røykventilasjon',
                    'Slokkesystem',
                    'Dokumentasjon til byggesøknaden',
                    'Støtte mot kommunens saksbehandler',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                      <span className="text-brand-darkgray">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik jobber vi</h2>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'Gratis vurdering', desc: 'Vi vurderer prosjektet og gir fastpris uten forpliktelser.' },
                    { step: '02', title: 'Prosjektering', desc: 'Vi utarbeider brannkonseptet basert på tegninger og prosjektbeskrivelse.' },
                    { step: '03', title: 'Leveranse', desc: 'Ferdig brannkonsept klart til byggesøknad, vanligvis innen 5–10 virkedager.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 items-start bg-brand-white rounded-[20px] p-6 border border-brand-gray">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-sm">{item.step}</div>
                      <div>
                        <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                        <p className="text-brand-darkgray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-5">Vanlige spørsmål</h2>
                <div className="bg-brand-white rounded-[20px] p-6 border border-brand-gray">
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={100} className="sticky top-28 space-y-6">
                <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                  <h3 className="font-black text-xl mb-4">Få et uforpliktende tilbud</h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-6">
                    Send oss prosjektbeskrivelse og tegninger. Vi svarer med fastpris innen 24 timer.
                  </p>
                  <Link href="/kontakt-oss" className="block w-full bg-brand-orange text-brand-white font-bold px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity text-center mb-6">
                    Kontakt oss
                  </Link>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-brand-orange shrink-0" />
                      <span className="text-brand-white/70">Fastpris alltid</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-brand-orange shrink-0" />
                      <span className="text-brand-white/70">Sentralt godkjent TKL 1+2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-brand-orange shrink-0" />
                      <span className="text-brand-white/70">Levering 5–10 virkedager</span>
                    </div>
                  </div>
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

      {/* Bottom CTA bar */}
      <section className="bg-brand-orange py-10">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white font-bold text-lg">Trenger du brannkonsept i Stavanger?</p>
          <Link href="/kontakt-oss" className="border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all whitespace-nowrap">
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
