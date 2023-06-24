import { useEffect, useState } from 'react'

export function useLocation() {
  const [position, setPosition] = useState<GeolocationPosition>()
  const [error, setError] = useState<string>()
  useEffect(() => {
    function success(position: GeolocationPosition) {
      setPosition(position)
    }

    function error() {
      setError('Unable to retrieve your location')
    }

    function geoFindMe() {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser')
      } else {
        navigator.geolocation.getCurrentPosition(success, error)
      }
    }
    geoFindMe()
  }, [])
  return { position, error }
}
