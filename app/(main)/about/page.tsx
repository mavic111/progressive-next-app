import ScrollView from '@/components/organisms/ScrollView'
import Section from '@/components/organisms/Section'

export default function About() {
  return (
    <ScrollView>
      <Section className="min-h-full p-4">
        <h1>Progressive Next App</h1>
        <p>
          Progressive Next App is a cutting-edge Next.js application that
          seamlessly combines the power of Next.js with Progressive Web App
          (PWA) capabilities. With the added PWA capabilities, Progressive Next
          App ensures a native-like experience for users across various devices
          and platforms. Users can effortlessly install the application on their
          devices, allowing them to access it offline, receive push
          notifications, and enjoy smooth navigation through an app-like
          interface.
        </p>
      </Section>
    </ScrollView>
  )
}
