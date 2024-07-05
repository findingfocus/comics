import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Comics!',
  description: 'Original Art by Paul Thompson',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
      <html lang="en" suppressHydrationWarning className="theme-dark">
      <body className="bg-gradient-to-b from-black to-slate-600 min-h-screen h-full">{children}</body>
      </html>
)
}