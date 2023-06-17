import { ReactNode } from 'react'

export default function ScrollView({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-full w-full flex-col overflow-y-scroll md:rounded-xl md:bg-zinc-900">
      {children}
    </section>
  )
}
