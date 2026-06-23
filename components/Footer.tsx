import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}
function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white pt-16 pb-0">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-0">
          {/* Col 1 */}
          <div>
            <Image src="/images/logo-white.png" alt="Stavanger Brannkonsult" width={234} height={72} className="object-contain mb-5" />
            <p className="text-brand-white/60 text-sm leading-relaxed mb-3">
              Brannprosjektering i Stavanger og Rogaland. Sentralt godkjent foretak for tiltaksklasse 1 og 2.
            </p>
            <p className="text-brand-white/40 text-xs mb-5">Stavanger, Rogaland</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-brand-white/60 hover:text-brand-orange transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-brand-white/60 hover:text-brand-orange transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="text-brand-white/60 hover:text-brand-orange transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <h3 className="font-black text-brand-white mb-5 text-base">Snarveier</h3>
            <ul className="space-y-3">
              {[['/', 'Hjem'], ['/om-oss', 'Om oss'], ['/artikler/pipebrann', 'Artikler'], ['/kontakt-oss', 'Kontakt oss']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="font-black text-brand-white mb-5 text-base">Tjenester</h3>
            <ul className="space-y-3">
              {[['/brannkonsept', 'Brannkonsept'], ['/brannprosjektering', 'Brannprosjektering'], ['/branninspeksjon', 'Branninspeksjon'], ['/uavhengig-kontroll', 'Uavhengig kontroll']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 border-t border-brand-orange/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-5 text-sm text-brand-white/70">
            <a href="tel:+4745411440" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Phone size={14} /> +47 454 11 440
            </a>
            <a href="mailto:post@stavangerbrannkonsult.no" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Mail size={14} /> post@stavangerbrannkonsult.no
            </a>
          </div>
          <Link href="/kontakt-oss" className="shrink-0 bg-brand-orange text-brand-white font-bold px-7 py-2.5 rounded-[10px] text-sm hover:opacity-90 transition-opacity">
            Få gratis tilbud
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-xs">&copy; {new Date().getFullYear()} Brannkonsult AS. Alle rettigheter forbeholdt.</p>
          <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={80} height={80} className="object-contain" />
        </div>
      </div>
    </footer>
  )
}
