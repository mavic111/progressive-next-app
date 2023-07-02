import ChatPanel from '@/components/molecules/ChatPanel'
import ScrollView from '@/components/organisms/ScrollView'
import Section from '@/components/organisms/Section'

export default function Chatbot() {
  return (
    <Section className="min-h-full px-4">
      <ChatPanel />
    </Section>
  )
}
