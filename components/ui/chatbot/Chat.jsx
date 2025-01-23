"use client";
import { useState, useEffect, useRef } from "react";
import ChatForm from "./chatform";
import ChatMessage from "./ChatMessage";
import { Bot } from "lucide-react";

function Chatbox() {
  const [chatHistory, setChatHistory] = useState([]);

  // Thinking... display for the bot each time user sends message as placeholder
  useEffect(() => {
    if (
      chatHistory.length > 0 &&
      chatHistory[chatHistory.length - 1].role === "user"
    ) {
      const timer = setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { role: "bot", text: "Thinking..." },
        ]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [chatHistory]);

  return (
    <div className="w-full flex items-center justify-center min-h-[100vh]">
      <div className="bg-gray-500/40 w-[600px] border-2 rounded-[15px] relative flex flex-col h-[600px]">
        <div className="bg-gray-600/50 flex items-center justify-between py-4 px-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-lg font-semibold text-white">Chatbot</h2>
          </div>
        </div>

        <div className="p-5 overflow-y-auto flex flex-col gap-4 flex-grow">
          <div className="flex items-center gap-5">
            <Bot color="white" />
            <p className="break-words p-2 whitespace-pre-line border-2 border-gray-500 rounded-lg text-sm text-white">
              Hey there, I'm Riad! Ask anything about me & my projects.
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="w-full bg-white p-3">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
