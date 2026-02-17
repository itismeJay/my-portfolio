import { MessageCircle } from "lucide-react";

const ChatButton = () => (
  <button className="fixed bottom-24 sm:bottom-6 right-6 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-xl z-50 animate-fade-in">
    <MessageCircle className="w-4 h-4" />
    Let's Talk 👋
  </button>
);

export default ChatButton;
