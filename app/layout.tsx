import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
})

const siteUrl = 'https://jayaram-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'B. Jayaram | AI & ML Student | C/C++ Programmer',
  description:
    'B. Jayaram is a B.Tech Artificial Intelligence and Machine Learning student with skills in C, C++, Python, HTML, CSS and DBMS, showcasing projects, certificates and technical skills.',
  generator: 'v0.app',
  keywords: [
    'B. Jayaram',
    'AI and ML student',
    'B.Tech Artificial Intelligence',
    'Lovely Professional University',
    'C programmer',
    'C++ programmer',
    'Python',
    'student portfolio',
  ],
  authors: [{ name: 'B. Jayaram' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'B. Jayaram — Portfolio',
    title: 'B. Jayaram | AI & ML Student | C/C++ Programmer',
    description:
      'B.Tech AI & ML student with a foundation in C, C++, Python, HTML, CSS and DBMS. See projects, certificates, education and technical skills.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B. Jayaram | AI & ML Student | C/C++ Programmer',
    description:
      'B.Tech AI & ML student with a foundation in C, C++, Python, HTML, CSS and DBMS. See projects, certificates, education and technical skills.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141821',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
