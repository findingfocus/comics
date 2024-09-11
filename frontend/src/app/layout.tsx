import type { Metadata } from 'next'
import './globals.css'
import './picker.css'


export const metadata: Metadata = {
  title: 'Comics by Paul Thompson',
  description: 'Original Art by Paul Thompson',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
      <html lang="en" suppressHydrationWarning className="theme-dark">
      <body className="bg-gradient-to-b from-slate-950 to-cyan-950 min-h-screen h-full">{children}</body>
      </html>
)
}