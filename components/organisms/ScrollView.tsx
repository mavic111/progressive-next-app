import { ReactNode } from 'react'

export default function ScrollView({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-full w-full flex-col overflow-y-scroll md:rounded-xl md:bg-slate-100 md:shadow-inner md:dark:bg-zinc-900">
      {children}
    </section>
  )
}
