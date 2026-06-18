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
  description: 'Stavanger Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Stavanger og Rogaland. Sentralt godkjent foretak. Fastpris.',
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

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stavanger Brannkonsult AS',
  description: 'Brannprosjektering, brannkonsept og branninspeksjon i Stavanger og Rogaland. Sentralt godkjent foretak i tiltaksklasse 1 og 2.',
  // TODO: Erstatt med ekte telefonnummer
  telephone: 'TODO_TELEFONNUMMER',
  email: 'post@stavangerbrannkonsult.no',
  foundingDate: '2013',
  address: {
    '@type': 'PostalAddress',
    // TODO: Fyll inn gateadresse og postnummer
    streetAddress: 'TODO_GATEADRESSE',
    postalCode: 'TODO_POSTNUMMER',
    addressLocality: 'Stavanger',
    addressRegion: 'Rogaland',
    addressCountry: 'NO',
  },
  url: 'https://www.stavangerbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Stavanger' },
    { '@type': 'City', name: 'Sandnes' },
    { '@type': 'City', name: 'Sola' },
    { '@type': 'City', name: 'Randaberg' },
    { '@type': 'AdministrativeArea', name: 'Rogaland' },
  ],
  // TODO: Legg inn ekte URL-er til Facebook/LinkedIn/Instagram når disse er klare
  sameAs: [
    'TODO_FACEBOOK_URL',
    'TODO_INSTAGRAM_URL',
    'TODO_LINKEDIN_URL',
  ],
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stavanger Brannkonsult',
  url: 'https://www.stavangerbrannkonsult.no',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
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
