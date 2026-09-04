import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import '@/styles/navbar.css'
import '@/styles/form-controls.css'
import '@/styles/select.css'
import '@/styles/datepicker.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MOVAGO — Executive Airport Transfer',
  description: 'Premium airport transfer and executive mobility by MOVAGO',
  icons: {
    icon: [
      {
        url: '/images/brand/favicon.jpg',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/brand/favicon.jpg',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/images/brand/favicon.jpg',
    apple: '/images/brand/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
