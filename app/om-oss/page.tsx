import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Om oss | Brannkonsult AS',
  description: 'Brannkonsult AS er et sentralt godkjent brannprosjekteringsfirma med over ti års erfaring i Stavanger og Rogaland.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/om-oss' },
}

export default function OmOssPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Om oss</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Din brannrådgiver i Stavanger og Rogaland</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              Sentralt godkjent foretak med over ti års erfaring. Over 1 200 prosjekter gjennomført — alltid med fastpris og nøytral rådgivning.
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <h2 className="text-brand-black text-3xl font-black mb-6">Lokal kunnskap om Stavanger</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Stavanger er en internasjonal by med stor aktivitet innen bygg og eiendom — fra historisk trehusbebyggelse i Gamle Stavanger til moderne næringsbygg og boligprosjekter i Forus og Hundvåg. Vi leverer brannkonsept og brannprosjektering til private, næringsaktører og kommunale etater i hele Rogaland.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-6">
                Siden 2013 har vi vært involvert i over 1 200 brannprosjekter. Vi er en nøytral rådgiver — vi selger ingen produkter.
              </p>
              <ul className="space-y-3">
                {['Fastpris alltid', 'Levering 5–10 virkedager', 'Nøytral rådgiver', 'Hele Rogaland og landet'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-brand-orange shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={100}>
              <div className="relative rounded-[30px] overflow-hidden h-80 lg:h-96">
                <Image src="/images/Om-oss.jpg" alt="Brannkonsult AS team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '2013', label: 'Etablert' },
                { number: '1200+', label: 'Prosjekter' },
                { number: 'TKL 1+2', label: 'Sentralt godkjent' },
                { number: '5', label: 'Brannrådgivere' },
              ].map((stat, i) => (
                <div key={i} className="bg-brand-dark rounded-[20px] p-6 text-center">
                  <div className="text-brand-orange font-black text-3xl mb-2">{stat.number}</div>
                  <div className="text-brand-white text-sm font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2. Godkjenningen dokumenterer faglig kompetanse, ansvarsforsikring og referanseprosjekter.
              </p>
              <ul className="space-y-3">
                {['Dokumentert faglig kompetanse', 'Ansvarsforsikring i orden', 'Referanseprosjekter godkjent av DiBK', 'Kan påta seg ansvarsrett overfor kommunen'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-brand-orange shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={100}>
              <div className="flex justify-center">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={280} height={280} className="object-contain" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl font-black">Vår prosess</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Kontakt oss', desc: 'Send prosjektbeskrivelse og tegninger.' },
              { step: '2', title: 'Vi sender tilbud', desc: 'Fastpris innen 24 timer.' },
              { step: '3', title: 'Aksepter', desc: 'Skriftlig oppdragsbekreftelse.' },
              { step: '4', title: 'Vi prosjekterer', desc: 'Levering innen 5–10 virkedager.' },
              { step: '5', title: 'Dokumentasjon', desc: 'Ferdig til byggesøknaden.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center p-6 bg-brand-white rounded-[20px] border border-brand-gray">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-lg mb-4">{item.step}</div>
                  <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-brand-darkgray text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-10">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white font-bold text-lg">Ta kontakt for gratis og uforpliktende tilbud</p>
          <Link href="/kontakt-oss" className="border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all whitespace-nowrap">
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
