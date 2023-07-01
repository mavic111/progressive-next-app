import { ReactNode } from 'react'
import Header from '../molecules/Header'
import Navbar from '../molecules/Navbar'

export default function AppShell({ children }: { children?: ReactNode }) {
  return (
    <main
      id="app-shell"
      className="flex h-[100svh] w-[100svw] flex-col overflow-hidden md:h-[100lvh] md:w-[100lvw]"
    >
      <Header />
      <main className="flex h-full w-full flex-row overflow-y-hidden md:gap-4 md:p-4">
        <Navbar />
        <main className="flex w-full flex-col max-md:pb-24">{children}</main>
      </main>
    </main>
  )
}
