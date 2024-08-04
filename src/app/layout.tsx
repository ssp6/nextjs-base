import type { Metadata } from 'next'
import { Inter, Mochiy_Pop_One } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  variable: '--font-header',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Eco Venture',
  description: 'The best place to find eco-friendly holidays.',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased ${inter.variable} ${mochiyPopOne.variable} h-full overscroll-y-none`,
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
