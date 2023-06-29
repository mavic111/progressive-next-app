'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ArrowLeft className="h-6 w-6" />
    </Button>
  )
}
