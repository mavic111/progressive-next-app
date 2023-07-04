import { useEffect, useState } from 'react'

const geoOptions: PositionOptions = {
  timeout: 10 * 1000,
  enableHighAccuracy: true,
  maximumAge: 0,
}

export default function useLocation() {
  const [position, setPosition] = useState<GeolocationPosition>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [watchID, setWatchID] = useState<number>()
  const [isTracking, setIsTracking] = useState<boolean>(false)

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
      console.log('Watching...')
      const watchID = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        geoOptions
      )
      console.log(watchID)
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

  useEffect(() => {
    locateMe()
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
