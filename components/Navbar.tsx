'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/brannkonsept', label: 'Brannkonsept' },
  { href: '/brannprosjektering', label: 'Brannprosjektering' },
  { href: '/branninspeksjon', label: 'Branninspeksjon' },
  { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
  { href: '/om-oss', label: 'Om oss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-white shadow-md' : 'bg-brand-dark'}`}>
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src={scrolled ? '/images/logo-black.png' : '/images/logo-white.png'}
            alt="Stavanger Brannkonsult"
            width={234} height={65}
            className="object-contain h-[52px] w-auto"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className={`text-sm font-bold transition-colors hover:text-brand-orange ${scrolled ? 'text-brand-black' : 'text-brand-white'}`}>
              {link.label}
            </Link>
          ))}
          <div className={`h-4 w-px mx-1 ${scrolled ? 'bg-brand-gray' : 'bg-brand-white/20'}`} />
          <a href="tel:+4797349273"
            className={`flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-brand-orange ${scrolled ? 'text-brand-black' : 'text-brand-white/80'}`}>
            <Phone size={13} />
            +47 973 49 273
          </a>
          <Link href="/kontakt-oss"
            className="ml-1 bg-brand-orange text-brand-white font-bold px-5 py-2.5 rounded-[10px] hover:opacity-90 transition-opacity text-sm">
            Få tilbud
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${scrolled ? 'text-brand-black' : 'text-brand-white'}`} aria-label="Meny">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-white/10 px-4 py-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block py-3 text-brand-white font-bold hover:text-brand-orange transition-colors border-b border-brand-white/10 last:border-0">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 pb-1 flex flex-col gap-3">
            <a href="tel:+4797349273" className="flex items-center gap-2 text-brand-white/70 text-sm font-bold">
              <Phone size={13} /> +47 973 49 273
            </a>
            <Link href="/kontakt-oss" onClick={() => setOpen(false)}
              className="block bg-brand-orange text-brand-white font-bold px-5 py-3 rounded-[10px] text-center hover:opacity-90">
              Få tilbud
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
