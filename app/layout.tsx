import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stavangerbrannkonsult.no'),
  title: 'Brannprosjektering i Stavanger | Stavanger Brannkonsult',
  description: 'Stavanger Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Stavanger og Rogaland. Sentralt godkjent foretak. Fastpris.',
  alternates: { canonical: 'https://www.stavangerbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Stavanger | Stavanger Brannkonsult',
    description: 'Stavanger Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Stavanger og Rogaland.',
    url: 'https://www.stavangerbrannkonsult.no',
    siteName: 'Stavanger Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Stavanger Brannkonsult' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stavanger Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Stavanger',
  telephone: '+4700000000',
  email: 'post@stavangerbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stavanger',
    addressCountry: 'NO',
  },
  url: 'https://www.stavangerbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
