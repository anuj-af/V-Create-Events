import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Luxury Wedding Events - Premium Wedding Planning & Design',
  description: 'Discover luxury wedding and events services with premium planning, stunning design, and unforgettable celebrations for the most important moments of your life.',
  icons: {
    icon: [
      {
        url: '',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '',
        type: 'image/svg+xml',
      },
    ],
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <Analytics />
        <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var wa_btnSetting = {"btnColor":"#D4AF7A","ctaText":"Contact Us","cornerRadius":40,"marginBottom":20,"marginLeft":20,"marginRight":20,"btnPosition":"right","whatsAppNumber":"917999992961","welcomeMessage":"Hi, I'm looking for event planning services and would like to discuss my requirements with The Shadi Knot. Please let me know how we can proceed.","zIndex":999999,"btnColorScheme":"light"};
              window.onload = () => {
                if (window._waEmbed) {
                  window._waEmbed(wa_btnSetting);
                }
              };
            `,
          }}
        />
      </body>
    </html>
  )
}
