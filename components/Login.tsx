import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-[#343541] h-screen flex flex-col items-center justify-center text-center font-light leading-9">
      <Image
        src="/ChatGPT_logo.svg"
        alt="ChatGPT logo"
        height={55}
        width={55}
      />
      <p>Welcome to ChatGPT</p>
      <p>Log in with your OpenAI account to continue</p>
      <div className="flex flex-row gap-3">
        <button className="button">Log in</button>
        <button className="button">Sign up</button>
      </div>
    </div>
  );
}
