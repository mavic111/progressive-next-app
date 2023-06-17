import Header from '@/components/molecules/Header'
import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/molecules/Navbar'
import AppView from '@/components/organisms/AppView'
import ScrollView from '@/components/organisms/ScrollView'

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
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
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
    <html lang="en">
      <body className={inter.className}>
        <AppView>
          <Header />
          <main className="flex h-full w-full flex-row overflow-y-hidden">
            <Navbar />
            <main className="flex h-full w-full flex-col pb-24 md:px-6 md:pb-6">
              <ScrollView>{children}</ScrollView>
            </main>
          </main>
        </AppView>
      </body>
    </html>
  )
}
