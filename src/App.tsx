import React, { useEffect, useRef } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { QuickReplies } from './components/QuickReplies';
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

  const handleQuickReply = (message: string) => {
    sendMessage(message);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px]">
        {/* Header */}
        <header className="bg-snelder-blue text-white p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <img 
              src="/OIP.jpeg" 
              alt="Snelder Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <h1 className="font-montserrat font-semibold text-lg">SnelderBot</h1>
            <p className="text-blue-200 text-sm font-opensans">Online • Altijd beschikbaar</p>
          </div>
        </header>

        {/* Error Banner */}
        {error && (
          <div className="bg-red-50 border-b border-red-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-snelder-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/OIP.jpeg" 
                  alt="Snelder Logo" 
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
              </div>
              <h2 className="font-montserrat font-semibold text-lg text-snelder-text mb-2">
                Welkom bij SnelderBot! 👋
              </h2>
              <p className="font-opensans text-sm text-gray-600 mb-6">
                Ik ben hier om je te helpen met al je vragen over Snelder.
              </p>
              <QuickReplies onQuickReply={handleQuickReply} />
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
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-snelder-blue rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src="/OIP.jpeg" 
                  alt="SnelderBot" 
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-snelder-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-snelder-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-snelder-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm font-opensans text-gray-600">SnelderBot typt...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies (alleen tonen als er nog geen berichten zijn) */}
        {messages.length > 0 && !isLoading && (
          <div className="px-4 pb-2">
            <QuickReplies onQuickReply={handleQuickReply} />
          </div>
        )}

        {/* Input */}
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;