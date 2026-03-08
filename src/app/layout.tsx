import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: {
    default: 'R Marine Consultants | Professional Marine Consulting Services',
    template: '%s | R Marine Consultants',
  },
  description: 'Expert marine consulting services including technical advisory, project management, regulatory compliance, and risk assessment for the global maritime industry.',
  keywords: ['marine consulting', 'maritime advisory', 'naval architecture', 'regulatory compliance', 'maritime safety', 'fleet management', 'offshore consulting', 'IMO regulations'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'R Marine Consultants',
    title: 'R Marine Consultants | Professional Marine Consulting Services',
    description: 'Expert marine consulting services including technical advisory, project management, and regulatory compliance for the maritime industry.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R Marine Consultants | Professional Marine Consulting Services',
    description: 'Expert marine consulting services for the global maritime industry.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://rmarineconsultants.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
