import { ReactNode } from 'react'

export default function SectionView({ children }: { children?: ReactNode }) {
  return (
    <section className="box-border flex min-h-[100svh] w-[100svw] flex-col border-2 border-dashed border-red-500 md:min-h-[100lvh] md:w-[100lvw]">
      {children}
    </section>
  )
}
