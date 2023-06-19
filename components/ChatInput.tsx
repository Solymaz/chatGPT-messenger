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
        <button
          type="submit"
          disabled={!prompt}
          className={`${
            prompt && "bg-[#18c37d]"
          } rounded-md p-1 h-8 w-8 m-1 place-content-center items-center flex`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#6a6b7a"
            className={`${prompt && "fill-white"} h-4 w-4 m-1 md:m-0`}
            stroke-width="2"
          >
            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
