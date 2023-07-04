'use client'

import { useChat } from 'ai/react'
import { Button } from '../ui/button'
import { Bot, User } from 'lucide-react'

export default function ChatPanel() {
  const { messages, input, handleInputChange, setInput, handleSubmit } =
    useChat()
  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col justify-between lg:max-w-5xl">
      <div className="no-scrollbar h-full space-y-4 overflow-y-scroll py-4">
        {messages.length > 0 ? (
          messages.map((m) => (
            <ChatBubble key={m.id} role={m.role} content={m.content} />
          ))
        ) : (
          // <span className="flex text-xl font-semibold md:text-3xl">
          //   Welcome to AI Chatbot!
          // </span>
          <div>
            <h1>Welcome to AI Chatbot!</h1>
            <h4 className="text-zinc-600 dark:text-zinc-400">
              AI chatbot powered by HuggingFace.
            </h4>
            <p>
              You can start a conversation here or try the following examples:
            </p>
            <ul className="list-inside list-disc">
              <li
                onClick={() => setInput('What is a "serverless function"?')}
                className="font-semibold hover:cursor-pointer hover:text-zinc-500"
              >
                Explain technical concepts
              </li>
              <li
                onClick={() =>
                  setInput('Summarize the following article for a 2nd grader:')
                }
                className="font-semibold hover:cursor-pointer hover:text-zinc-500"
              >
                Summarize an article
              </li>
              <li
                onClick={() =>
                  setInput('Draft an email to my boss about the following:')
                }
                className="font-semibold hover:cursor-pointer hover:text-zinc-500"
              >
                Draft an email
              </li>
            </ul>
          </div>
        )}
      </div>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <label className="flex space-x-4">
          <input
            placeholder="Say something..."
            className="w-full rounded border border-zinc-300 bg-zinc-100 p-2 focus:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:bg-zinc-950"
            value={input}
            onChange={handleInputChange}
          />
          <Button disabled={input.length === 0} type="submit">
            Send
          </Button>
        </label>
      </form>
    </div>
  )
}

function ChatBubble({ role, content }: { role: string; content: string }) {
  return (
    <div className="mx-1 flex gap-4">
      <div className="box-border flex h-min rounded-xl bg-zinc-100 p-2 shadow dark:bg-zinc-900">
        {role === 'user' ? (
          <User className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
        ) : (
          <Bot className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
        )}
      </div>
      <div className="mt-2 md:mt-3 md:text-lg">{content}</div>
    </div>
  )
}
