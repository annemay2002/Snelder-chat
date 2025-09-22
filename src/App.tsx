import React, { useEffect, useRef } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isLoading, error, sendMessage, clearError } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img 
                src="/OIP.jpeg" 
                alt="Snelder Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-snelder-text font-montserrat">Snelder AI Assistant</h1>
              <p className="text-xs text-gray-500 font-opensans">Jouw persoonlijke assistent</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full bg-white shadow-sm">
        {/* Error Banner */}
        {error && (
          <div className="bg-red-50 border border-red-200 p-4 m-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-700 font-opensans text-sm">{error}</span>
              </div>
              <button
                onClick={clearError}
                className="text-red-400 hover:text-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full text-gray-500 py-16">
              <div className="text-center">
                <img 
                  src="/OIP.jpeg" 
                  alt="Snelder Logo" 
                  className="w-12 h-12 mx-auto mb-6 object-contain opacity-40"
                />
                <h2 className="font-montserrat text-lg font-semibold text-gray-700 mb-2">Welkom bij Snelder AI</h2>
                <p className="font-opensans text-sm text-gray-500 max-w-sm">Stel je vraag en ontvang direct een antwoord van je persoonlijke assistent</p>
              </div>
            </div>
          )}
          
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isAssistant={message.isAssistant}
              timestamp={message.timestamp}
            />
          ))}
          
          {isLoading && (
            <div className="flex gap-3 py-4 justify-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-snelder-blue flex items-center justify-center">
                <img 
                  src="/OIP.jpeg" 
                  alt="Snelder" 
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </div>
              <div className="max-w-xs">
                <div className="rounded-2xl px-4 py-3 bg-snelder-blue text-white rounded-bl-md">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm font-opensans">Aan het typen...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;