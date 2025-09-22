import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAssistant: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAssistant, timestamp }) => {
  return (
    <div className={`flex gap-3 py-4 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-snelder-blue flex items-center justify-center">
          <img 
            src="/snelder-logo.png" 
            alt="Snelder" 
            className="w-5 h-5 object-contain brightness-0 invert"
          />
        </div>
      )}
      
      <div className={`max-w-sm lg:max-w-md ${isAssistant ? 'order-2' : 'order-1'}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isAssistant 
            ? 'bg-snelder-blue text-white rounded-bl-md' 
            : 'bg-snelder-gray text-snelder-text rounded-br-md'
        }`}>
          <div className="whitespace-pre-wrap break-words font-opensans text-sm leading-relaxed">
            {message}
          </div>
        </div>
        <div className={`flex items-center gap-2 mt-2 px-1 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
          <span className="text-xs text-gray-400 font-opensans">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-snelder-gray flex items-center justify-center order-2">
          <User className="w-4 h-4 text-snelder-blue" />
        </div>
      )}
    </div>
  );
};