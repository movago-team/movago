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
    icon: '/images/brand/favicon.png',
    shortcut: '/images/brand/favicon.png',
    apple: '/images/brand/favicon.png',
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
