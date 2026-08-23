import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Raleway, Marcellus } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import './globals.css'

const leJour = localFont({
  src: '../public/fonts/LeJourSerif.otf',
  variable: '--font-serif'
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-nav'
})

export const metadata: Metadata = {
  title: 'V-Create Events & Decor — Luxury Wedding Planning & Design',
  description: 'Discover luxury wedding and events services with premium planning, stunning design, and unforgettable celebrations for the most important moments of your life.',
  icons: {
    icon: '/logo.png',
    apple: '',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${leJour.variable} ${raleway.variable} ${marcellus.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <WhatsappWidget />
        <Analytics />
      </body>
    </html>
  )
}
