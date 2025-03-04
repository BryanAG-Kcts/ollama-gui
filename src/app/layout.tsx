import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { poppins, quicksand } from './constants'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ollama-GUI',
  description: 'Ollama user interface'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning={true}
      lang='en'
    >
      <body
        className={`antialiased ${poppins.variable} ${quicksand.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
