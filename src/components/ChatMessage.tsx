import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAssistant: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAssistant, timestamp }) => {
  return (
    <div className={`flex gap-3 p-4 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
          <img 
            src="/OIP.jpeg" 
            alt="Snelder" 
            className="w-6 h-6 object-contain"
          />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isAssistant ? 'order-2' : 'order-1'}`}>
        <div className={`rounded-2xl px-4 py-3 shadow-sm ${
          isAssistant 
            ? 'bg-snelder-blue text-white rounded-bl-sm' 
            : 'bg-snelder-gray text-snelder-text rounded-br-sm'
        }`}>
          <div className="whitespace-pre-wrap break-words font-opensans text-sm leading-relaxed">
            {message}
          </div>
        </div>
        <div className={`flex items-center gap-2 mt-1 px-2 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
          <span className="text-xs text-gray-500 font-opensans">
            {isAssistant ? 'Snelder Assistant' : 'Jij'}
          </span>
          <span className="text-xs text-gray-400 font-opensans">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-snelder-gray flex items-center justify-center order-2">
          <User className="w-5 h-5 text-snelder-blue" />
        </div>
      )}
    </div>
  );
};