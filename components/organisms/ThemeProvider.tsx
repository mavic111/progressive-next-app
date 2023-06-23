'use client'

import { darkThemeColor, lightThemeColor } from '@/constants/themeColor'
import { forceThemeColor } from '@/lib/utils'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Force theme to suits `theme` cookie.
    const myTheme = window.localStorage.getItem('theme')
    if (myTheme === 'light') {
      forceThemeColor(lightThemeColor)
    } else if (myTheme === 'dark') {
      forceThemeColor(darkThemeColor)
    }
    // If `theme` cookie is `system` or not defined, use default theme color metadata.
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
