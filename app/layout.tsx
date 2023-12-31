"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './src/components/Navbar'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar/>
            {children}          
          </ThemeProvider>
      </body>
    </html>
  )
}