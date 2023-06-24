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
      className={clsx('flex w-full flex-col space-y-4 p-4 md:p-6', className)}
    >
      {children}
    </section>
  )
}
