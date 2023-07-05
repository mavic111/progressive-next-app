import { useEffect, useRef, useState } from 'react'

export default function useGeolocation(geoOptions: PositionOptions) {
  const [position, setPosition] = useState<GeolocationPosition>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [watchID, setWatchID] = useState<number>()
  const [isTracking, setIsTracking] = useState<boolean>(false)
  const watchIDRef = useRef<number>()

  function successCallback(position: GeolocationPosition) {
    console.log(position.coords)
    setPosition(position)
  }

  function errorCallback() {
    setError('Unable to retrieve your location')
  }
  function locateMe() {
    setIsLoading(true)
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
    } else {
      console.log('Locating...')
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        geoOptions
      )
      setIsLoading(false)
    }
  }

  function trackMe() {
    setIsLoading(true)
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
    } else {
      console.log('Tracking...')
      const watchID = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        geoOptions
      )
      console.log('TrackingID:', watchID)
      setWatchID(watchID)
      setIsTracking(true)
      setIsLoading(false)
    }
  }

  function stopTrackMe() {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
    } else {
      if (watchID) {
        console.log('Clearing watch...', watchID)
        navigator.geolocation.clearWatch(watchID)
        setWatchID(undefined)
        setIsTracking(false)
      } else {
        console.log('watchID undefined')
      }
    }
  }

  function cleanTracker(watchID: number) {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
    } else {
      console.log('Cleaning up watch..', watchID)
      navigator.geolocation.clearWatch(watchID)
    }
  }

  useEffect(() => {
    watchIDRef.current = watchID
  }, [watchID])

  useEffect(() => {
    locateMe()
    return () => {
      if (watchIDRef.current) {
        cleanTracker(watchIDRef.current)
      } else {
        console.log('Watch clean..')
      }
    }
  }, [])
  return {
    position,
    error,
    isLoading,
    isTracking,
    locateMe,
    trackMe,
    stopTrackMe,
  }
}
