import { ReactNode } from 'react'

export default function ScrollView({ children }: { children: ReactNode }) {
  return (
    <section
      id="scroll-view"
      className="no-scrollbar flex h-full w-full flex-col overflow-y-scroll border border-dashed border-red-500/50"
    >
      {children}
    </section>
  )
}
