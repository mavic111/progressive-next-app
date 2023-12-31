import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const TITLE = 'Progressive Next App'

export const metadata = {
  title: {
    default: TITLE,
    template: '%s | ' + TITLE
  },
  description: 'A Next.js App Router Progressive Web App',
  manifest: "/manifest.json",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
