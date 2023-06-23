'use client'

import { darkThemeColor, lightThemeColor } from '@/constants/themeColor'
import { forceThemeColor } from '@/lib/utils'
import { ReactNode, useEffect } from 'react'

export default function ThemeAdjuster({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Force theme to suits `theme` cookie.
    const myTheme = window.localStorage.getItem('theme')
    if (myTheme === 'light') {
      forceThemeColor(lightThemeColor)
    } else if (myTheme === 'dark') {
      forceThemeColor(darkThemeColor)
    }
  }, [])
  return children
}
