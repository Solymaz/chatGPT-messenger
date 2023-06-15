import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firabese";

type Props = {
  id: string;
};
export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;
    setIsActive(pathname.includes(id));
  }, [pathname, id]);

  return (
    <Link
      href={`/chat/${id}}`}
      className={`flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer ${
        isActive ? "bg-[#343541]" : "hover:bg-[#2A2B32]"
      }`}
    >
      <Image src="/newChat.svg" alt="chat icon" height={15} width={15} />
      <p className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative text-sm">
        Chat title
      </p>
      {isActive && (
        <Image src="/bin.svg" alt="delete icon" height={15} width={15} />
      )}
    </Link>
  );
}
