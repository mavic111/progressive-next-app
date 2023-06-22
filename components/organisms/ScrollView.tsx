import { ReactNode } from 'react'

export default function ScrollView({ children }: { children: ReactNode }) {
  return (
    <section className="no-scrollbar flex h-full w-full flex-col overflow-y-auto md:rounded-2xl">
      {children}
    </section>
  )
}
