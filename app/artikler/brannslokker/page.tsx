import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Har du riktig brannslokkeapparat? | Brannkonsult AS',
  description: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/artikler/brannslokker' },
}

export default function BrannslokkePage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Artikkel</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-5xl leading-tight">Har du riktig brannslokkeapparat i boligen?</h1>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-brannslukker.jpg" alt="Brannslokker" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannslokkeapparat kan bety forskjellen mellom et branntilløp og en totalbrann. Men mange vet ikke hvilken type de trenger — eller om det som henger i gangen faktisk er riktig.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til brannslokking i boliger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">Alle boliger skal ha:</p>
            <ul className="list-none space-y-3 mb-8">
              {['Minst én røykvarsler per etasje', 'Slokkeutstyr i eller ved kjøkkenet', 'Pulver-/skumapparat med kapasitet på minst 6 kg/L, eller brannslange tilknyttet vannforsyning'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Pulverapparat vs. skumapparat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Pulverapparat (ABC)</h3>
                <p className="text-sm text-brand-darkgray"><strong>Fordeler:</strong> Effektivt mot klasse A, B og C. Rimelig.</p>
                <p className="text-sm text-brand-darkgray mt-2"><strong>Ulemper:</strong> Ødelegger inventar. Skaper støvsky. Ikke anbefalt ved elektrisk utstyr.</p>
              </div>
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Skumapparat (AFFF)</h3>
                <p className="text-sm text-brand-darkgray"><strong>Fordeler:</strong> Skåner inventar. Effektivt mot klasse A og B. Anbefalt for kjøkken.</p>
                <p className="text-sm text-brand-darkgray mt-2"><strong>Ulemper:</strong> Ikke effektivt mot gass. Noe dyrere.</p>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-10">For de fleste boliger anbefaler vi et 6-liters skumapparat. Plasser det synlig og tilgjengelig ved kjøkkenet.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Trenger du brannprosjektering?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">Brannkonsult AS hjelper deg med brannkonsept og branninspeksjon i Stavanger og Rogaland.</p>
              <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
