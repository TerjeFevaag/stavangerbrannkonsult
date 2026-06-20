import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { navn, epost, telefon, prosjekttype, adresse, melding } = await request.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Manglende påkrevde felt' }, { status: 400 })
  }

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  const subject = `Ny henvendelse: ${prosjekttypeLabel[prosjekttype] ?? 'Generell forespørsel'} — ${navn}`

  const html = `
    <h2 style="font-family:sans-serif;color:#1a1a1a">Ny henvendelse fra stavangerbrannkonsult.no</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 0;color:#666;width:160px">Navn</td><td style="padding:8px 0;font-weight:600">${navn}</td></tr>
      <tr><td style="padding:8px 0;color:#666">E-post</td><td style="padding:8px 0"><a href="mailto:${epost}">${epost}</a></td></tr>
      ${telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0">${telefon}</td></tr>` : ''}
      ${prosjekttype ? `<tr><td style="padding:8px 0;color:#666">Prosjekttype</td><td style="padding:8px 0">${prosjekttypeLabel[prosjekttype] ?? prosjekttype}</td></tr>` : ''}
      ${adresse ? `<tr><td style="padding:8px 0;color:#666">Prosjektadresse</td><td style="padding:8px 0">${adresse}</td></tr>` : ''}
    </table>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
    <p style="font-family:sans-serif;font-size:15px;color:#1a1a1a;white-space:pre-wrap">${melding.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
    <p style="font-family:sans-serif;font-size:12px;color:#999">Sendt fra kontaktskjema på stavangerbrannkonsult.no</p>
  `

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.MAILERSEND_TOKEN}`,
    },
    body: JSON.stringify({
      from: { email: 'noreply@stavangerbrannkonsult.no', name: 'Stavanger Brannkonsult' },
      to: [{ email: 'post@stavangerbrannkonsult.no', name: 'Stavanger Brannkonsult' }],
      reply_to: { email: epost, name: navn },
      subject,
      html,
      text: `Navn: ${navn}\nE-post: ${epost}\n${telefon ? `Telefon: ${telefon}\n` : ''}${prosjekttype ? `Prosjekttype: ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}\n` : ''}${adresse ? `Adresse: ${adresse}\n` : ''}\n${melding}`,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('MailerSend error:', err)
    return NextResponse.json({ error: 'Sending feilet' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
