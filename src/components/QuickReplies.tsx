import React from 'react';
import { MessageCircle, Info, Phone, Settings } from 'lucide-react';

interface QuickRepliesProps {
  onQuickReply: (message: string) => void;
}

const quickReplies = [
  {
    icon: MessageCircle,
    text: "Wat kan je voor me doen?",
    message: "Wat kan je voor me doen?"
  },
  {
    icon: Info,
    text: "Over Snelder",
    message: "Vertel me meer over Snelder"
  },
  {
    icon: Phone,
    text: "Contact",
    message: "Hoe kan ik contact opnemen?"
  },
  {
    icon: Settings,
    text: "Diensten",
    message: "Welke diensten biedt Snelder aan?"
  }
];

export const QuickReplies: React.FC<QuickRepliesProps> = ({ onQuickReply }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {quickReplies.map((reply, index) => {
        const Icon = reply.icon;
        return (
          <button
            key={index}
            onClick={() => onQuickReply(reply.message)}
            className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-snelder-gray border border-gray-200 rounded-xl transition-colors text-left"
          >
            <Icon className="w-4 h-4 text-snelder-blue flex-shrink-0" />
            <span className="font-opensans text-sm text-snelder-text truncate">
              {reply.text}
            </span>
          </button>
        );
      })}
    </div>
  );
};