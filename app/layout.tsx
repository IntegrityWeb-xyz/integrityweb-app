import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ScanlineOverlay } from '@/components/ui/scanline-overlay'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://integritywebxyz'),
  title: {
    default: 'IntegrityWeb - Verifiable AI Framework',
    template: '%s | IntegrityWeb'
  },
  description: 'The Integrity Web provides the cryptographic primitives and tools you need to build the next generation of verifiable, autonomous AI applications.',
  keywords: ['AI Agents', 'Verifiable AI', 'ZK-Rollups', 'Starknet', 'Sovereign AI', 'Account Abstraction', 'ERC-8004', 'Zero Knowledge Proofs'],
  authors: [{ name: 'Integrity Web Team' }],
  creator: 'Integrity Web',
  publisher: 'Integrity Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://integritywebxyz',
    siteName: 'IntegrityWeb',
    title: 'IntegrityWeb - The Trust Layer for AI',
    description: 'Build validated, sovereign agents on the Integrity Web. The essential framework for verifiable AI applications.',
    images: [
      {
        url: '/iwxyz-card.jpg',
        width: 1200,
        height: 630,
        alt: 'IntegrityWeb Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntegrityWeb - Verifiable AI Framework',
    description: 'Build validated, sovereign agents on the Integrity Web.',
    images: ['/iwxyz-card.jpg'],
    creator: '@integrityweb',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'IntegrityWeb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
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

import { GenerativeScene } from '@/components/3d/generative-scene'
import { ScrollBackground } from '@/components/ui/scroll-background'
import { OSFooter } from '@/components/ui/os-footer'
import { Navigation } from '@/components/navigation'

// ... (other imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="dark">
        <body className={`font-sans antialiased text-foreground ${jetbrainsMono.variable}`}>
          <div className="fixed inset-0 -z-50">
            <GenerativeScene />
          </div>
          <ScrollBackground />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="integrity-web-theme"
          >
            <ScanlineOverlay />
            <Navigation />
            <main className="relative z-10 w-full min-h-screen flex flex-col">
              <div className="flex-1">
                {children}
              </div>
              <OSFooter />
            </main>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
