"use client";

import { ArrowUp } from "lucide-react";
import { useRef } from "react";

function ChatForm({ setChatHistory }) {
  const inputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage) {
      console.log("Error");
      return;
    }

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", text: userMessage },
    ]);

    inputRef.current.value = "";
  }

  return (
    <form
      action="#"
      onSubmit={handleFormSubmit}
      className="flex items-center bg-white outline outline-gray-400 rounded-lg"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        required
        className="border-none outline-none flex-grow bg-none h-[47px] p-2 text-sm"
      />
      <button className="flex justify-center items-center text-white h-8 w-8 border-none outline-none cursor-pointer shrink-0 mr-2 rounded-full bg-gray-700">
        <ArrowUp className="w-6 h-5" />
      </button>
    </form>
  );
}

export default ChatForm;
