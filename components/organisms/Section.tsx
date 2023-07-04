import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Section({
  children,
  color,
  className,
}: {
  children?: ReactNode
  color?: string
  className?: string
}) {
  return (
    <section
      style={{ backgroundColor: color ? color : 'transparent' }}
      className={clsx('relative flex w-full flex-col', className)}
    >
      {children}
    </section>
  )
}
