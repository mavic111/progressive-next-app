'use client'

import { ThemeToggle } from '../atoms/ThemeToggle'
import { Bell } from 'lucide-react'
import { Button } from '../ui/button'

export default function Toolbar() {
  return (
    <div className="grid min-w-max grid-cols-2 items-center gap-2">
      <ThemeToggle />
      <Button variant="ghost" size="icon">
        <Bell className="h-6 w-6" />
        <span className="sr-only">Open notifications</span>
      </Button>
    </div>
  )
}
