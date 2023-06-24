import ThemeAdjuster from '@/components/organisms/ThemeAdjuster'
import { ReactNode } from 'react'

export default function MainTemplate({ children }: { children: ReactNode }) {
  return <ThemeAdjuster>{children}</ThemeAdjuster>
}
