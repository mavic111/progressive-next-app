import { ReactNode } from 'react'

export default function Section({ children }: { children?: ReactNode }) {
  return (
    <section className="box-border min-h-full w-full border-2 border-dashed border-red-500 bg-slate-100 dark:bg-zinc-900">
      {children}
    </section>
  )
}
