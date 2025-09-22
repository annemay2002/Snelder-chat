import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAssistant: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAssistant, timestamp }) => {
  return (
    <div className={`flex gap-3 p-4 ${isAssistant ? '' : 'bg-white'}`} 
         style={isAssistant ? { backgroundColor: '#1F4E79' } : {}}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isAssistant ? 'bg-white' : ''
      }`} style={!isAssistant ? { backgroundColor: '#F4F4F4' } : {}}>
        {isAssistant ? (
          <img 
            src="/OIP.jpeg" 
            alt="Snelder" 
            className="w-6 h-6 object-contain"
          />
        ) : (
          <User className="w-5 h-5" style={{ color: '#1F4E79' }} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-sm font-medium font-montserrat ${
            isAssistant ? 'text-white' : 'text-gray-900'
          }`}>
            {isAssistant ? 'Snelder Assistant' : 'Jij'}
          </span>
          <span className={`text-xs font-opensans ${
            isAssistant ? 'text-gray-200' : 'text-gray-500'
          }`}>
            {timestamp.toLocaleTimeString()}
          </span>
        </div>
        <div className={`whitespace-pre-wrap break-words font-opensans ${
          isAssistant ? 'text-white' : ''
        }`} style={!isAssistant ? { color: '#1F1F1F' } : {}}>
          {message}
        </div>
      </div>
    </div>
  );
};