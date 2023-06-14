import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};
export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setIsActive(pathname.includes(id));
  }, [pathname, id]);

  return (
    <Link
      href={`/chat/${id}}`}
      className={`flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer ${
        isActive && "bg-[#343541]"
      }`}
    >
      <Image src="/newChat.svg" alt="chat icon" height={15} width={15} />
      <p className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative text-sm">
        Chat title
      </p>
    </Link>
  );
}
