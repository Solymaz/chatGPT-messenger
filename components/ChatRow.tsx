import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
};
export default function ChatRow({ id }: Props) {
  return (
    <Link
      href={`/chat/${id}}`}
      className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all"
    >
      <Image src="/newChat.svg" alt="chat icon" height={15} width={15} />
      <p className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative text-sm">
        Chat title
      </p>
    </Link>
  );
}
