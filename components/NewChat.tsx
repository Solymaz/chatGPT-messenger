import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function NewChat() {
  return (
    <div className="chatRow">
      <PlusIcon className="h-4 w-4" />
      <p> New chat</p>
    </div>
  );
}
