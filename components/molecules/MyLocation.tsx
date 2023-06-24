'use client'

import { useLocation } from '@/hooks/useLocation'
import dynamic from 'next/dynamic'
const DynamicMap = dynamic(() => import('../molecules/Map'), { ssr: false })

export default function MyLocation() {
  const { position, error } = useLocation()

  if (error) {
    return <span>{error}</span>
  }
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 md:mb-6">Your Location</h2>
      {position ? (
        <div className="aspect-square w-full max-w-screen-md">
          <DynamicMap
            latitude={position.coords.latitude}
            longitude={position.coords.longitude}
          />
        </div>
      ) : (
        <span>Locating..</span>
      )}
    </div>
  )
}
