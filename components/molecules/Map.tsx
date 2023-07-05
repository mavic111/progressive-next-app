import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  ZoomControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const customMarkerIcon = L.icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

export default function Map({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}) {
  console.log(latitude)
  console.log(longitude)
  return (
    <MapContainer
      className="h-full w-full"
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={true}
    >
      <TileLayer
        className="map"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customMarkerIcon}></Marker>
      <Circle
        center={[latitude, longitude]}
        pathOptions={{ color: '#50C878', fillColor: '#72FE9F' }}
        radius={200}
      />
    </MapContainer>
  )
}
