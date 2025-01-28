"use client";

import { Dot, Forward } from "lucide-react";
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
    // <form
    //   action="#"
    //   onSubmit={handleFormSubmit}
    //   className="flex items-center bg-white outline outline-gray-400 rounded-lg"
    // >
    //   <input
    //     ref={inputRef}
    //     type="text"
    //     placeholder="Message..."
    //     required
    //     className="border-none outline-none flex-grow bg-none h-[47px] p-2 text-sm"
    //   />
    //   <button className="flex justify-center items-center text-white h-8 w-8 border-none outline-none cursor-pointer shrink-0 mr-2 rounded-full bg-gray-700">
    //     <ArrowUp className="w-6 h-5" />
    //   </button>
    // </form>

    // <form className="flex items-center" onSubmit={handleFormSubmit}>
    //   <input
    //     ref={inputRef}
    //     className="flex-1 border rounded rounded-r-none border-gray-400 py-2 px-4"
    //     required
    //     placeholder="Message..."
    //     type="text"
    //   />
    //   <button
    //     disabled={loading}
    //     className={`px-4 py-2 bg-blue-500 rounded-lg rounded-l-none ${loading} ? bg-blue-300 :bg-blue-500 `}
    //     type="submit"
    //   >
    //     Send
    //   </button>
    // </form>

    <form onSubmit={handleFormSubmit} className="w-full">
      <div className="relative mt-8 flex">
        <input
          ref={inputRef}
          name="question"
          id="question"
          className="block h-12 w-[95%] rounded-md rounded-r-none  border border-gray-800 bg-gray-500/20 px-4 py-2 text-gray-300 focus:outline-none md:px-6"
        />
        <button
          type="submit"
          className={`flex h-12 w-[15%] items-center justify-center rounded-r-md border border-gray-800 bg-gradient-to-r from-black to-gray-950 md:w-[10%] ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <Forward className="text-white" />
        </button>
      </div>
    </form>
  );
}

export default ChatForm;
