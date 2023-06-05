import React from "react";
import NewChat from "./NewChat";

export default function SideBar() {
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
    </div>
  );
}
