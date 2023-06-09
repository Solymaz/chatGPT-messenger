"use client";

import { useSession } from "next-auth/react";
import NewChat from "./NewChat";

export default function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
      Sidebar
      <div className="flex-1">
        <div>
          <NewChat />
          <div>model selection</div>
          chat rowas
        </div>
      </div>
      {session && (
        <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-700/50">
          <img
            src={session.user?.image!}
            alt="profile image"
            className="h-10 w-10 rounded-full"
          />
          <div>{session.user?.email!}</div>
          <img src="/threeDots.svg" alt="three dots icon" />
        </button>
      )}
    </div>
  );
}
