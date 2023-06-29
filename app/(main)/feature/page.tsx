import FeatureCard from '@/components/molecules/FeatureCard'
import ScrollView from '@/components/organisms/ScrollView'
import Section from '@/components/organisms/Section'
import Link from 'next/link'

export default function Feature() {
  return (
    <ScrollView>
      <Section>
        <h1 className="text-green-500">Green API</h1>
        <ul className="my-4 grid grid-cols-1 gap-4 md:my-6 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {green_apis.map((api) => (
            <Link key={api.id} href={api.path}>
              <FeatureCard title={api.title} description={api.description} />
            </Link>
          ))}
        </ul>
      </Section>
    </ScrollView>
  )
}

const green_apis = [
  {
    id: 0,
    title: 'Geolocation API',
    description:
      "Geolocation obtains the user's location through different providers, such as satellite or Wi-Fi",
    path: '/feature/geolocation',
  },
  {
    id: 1,
    title: 'Cache API',
    description: 'Caching files locally using the Cache API',
    path: '/feature/cache',
  },
  {
    id: 2,
    title: 'Canvas API',
    description:
      '2D Canvas for rendering 2D graphics on the screen using the Canvas API',
    path: '/feature/canvas',
  },
  {
    id: 3,
    title: 'WebRTC API',
    description: 'Real-Time communication using WebRTC API',
    path: '/feature/webrtc',
  },
  {
    id: 4,
    title: 'IndexedDB',
    description:
      'Store data locally with IndexedDB and storage management to query quota and request persistent storage',
    path: '/feature/indexeddb',
  },
  {
    id: 5,
    title: 'Web Audio API',
    description: 'Low-level audio',
    path: '/feature/audio',
  },
  {
    id: 6,
    title: 'Page Visibility API',
    description: 'Foreground detection',
    path: '/feature/pagevisibility',
  },
  {
    id: 7,
    title: 'Fetch & WebSocket API',
    description: 'Network communication using Fetxh API and WebSocket API',
    path: '/feature/fetchandwebsocket',
  },
  {
    id: 8,
    title: 'Media Capture and Streams API',
    description:
      "Geolocation obtains the user's location through different providers, such as satellite or Wi-Fi",
    path: '/feature/mediaandstreams',
  },
  {
    id: 9,
    title: 'Sensors API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/sensors',
  },
  {
    id: 10,
    title: 'Pointers events',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/pointers',
  },
  {
    id: 11,
    title: 'Touch events',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/touch',
  },
  {
    id: 12,
    title: 'Gamepad API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/gamepad',
  },
  {
    id: 13,
    title: 'Authentication',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/authentication',
  },
  {
    id: 14,
    title: 'Web Speech API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/webspeech',
  },
  {
    id: 15,
    title: 'Web Share API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/webshare',
  },
  {
    id: 16,
    title: 'Clipboard API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/clipboard',
  },
  {
    id: 17,
    title: 'Credential Management API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/credential',
  },
  {
    id: 18,
    title: 'Picture in Picture API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/pip',
  },
  {
    id: 19,
    title: 'Fullscreen API',
    description:
      'Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others',
    path: '/feature/fullscreen',
  },
]
