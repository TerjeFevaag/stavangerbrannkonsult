import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Branninspeksjon Stavanger | Stavanger Brannkonsult',
  description: 'Hjelp etter branntilsyn i Stavanger og Rogaland. Tilstandsrapport og handlingsplan. Sentralt godkjent foretak.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/branninspeksjon' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer: 'Branntilsyn utføres av kommunens brann- og redningsetat. Branninspeksjon er en frivillig gjennomgang av en privat brannrådgiver der vi kartlegger hele byggets brannsikkerhet og gir tilstandsrapport.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer: 'Eier av bygget er ansvarlig. Styret i et borettslag eller sameie har plikt til å følge opp pålegg fra brannvesenet.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer: 'Brannvesenet kan gi pålegg om utbedring. Vi hjelper deg med å prioritere tiltak og finne kostnadseffektive løsninger.',
  },
  {
    question: 'Hva koster en branninspeksjon i Stavanger?',
    answer: 'Prisen avhenger av byggets størrelse. Kontakt oss for et uforpliktende tilbud — vi gir alltid fastpris.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer: 'Ja, alle eksisterende bygg skal oppgraderes til minst BF85-nivå. Eldre bygg som ikke er oppgradert kan motta pålegg ved tilsyn.',
  },
]

export default function BranninspeksjonPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Tjenester</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Branntilsyn og branninspeksjon</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              Har du fått pålegg etter branntilsyn? Vi inspiserer bygget og utarbeider tilstandsrapport og handlingsplan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva gjør brann- og redningsetaten?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Stavanger brann og redning gjennomfører tilsyn med særskilte brannobjekter. Tilsynet er stikkprøvebasert — eier er ansvarlig for å følge opp avvik.
                </p>
                <blockquote className="border-l-4 border-brand-orange pl-6 italic text-brand-darkgray bg-brand-white rounded-r-[20px] py-4 pr-6">
                  &ldquo;Eier er ansvarlig for at brannsikkerheten i bygget er tilfredsstillende. Branntekniske avvik skal utbedres innen [dato].&rdquo;
                </blockquote>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Vår branninspeksjonstjeneste</h2>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Inspeksjon', desc: 'Vi gjennomgår bygget fysisk og vurderer alle branntekniske tiltak.' },
                    { step: '02', title: 'Tilstandsrapport', desc: 'Skriftlig rapport med avvik rangert etter alvorlighetsgrad.' },
                    { step: '03', title: 'Handlingsplan', desc: 'Konkrete tiltak med prioritering og estimerte kostnader.' },
                    { step: '04', title: 'Internkontrollrutiner', desc: 'Vi hjelper deg med rutiner for løpende brannsikkerhet.' },
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

            <div className="lg:col-span-1">
              <ScrollReveal delay={100} className="sticky top-28">
                <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                  <h3 className="font-black text-xl mb-4">Hjelp etter tilsyn</h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-6">Vi hjelper deg med å følge opp pålegg og utarbeide handlingsplan.</p>
                  <Link href="/kontakt-oss" className="block w-full bg-brand-orange text-brand-white font-bold px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity text-center">
                    Kontakt oss
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-10">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white font-bold text-lg">Kontakt oss etter branntilsyn i Stavanger</p>
          <Link href="/kontakt-oss" className="border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all whitespace-nowrap">
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
