"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./chatform";
import ChatMessage from "./ChatMessage";
import { Bot } from "lucide-react";
import { aiPrompt } from "@/utils/ai";

function Chatbox() {
  const [chatHistory, setChatHistory] = useState([]);
  const ref = useRef(null);

  function updateHistory(text, isError = false) {
    setChatHistory((prev) => [...prev, { role: "model", text, isError }]);
  }

  async function generateBotResponse(history) {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    console.log(history);

    const question = history[history.length - 1].parts[0].text;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: aiPrompt(question),
              },
            ],
          },
        ],
      }),
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      const regex = /\*\*(.*?)\*\*/g;
      const apiRequestText = data.candidates[0].content.parts[0].text
        .replace(regex, "$1")
        .trim();
      updateHistory(apiRequestText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  }

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="w-full flex items-center justify-center min-h-[100vh]">
      <div className="bg-gray-500/40 w-[600px] border-2 rounded-[15px] relative flex flex-col h-[600px]">
        <div className="bg-gray-600/50 flex items-center justify-between py-4 px-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-lg font-semibold text-white">Chatbot</h2>
          </div>
        </div>

        <div
          ref={ref}
          className="p-5 overflow-y-auto flex flex-col gap-4 flex-grow"
        >
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
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
