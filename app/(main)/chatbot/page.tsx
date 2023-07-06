import ChatPanel from '@/components/molecules/ChatPanel'
import Section from '@/components/organisms/Section'

export default function Chatbot() {
  return (
    <Section className="min-h-full p-4 md:p-0">
      <ChatPanel />
    </Section>
  )
}
