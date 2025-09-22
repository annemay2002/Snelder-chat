import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAssistant: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAssistant, timestamp }) => {
  return (
    <div className={`flex items-start gap-3 ${isAssistant ? '' : 'flex-row-reverse'}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isAssistant 
          ? 'bg-snelder-blue' 
          : 'bg-snelder-orange'
      }`}>
        {isAssistant ? (
          <img 
            src="/OIP.jpeg" 
            alt="SnelderBot" 
            className="w-4 h-4 object-contain brightness-0 invert"
          />
        ) : (
          <User className="w-4 h-4 text-white" />
        )}
      </div>
      
      {/* Message Bubble */}
      <div className={`max-w-xs ${isAssistant ? '' : 'text-right'}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isAssistant 
            ? 'bg-snelder-blue text-white rounded-tl-sm' 
            : 'bg-snelder-gray text-snelder-text rounded-tr-sm'
        }`}>
          <div className={`whitespace-pre-wrap break-words leading-relaxed ${
            isAssistant 
              ? 'font-opensans text-base' 
              : 'font-opensans text-sm'
          }`}>
            {message}
          </div>
        </div>
        
        {/* Timestamp */}
        <div className={`mt-1 px-1 ${isAssistant ? 'text-left' : 'text-right'}`}>
          <span className="text-xs text-gray-400 font-opensans">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};