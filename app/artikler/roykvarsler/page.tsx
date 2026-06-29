import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Brannkonsult AS',
  description: 'Er du godt nok sikret mot brann om natten? Vi forklarer krav til røykvarslere og riktig plassering i norske boliger.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/artikler/roykvarsler' },
}

export default function RoykVarslerPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Artikkel</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-5xl leading-tight">Riktig røykvarsler redder liv</h1>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-roykvarsler.jpg" alt="Røykvarsler" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              De fleste brannulykker med dødsfall skjer om natten. En fungerende røykvarsler er det viktigste brannverntiltaket — men bare hvis den er riktig type, plassert riktig og vedlikeholdt.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til røykvarslere i norske boliger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Alle boliger skal ha røykvarslere som dekker alle rom der brann kan oppstå. Kravet er minst én per etasje, men varslingen skal høres tydelig fra alle soverom med lukket dør.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Ionisasjon vs. optisk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-2">Ionisasjonsvarsler</h3>
                <p className="text-sm text-brand-darkgray">Reagerer raskt på rask, flammende brann. Best for kjøkken og lager.</p>
              </div>
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-2">Optisk røykvarsler</h3>
                <p className="text-sm text-brand-darkgray">Reagerer raskere på sakte, ulmerbranner. Best for soverom og stue.</p>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-8">For de fleste boliger anbefaler vi optiske røykvarslere — eventuelt kombinert med en ionisasjonsvarsler ved kjøkken.</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Riktig plassering</h2>
            <ul className="list-none space-y-3 mb-8">
              {['Monter i taket, midt i rommet', 'Unngå hjørner — luftsirkulasjonen er dårlig der', 'Ha minst én varsler utenfor hvert soverom', 'Kjøkken: bruk varmevarsler, ikke røykvarsler', 'Kjeller og loft: krav gjelder beboelige rom'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Test månedlig', desc: 'Trykk på testknappen. Høres alarmen?' },
                { title: 'Bytt batteri årlig', desc: 'Sett av en fast dato. Moderne varslere varsler selv når batteriet er svakt.' },
                { title: 'Støvsug halvårlig', desc: 'Støv reduserer følsomheten. Støvsug forsiktig rundt åpningene.' },
                { title: 'Bytt etter 10 år', desc: 'Sjekk produksjonsdato på baksiden.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                  <p className="text-brand-darkgray">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Spørsmål om brannsikkerhet?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">Brannkonsult AS hjelper deg med brannkonsept og brannsikkerhetsvurderinger i Stavanger og Rogaland.</p>
              <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
