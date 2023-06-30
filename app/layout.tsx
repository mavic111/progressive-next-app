import './globals.css'
import { Montserrat } from 'next/font/google'
import { darkThemeColor, lightThemeColor } from '@/constants/themeColor'
import { ThemeProvider } from '@/components/organisms/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'

const font = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
})

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
    icon: '/favicon.ico',
    shortcut: '/favicon-48x48.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
