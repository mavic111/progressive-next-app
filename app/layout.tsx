import './globals.css'
import { Inter } from 'next/font/google'
import { darkThemeColor, lightThemeColor } from '@/constants/themeColor'
import { ThemeProvider } from '@/components/organisms/ThemeProvider'
import AppShell from '@/components/organisms/AppShell'
import { Toaster } from '@/components/ui/toaster'

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
    { media: '(prefers-color-scheme: light)', color: lightThemeColor },
    { media: '(prefers-color-scheme: dark)', color: darkThemeColor },
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
