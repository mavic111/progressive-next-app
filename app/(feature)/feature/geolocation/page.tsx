import MyLocation from '@/components/molecules/MyLocation'
import Section from '@/components/organisms/Section'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export default function Geolocation() {
  return (
    <Section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <Card className="flex h-max flex-col justify-between rounded-2xl bg-violet-200 dark:bg-violet-800">
        <CardHeader>
          <h1>Geolocation</h1>
          <p>
            The Geolocation API is used to retrieve the user's location, so that
            it can for example be used to display their position using a mapping
            API.
          </p>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-col space-y-4">
            <Link
              href={
                'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={'default'}>Documentation</Button>
            </Link>
            <Link
              href={'https://caniuse.com/#feat=geolocation'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={'default'}>Browser support</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

      <MyLocation />
    </Section>
  )
}
