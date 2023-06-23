import { ReactNode } from 'react'

export default function Section({
  children,
  color,
}: {
  children?: ReactNode
  color?: string
}) {
  return (
    <section
      style={{ backgroundColor: color ? color : 'transparent' }}
      className="box-border min-h-full w-full p-4"
    >
      {children}
    </section>
  )
}
