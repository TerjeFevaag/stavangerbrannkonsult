'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-brand-black font-black text-xl mb-2">Takk for henvendelsen!</h3>
        <p className="text-brand-darkgray">Vi svarer deg innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">Navn *</label>
        <input type="text" id="navn" name="navn" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="Ditt fulle navn" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">E-post *</label>
          <input type="email" id="epost" name="epost" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="din@epost.no" />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">Telefon</label>
          <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="+47 000 00 000" />
        </div>
      </div>
      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">Prosjekttype</label>
        <select id="prosjekttype" name="prosjekttype" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white">
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>
      <div>
        <label htmlFor="adresse" className="block text-sm font-bold text-brand-black mb-1.5">Prosjektadresse</label>
        <input type="text" id="adresse" name="adresse" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="Gateadresse, postnummer, sted" />
      </div>
      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">Melding *</label>
        <textarea id="melding" name="melding" required rows={5} className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none" placeholder="Beskriv prosjektet ditt kort..." />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-[10px]">
          Noe gikk galt. Prøv igjen eller send e-post direkte til post@stavangerbrannkonsult.no
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60"
      >
        {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
