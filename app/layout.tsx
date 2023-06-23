import './globals.css'
import { Inter } from 'next/font/google'
import AppShell from '@/components/organisms/AppShell'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/organisms/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

const TITLE = 'Progressive Next App'

export const metadata = {
  title: {
    default: TITLE,
    template: '%s | ' + TITLE,
  },
  description: 'A Next.js App Router Progressive Web App',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F4F5' },
    { media: '(prefers-color-scheme: dark)', color: '##18181B' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell>{children}</AppShell>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
