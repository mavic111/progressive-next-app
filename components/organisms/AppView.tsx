import { ReactNode } from 'react'

export default function AppView({ children }: { children?: ReactNode }) {
  return (
    <main
      id="app"
      className="flex h-[100svh] w-[100svw] flex-col overflow-hidden md:h-[100lvh] md:w-[100lvw]"
    >
      {children}
    </main>
  )
}
