import MyLocation from '@/components/molecules/MyLocation'
import ScrollView from '@/components/organisms/ScrollView'
import Section from '@/components/organisms/Section'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export default function Geolocation() {
  return (
    <ScrollView>
      <Section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8">
        <Card className="flex h-max flex-col justify-between rounded-2xl bg-violet-200 dark:bg-violet-800">
          <CardHeader>
            <h1>Geolocation</h1>
            <p>
              The Geolocation API is used to retrieve the user&apos;s location,
              so that it can for example be used to display their position using
              a mapping API.
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
    </ScrollView>
  )
}
