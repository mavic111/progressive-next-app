'use client'

import { useLocation } from '@/pwa/geolocation'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
const DynamicMap = dynamic(() => import('../molecules/Map'), { ssr: false })

export default function MyLocation() {
  const {
    position,
    error,
    locateMe,
    isLoading,
    isTracking,
    trackMe,
    stopTrackMe,
  } = useLocation({
    timeout: 10 * 1000,
    enableHighAccuracy: true,
    maximumAge: 0,
  })

  if (error) {
    return <span>{error}</span>
  }
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 md:mb-6">Playground</h1>

      {position && !isLoading ? (
        <div className="aspect-square w-full">
          <DynamicMap
            latitude={position.coords.latitude}
            longitude={position.coords.longitude}
          />
        </div>
      ) : (
        <span>Locating..</span>
      )}

      <div className="my-4 flex flex-col space-y-2 md:space-y-4">
        <Button size="sm" onClick={() => locateMe()}>
          Locate Me
        </Button>
        <Button disabled={isTracking} onClick={() => trackMe()}>
          Track Me
        </Button>
        <Button disabled={!isTracking} onClick={() => stopTrackMe()}>
          Stop Track Me
        </Button>
      </div>
    </div>
  )
}
