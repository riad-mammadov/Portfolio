"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./chatform";
import ChatMessage from "./ChatMessage";
import { Bot, BotIcon, Dot, User } from "lucide-react";
import { aiPrompt } from "@/utils/ai";
import { motion } from "framer-motion";

function Chatbox() {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      text: "Hello, I'm Riad!",
    },
    {
      role: "model",
      text: "Feel free to ask anything about me, my education, projects and hobbies, i'm happy to share!",
    },
  ]);
  const ref = useRef(null);
  const [loading, setIsLoading] = useState(false);

  function updateHistory(text, isError = false) {
    setChatHistory((prev) => [...prev, { role: "model", text, isError }]);
  }

  async function generateBotResponse(history) {
    setIsLoading(true);
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
    setIsLoading(false);
  }

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <>
      <span className="text-white flex gap-4 justify-center mb-6 items-center">
        <User />
        <h1 className="text-center text-xl tracking-wide sm:text-2xl text-stone-300 font-semibold">
          About Me
        </h1>
      </span>

      <div className="flex items-center justify-center h-[500px]">
        <article
          ref={ref}
          className="w-[90%] sm:w-[60%] h-[100%] overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-bl from-gray-200/20 to-gray-400/20 shadow-md p-6"
        >
          <div
            className="flex flex-col gap-2"
            style={{ minHeight: "calc(100% - 80px)" }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`max-w-[100%] sm:max-w-[80%] text-sm sm:text-base font-italic size-fit rounded-xl flex ${
                  chat.role === "model"
                    ? "rounded-bl-none bg-gray-700 justify-start"
                    : "ml-auto rounded-br-none bg-cyan-700 justify-end"
                } p-3 text-gray-50`}
              >
                {chat.text}
              </div>
            ))}
          </div>
          {loading && (
            <div className="flex flex-row w-full justify-center items-end h-[15%]">
              <Dot className="animate-bounce text-white" />
              <Dot className="animate-bounce text-white" />
              <Dot className="animate-bounce text-white" />
            </div>
          )}
        </article>
      </div>
      <div className="w-full px-[5%] sm:px-[20%]">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Chatbox;
