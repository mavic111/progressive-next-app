'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { forceThemeColor, resetThemeColor } from '@/lib/utils'
import { darkThemeColor, lightThemeColor } from '@/constants/themeColor'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  function setLight() {
    setTheme('light')
    forceThemeColor(lightThemeColor)
  }

  function setDark() {
    setTheme('dark')
    forceThemeColor(darkThemeColor)
  }

  function setSystem() {
    setTheme('system')
    resetThemeColor()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="button-icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="button-icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLight()}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDark()}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSystem()}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
