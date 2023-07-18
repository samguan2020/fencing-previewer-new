import './globals.css'
import './clerk.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import ThemeRegistry from '~/components/ThemeRegistry/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fencing Previewer',
  description: '',
  icons: {
    icon: "/icon.svg",
  },
  manifest: '/manifest.json',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  )
}
