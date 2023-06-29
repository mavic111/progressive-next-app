import ScrollView from '@/components/organisms/ScrollView'

export default function About() {
  return (
    <ScrollView>
      <section className="p-4">
        <h1 className="">Progressive Next App</h1>
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
      </section>
    </ScrollView>
  )
}
