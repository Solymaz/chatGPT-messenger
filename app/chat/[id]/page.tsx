import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat />
      <ChatInput />
    </div>
  );
}
