import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        {/* Extra buttons */}
        <button
          type="button"
          className="text-gray-400 hover:text-snelder-blue transition-colors p-2"
          disabled={isLoading}
        >
          <Paperclip className="w-5 h-5" />
        </button>
        
        {/* Input field */}
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Typ je bericht..."
            className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-snelder-orange focus:border-transparent font-opensans text-snelder-text placeholder-gray-400 text-sm"
            rows={1}
            disabled={isLoading}
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          
          {/* Emoji button */}
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-snelder-blue transition-colors"
            disabled={isLoading}
          >
            <Smile className="w-5 h-5" />
          </button>
        </div>
        
        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="bg-snelder-orange hover:bg-orange-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors flex items-center justify-center"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};