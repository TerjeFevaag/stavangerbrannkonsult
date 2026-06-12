import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Forebygg pipebrann med enkle grep | Stavanger Brannkonsult',
  description: 'Er du i faresonen for pipebrann? Vi forklarer hva som forårsaker den og hva du kan gjøre for å forebygge den.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/artikler/pipebrann' },
}

export default function PipebrannPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Artikkel</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-5xl leading-tight">Forebygg pipebrann med enkle grep</h1>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-pipebrann.jpg" alt="Pipebrann" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              En pipebrann er en av de vanligste brannårsakene i norske boliger. Heldigvis er den i stor grad forebyggbart med enkle tiltak.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva er en pipebrann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              En pipebrann oppstår når sotavleiringer inne i skorsteinen antennes. Sot er resultatet av ufullstendig forbrenning — veden brenner ikke helt opp og restproduktene legger seg inne i røykkanalen. Når sotlaget blir tykt nok og temperaturen høy nok, kan det ta fyr ved svært høye temperaturer — opp mot 1000 grader.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva forårsaker pipebrann?</h2>
            <ul className="list-none space-y-3 mb-8">
              {['Fuktig eller usesongert ved', 'For lav temperatur i ovnen', 'Brenning av avfall eller trykt papir', 'For sjelden feiing', 'Dårlig trekk i pipa'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Slik forebygger du pipebrann</h2>
            <div className="space-y-5 mb-10">
              {[
                { title: 'Fyr med tørr, sesongert ved', desc: 'Veden bør ha maksimalt 20 % fuktighet. Kjøp ved i god tid og la den tørke under tak.' },
                { title: 'Sørg for god lufttilgang', desc: 'Start med åpen spjeld. En varm forbrenning er en ren forbrenning — unngå å dempe flammene ved å stenge luften.' },
                { title: 'Bestill feiing regelmessig', desc: 'Feieren er din viktigste allierte mot pipebrann. Kommunal feiing er lovpålagt.' },
                { title: 'Sjekk pipa og ildstedet', desc: 'Se etter sprekker i mur og løse fuger. En skadet pipe kan spre brann til taket.' },
                { title: 'Ikke brenn avfall i ovnen', desc: 'Plast, papp og trykt papir gir kraftig sotdannelse og farlige temperaturer.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-bold text-brand-black text-lg mb-1">{item.title}</h3>
                  <p className="text-brand-darkgray">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Trenger du hjelp med brannsikkerhet?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">Stavanger Brannkonsult hjelper privatpersoner og utbyggere med brannprosjektering i Stavanger og Rogaland.</p>
              <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
