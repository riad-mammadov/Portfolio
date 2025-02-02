"use client";

import { Forward } from "lucide-react";
import { useRef } from "react";

function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
  loading,
}) {
  const inputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage) {
      console.log("Error");
      return;
    }

    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Calls function that generates the response
    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className="relative mt-8 flex">
        <input
          ref={inputRef}
          name="question"
          id="question"
          className="block h-12 w-[95%] rounded-md rounded-r-none bg-gray-500/20 px-4 py-2 text-gray-300 focus:outline-none md:px-6"
        />
        <div className="group relative h-12 w-[15%] flex items-center justify-center overflow-hidden rounded-r-md border border-gray-800 bg-gray-500 md:w-[10%]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800/50 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full"></div>
          <button
            type="submit"
            className={` z-10 flex items-center justify-center h-full w-full rounded-r-md border border-gray-800 bg-transparent text-white ${
              loading ? "cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            <Forward />
          </button>
        </div>
      </div>
    </form>
  );
}

export default ChatForm;
