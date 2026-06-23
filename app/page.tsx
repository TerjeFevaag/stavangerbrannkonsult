import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    number: '01',
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description: 'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt.',
    href: '/brannkonsept',
  },
  {
    number: '02',
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description: 'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    number: '03',
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description: 'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer og utarbeider tilstandsrapport.',
    href: '/branninspeksjon',
  },
  {
    number: '04',
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description: 'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Kontrollen sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const reviews = [
  {
    quote: 'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Måtte endre noe i rapporten pga ny planløsning. Ny oppdatert rapport innen kort tid. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote: 'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand Arkitektur AS',
  },
  {
    quote: 'Svært god service. Trygt med folk som kan faget sitt. Fikk svært god hjelp og mange gode tips og innspill under byggeprosessen.',
    author: 'Torger Vistnes',
  },
  {
    quote: 'Stavanger Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet.',
    author: 'Hagelin Byggservice',
    company: 'Daniel Hagelin',
  },
  {
    quote: 'Vi er veldig fornøyde med leveransen fra Stavanger Brannkonsult AS. Notatet var grundig, lettfattelig og inneholdt gode beskrivelser av mulige utføringsmetoder.',
    author: 'Ventilasjon AS',
    company: 'Emil Jacobsen',
  },
  {
    quote: 'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Veldig fornøyd!',
    author: 'Heidi Spinnangr',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Stavanger?',
    answer: 'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris — uansett om prosjektet er i Stavanger, Rogaland eller andre steder i landet.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer: 'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt, uansett hvor i Norge det befinner seg.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata jobber vi effektivt uten fysisk befaring — noe som gjør det enkelt å samarbeide med oss uansett om du er i Stavanger, på Vestlandet eller andre steder i landet.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer: 'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter — og godkjenningen gjelder i hele Norge.',
  },
  {
    question: 'Leverer dere kun i Stavanger?',
    answer: 'Nei — Stavanger og Rogaland er kjerneområdet vårt, men vi bistår kunder over hele Vestlandet og resten av landet. Vi har gjennomført prosjekter fra Kristiansand til Tromsø. Kontakt oss uansett hvor prosjektet ditt er.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero — Corporate Bold: diagonal split ── */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden">
        {/* Left: city image with diagonal clip */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Stavanger by"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/50" />
        </div>
        {/* Right panel — dark overlay + content */}
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen py-32">
          <div className="lg:w-1/2 lg:ml-auto">
            <div className="bg-brand-dark/90 backdrop-blur-sm rounded-[30px] p-10 lg:p-14">
              <p className="hero-1 font-accent text-brand-orange text-xl mb-4">Fastpris · Sentralt godkjent · Svar innen 24t</p>
              <h1 className="hero-2 text-brand-white font-black text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Brann&shy;prosjektering uten overraskelser
              </h1>
              <div className="hero-3 w-16 h-1 bg-brand-orange mb-6" />
              <p className="hero-4 text-brand-white/70 text-lg leading-relaxed mb-8">
                Vi leverer brannkonsept, brannprosjektering og uavhengig kontroll i Stavanger og Rogaland. Alltid fastpris — aldri skjulte kostnader.
              </p>
              <div className="hero-5 flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt-oss" className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-center">
                  Få gratis tilbud
                </Link>
                <Link href="/om-oss" className="border-2 border-brand-white/30 text-brand-white font-bold px-8 py-4 rounded-[10px] hover:border-brand-white/60 transition-colors text-center">
                  Om oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — 2×2 numbered grid ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-accent text-brand-orange text-lg mb-2">Det vi gjør</p>
                <h2 className="text-brand-black font-black text-3xl lg:text-4xl">Våre tjenester</h2>
              </div>
              <Link href="/brannprosjektering" className="hidden md:flex items-center gap-2 text-brand-orange font-bold hover:underline">
                Se alle <ChevronRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 60}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About — Sentralt godkjent prominent center ── */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-accent text-brand-orange text-lg mb-3">Hvem vi er</p>
            <h2 className="text-brand-white font-black text-3xl lg:text-4xl mb-8 max-w-2xl mx-auto">
              Sentralt godkjent brannprosjektering i Stavanger og Rogaland
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={80}>
            <div className="flex justify-center mb-10">
              <div className="bg-brand-white/10 rounded-full p-6 border border-brand-orange/30">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={120} height={120} className="object-contain" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-brand-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Stavanger er en internasjonal by med stor aktivitet innen bygg og eiendom — fra historisk trehusbebyggelse i Gamle Stavanger til moderne næringsbygg og boligprosjekter i Forus og Hundvåg. Vi leverer brannkonsept og brannprosjektering til private, næringsaktører og kommunale etater i hele Rogaland.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { num: '2013', label: 'Etablert' },
                { num: '1200+', label: 'Prosjekter' },
                { num: 'TKL 1+2', label: 'Godkjent' },
                { num: 'Fastpris', label: 'Alltid' },
              ].map((stat, i) => (
                <div key={i} className="bg-brand-white/5 border border-brand-white/10 rounded-[20px] p-5">
                  <div className="text-brand-orange font-black text-2xl mb-1">{stat.num}</div>
                  <div className="text-brand-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews — 2-column with orange left border ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva kundene sier</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <ReviewCard {...review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — white, right-aligned + accordion ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="font-accent text-brand-orange text-lg mb-2">Spørsmål og svar</p>
              <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-5">Ofte stilte spørsmål</h2>
              <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                Her finner du svar på de vanligste spørsmålene om brannprosjektering i Stavanger.
              </p>
              <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity">
                Still et spørsmål
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={80} variant="fade">
              <div className="bg-brand-white rounded-[30px] p-8 border border-brand-gray">
                <FAQAccordion items={faqItems} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Articles — equal 3-column grid ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-2">Artikler og tips</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: '/artikler/pipebrann', img: '/images/article-pipebrann.jpg', title: 'Forebygg pipebrann med enkle grep', excerpt: 'Er du i faresonen for pipebrann? Vi forklarer hva som forårsaker den og hva du kan gjøre.' },
              { href: '/artikler/brannslokker', img: '/images/article-brannslukker.jpg', title: 'Har du riktig brannslokkeapparat?', excerpt: 'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår kravene.' },
              { href: '/artikler/roykvarsler', img: '/images/article-roykvarsler.jpg', title: 'Riktig røykvarsler redder liv', excerpt: 'Krav til røykvarslere i norske boliger og anbefalt plassering.' },
            ].map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 80}>
                <Link href={article.href} className="group flex flex-col rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-orange/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-brand-black text-lg font-black mb-2 group-hover:text-brand-orange transition-colors">{article.title}</h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm">Les mer &rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — split section ── */}
      <ScrollReveal variant="fade">
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-brand-dark py-20 px-8 lg:px-16 flex flex-col justify-center">
            <h2 className="text-brand-white font-black text-3xl lg:text-4xl mb-4">Klar for å komme i gang?</h2>
            <p className="text-brand-white/60 text-lg leading-relaxed">
              Vi hjelper deg med brannprosjektering i Stavanger og Rogaland. Svar innen 24 timer.
            </p>
          </div>
          <div className="bg-brand-orange py-20 px-8 lg:px-16 flex flex-col justify-center">
            <p className="text-brand-white text-lg mb-6">Send oss en forespørsel — vi svarer med fastpris innen 24 timer.</p>
            <Link href="/kontakt-oss" className="inline-block border-2 border-brand-white text-brand-white font-bold px-10 py-4 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all text-lg w-fit">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
