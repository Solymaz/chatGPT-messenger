import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

export default function ChatPage(props: Props) {
  const id = props.params.id;
  return (
    <div className="flex flex-col h-screen overflow-hidden items-center">
      <Chat chatId={id} />
      <ChatInput id={id} />
    </div>
  );
}
