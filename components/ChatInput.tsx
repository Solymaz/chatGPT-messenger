"use client";

import Image from "next/image";
import { useState } from "react";

export default function ChatInput(chatId: string) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="bg-[#40414f] text-[#6a6b7a] rounded-lg text-sm ">
      <form className="p-5 space-x-5 flex">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Send a message"
          className="bg-transparent focus:outline-none flex-1 "
        />
        <button type="submit" disabled={!prompt}>
          <Image
            className={`${prompt && "bg-[#18c37d] fill"} rounded-md p-1`}
            src="/send.svg"
            alt="send icon"
            height={20}
            width={20}
          />
        </button>
      </form>
    </div>
  );
}
