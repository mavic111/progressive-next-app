import ThemeAdjuster from '@/components/organisms/ThemeAdjuster'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return <ThemeAdjuster>{children}</ThemeAdjuster>
}
