import { ReactNode } from 'react'

export default function ScrollView({ children }: { children: ReactNode }) {
  return (
    <section
      id="scroll-view"
      className="no-scrollbar relative flex h-full w-full flex-col overflow-y-scroll"
    >
      {children}
    </section>
  )
}
