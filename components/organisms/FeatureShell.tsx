import { ReactNode } from 'react'
import BackButton from '../atoms/BackButton'

export default function FeatureShell({ children }: { children: ReactNode }) {
  return (
    <main
      id="app-shell"
      className="flex h-[100svh] w-[100svw] flex-col overflow-hidden md:h-[100lvh] md:w-[100lvw]"
    >
      <header className="sticky top-0 w-full p-4 md:px-6 lg:px-8">
        <BackButton />
      </header>
      {children}
    </main>
  )
}
