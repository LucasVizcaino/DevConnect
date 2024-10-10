import React, { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'

const Messaging: React.FC = () => {
  const [message, setMessage] = useState('')
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)

  // Mock conversation data (replace with actual data fetching)
  const conversations = [
    { id: 1, name: 'Alice Smith', lastMessage: "Hey, how's the project going?", unread: 2 },
    { id: 2, name: 'Bob Johnson', lastMessage: 'Can you review my code?', unread: 0 },
    { id: 3, name: 'Charlie Brown', lastMessage: 'Meeting at 3 PM tomorrow', unread: 1 },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement sending message logic
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="flex h-[600px]">
        <div className="w-1/3 border-r pr-4">
          <h2 className="text-lg font-semibold mb-2">Conversations</h2>
          <ul className="space-y-2">
            {conversations.map((conv) => (
              <li
                key={conv.id}
                className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${
                  selectedConversation === conv.id ? 'bg-blue-100' : ''
                }`}
                onClick={() => setSelectedConversation(conv.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{conv.name}</span>
                  {conv.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 pl-4 flex flex-col">
          {selectedConversation ? (
            <>
              <div className="flex-grow overflow-y-auto mb-4 p-4 bg-gray-100 rounded">
                {/* Add message history here */}
              </div>
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="bg-gray-200 text-gray-600 px-3 py-2 hover:bg-gray-300 transition duration-300"
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messaging