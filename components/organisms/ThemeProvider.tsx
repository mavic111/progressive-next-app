'use client'

import { forceThemeColor, resetThemeColor } from '@/lib/utils'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Force theme to suits `theme` cookie.
    const theme = window.localStorage.getItem('theme')
    if (theme === 'light') {
      forceThemeColor('#F4F4F5')
    } else if (theme === 'dark') {
      forceThemeColor('#18181B')
    }
    // If `theme` cookie is `system` or not defined, use default theme color metadata. 
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
