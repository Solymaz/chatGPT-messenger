"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Menu from "./Menu";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firabese";
import ChatRow from "./ChatRow";
import Image from "next/image";

export default function SideBar() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createAt", "asc") // the messages will be in time order (ascending)
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
      Sidebar
      <div className="flex-1">
        <div>
          <NewChat />
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <>
          {showMenu && <Menu />}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-700/50
              ${showMenu && "bg-gray-700/50"}`}
          >
            <Image
              src={session.user?.image!}
              alt="profile image"
              className="h-10 w-10 rounded-full"
            />
            <div>{session.user?.email!}</div>
            <Image src="/threeDots.svg" alt="three dots icon" />
          </button>
        </>
      )}
    </div>
  );
}
