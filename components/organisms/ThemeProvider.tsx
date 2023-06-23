'use client'

import { forceThemeColor } from '@/lib/utils'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme === 'light') {
      forceThemeColor('#F4F4F5')
    } else if (theme === 'dark') {
      forceThemeColor('#18181B')
    }
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
