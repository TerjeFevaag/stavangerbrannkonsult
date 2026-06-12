import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt oss | Stavanger Brannkonsult',
  description: 'Kontakt Stavanger Brannkonsult for brannprosjektering og brannkonsept. Vi svarer innen 24 timer. Gratis og uforpliktende tilbud.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-brand-white border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-brand-orange pl-8">
            <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Kontakt</p>
            <h1 className="text-brand-black font-black text-4xl lg:text-6xl leading-tight mb-5">Kontakt oss</h1>
            <p className="text-brand-darkgray text-lg lg:text-xl max-w-2xl leading-relaxed">
              Ta kontakt for et gratis og uforpliktende tilbud. Vi svarer innen 24 timer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-brand-white rounded-[30px] p-8 lg:p-10 border border-brand-gray">
                <h2 className="text-brand-black text-2xl font-black mb-8">Send oss en forespørsel</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-2">
              <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white h-full">
                <h2 className="text-brand-white text-2xl font-black mb-8">Kontaktinformasjon</h2>
                <div className="space-y-6">
                  {[
                    { Icon: Phone, label: 'Telefon', value: '+47 000 00 000', href: 'tel:+4700000000' },
                    { Icon: Mail, label: 'E-post', value: 'post@stavangerbrannkonsult.no', href: 'mailto:post@stavangerbrannkonsult.no' },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-brand-white/50 text-sm mb-1">{label}</p>
                        <a href={href} className="text-brand-white font-bold hover:text-brand-orange transition-colors break-all">{value}</a>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Adresse</p>
                      <p className="text-brand-white font-bold">Gateadresse</p>
                      <p className="text-brand-white/60">Stavanger</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Åpningstider</p>
                      <p className="text-brand-white font-bold">Man–Fre 08:00–16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
