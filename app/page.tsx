import ToastDemoButton from '@/components/atoms/ToastDemoButton'
import ScrollView from '@/components/organisms/ScrollView'
import Section from '@/components/organisms/Section'

export default function Home() {
  return (
    <ScrollView>
      <Section>
        <ToastDemoButton />
      </Section>
      <Section>
        <ToastDemoButton />
      </Section>
    </ScrollView>
  )
}
