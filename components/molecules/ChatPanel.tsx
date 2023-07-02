'use client'

import { useChat } from 'ai/react'
import { Button } from '../ui/button'
import { Bot, User } from 'lucide-react'

export default function ChatPanel() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col justify-between">
      <div className="no-scrollbar h-full space-y-4 overflow-y-scroll py-4">
        {messages.length > 0 ? (
          messages.map((m) => (
            <ChatBubble key={m.id} role={m.role} content={m.content} />
          ))
        ) : (
          <span className="text-xl font-semibold md:text-3xl">
            Welcome to AI Chatbot!
          </span>
        )}
      </div>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <label className="flex space-x-4">
          <input
            placeholder="Say something..."
            className="w-full rounded border border-gray-300 p-2 shadow-xl"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </label>
      </form>
    </div>
  )
}

function ChatBubble({ role, content }: { role: string; content: string }) {
  return (
    <div className="flex gap-2">
      {role === 'user' ? (
        <User className="h-6 w-6 shrink-0" />
      ) : (
        <Bot className="h-6 w-6 shrink-0" />
      )}
      {content}
    </div>
  )
}
