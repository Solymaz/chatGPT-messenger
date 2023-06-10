import React from "react";
import { signOut } from "next-auth/react";

export default function Menu() {
  return (
    <div className="bg-[#050509] z-20 mb-2 w-full overflow-hidden rounded-md transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700/50">
      <button className="flex p-3 items-center gap-3" onClick={() => signOut()}>
        <img src="/logout.svg" alt="log out" />
        Log out
      </button>
    </div>
  );
}
