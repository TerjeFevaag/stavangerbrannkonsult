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
    { '@type': 'ListItem', position: 2, name: 'Uavhengig kontroll', item: 'https://www.stavangerbrannkonsult.no/uavhengig-kontroll' },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Uavhengig kontroll brann',
  description: 'Uavhengig kontroll av brannkonsept i tiltaksklasse 2 og høyere. Stavanger og Rogaland. Sentralt godkjent foretak.',
  url: 'https://www.stavangerbrannkonsult.no/uavhengig-kontroll',
  provider: { '@type': 'LocalBusiness', name: 'Stavanger Brannkonsult AS', url: 'https://www.stavangerbrannkonsult.no' },
  areaServed: ['Stavanger', 'Sandnes', 'Sola', 'Randaberg', 'Rogaland'],
  // TODO: Legg til offers.price når fra-pris for uavhengig kontroll er bestemt
}

export const metadata: Metadata = {
  title: 'Uavhengig kontroll brann Stavanger | Stavanger Brannkonsult',
  description: 'Uavhengig kontroll av brannkonsept i Stavanger og Rogaland. Sentralt godkjent foretak. Fastpris.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer: 'UK av brann er en faglig gjennomgang av brannkonseptet utført av et foretak uavhengig av den som prosjekterte. Kontrollen sikrer at løsningene er i tråd med TEK17.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll?',
    answer: 'Krav om UK av brann gjelder når brannprosjekteringen er i tiltaksklasse 2 eller høyere, i henhold til SAK10.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer: 'Prisen avhenger av byggets størrelse og tiltaksklasse. Kontakt oss for fastpris.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert?',
    answer: 'Ja, vi tar oppdrag som kontrollerende for brannkonsept vi ikke har utarbeidet selv.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Tjenester</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Uavhengig kontroll</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi gjennomfører kontrollen og utsteder erklæring om ansvarsrett.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva er uavhengig kontroll?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Uavhengig kontroll (UK) av brann er krav i SAK10 for prosjekter der brannprosjekteringen er i tiltaksklasse 2 eller høyere. Kontrollen utføres av et foretak uavhengig av den som utarbeidet brannkonseptet.
                </p>
                <p className="text-brand-darkgray leading-relaxed">
                  Vi er en nøytral part — selger ingen produkter og har ingen tilknytning til leverandører av brannanlegg.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Risikoklasse og brannklasse',
                    'Branncelleinndeling',
                    'Rømningsveier',
                    'Branntekniske løsninger',
                    'Slokkesystem',
                    'Branntegninger vs. brannkonsept',
                    'Avvik fra preaksepterte løsninger',
                    'Ansvarsretterklæringer',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                      <span className="text-brand-darkgray">{item}</span>
                    </li>
                  ))}
                </ul>
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
                  <h3 className="font-black text-xl mb-4">Trenger du UK brann?</h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-3">Kontakt oss for et uforpliktende tilbud. Vi svarer innen 24 timer.</p>
                  {/* TODO: Legg til fra-pris for uavhengig kontroll når dette er bestemt */}
                  <p className="text-brand-orange text-sm font-bold mb-6">Fastpris — kontakt oss for tilbud</p>
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
          <p className="text-brand-white font-bold text-lg">Trenger du uavhengig kontroll i Stavanger?</p>
          <Link href="/kontakt-oss" className="border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all whitespace-nowrap">
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
