import { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Lubri-Lean | Lubricantes y Distribuidora',
  description: 'Expertos en lubricantes y mantenimiento automotriz. Ofrecemos servicios de cambio de aceite, filtros y asesoramiento técnico profesional en Posadas, Misiones.',
  keywords: 'lubricantes, aceites, filtros, mantenimiento automotriz, cambio de aceite, Posadas, Misiones',
  authors: [{ name: 'Lubri-Lean' }],
  creator: 'Lubri-Lean',
  publisher: 'Lubri-Lean',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://lubrilean.com',
    title: 'Lubri-Lean | Lubricantes y Distribuidora',
    description: 'Expertos en lubricantes y mantenimiento automotriz en Posadas, Misiones.',
    siteName: 'Lubri-Lean',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubri-Lean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubri-Lean | Lubricantes y Distribuidora',
    description: 'Expertos en lubricantes y mantenimiento automotriz en Posadas, Misiones.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: BRAND.colors.primary,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

