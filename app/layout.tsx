import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import '@/styles/navbar.css'
import '@/styles/booking.css'
import '@/styles/button.css'
import '@/styles/form-controls.css'
import '@/styles/select.css'
import '@/styles/datepicker.css'
import '@/styles/vehicles.css'
import '@/styles/hero.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MOVAGO — Executive Airport Transfer',
  description: 'Premium airport transfer and executive mobility by MOVAGO',
  icons: {
    icon: [
      {
        url: '/images/brand/favicon-32x32.png?v=2',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/brand/favicon-16x16.png?v=2',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/images/brand/favicon-32x32.png?v=2',
    apple: '/images/brand/favicon-32x32.png?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
