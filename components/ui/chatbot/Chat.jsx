"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./chatform";
import ChatMessage from "./ChatMessage";
import { Bot, BotIcon, Dot } from "lucide-react";
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
      {/* <div className="w-full flex items-center justify-center min-h-[100vh]">
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

          <div className="w-full bg-white p-3"></div>
        </div>
      </div> */}

      {/* <section className="p-4">
        <div className="m-auto flex flex-col gap-4  max-w-3xl bg-gray-400/20 p-4 rounded-md ">
          <div
            ref={ref}
            className="flex flex-col gap-4 overflow-y-auto h-[300px]"
          >
            {chatHistory.map((chat, index) => (
              <div
                className={`p-4 max-w-[80%] rounded-2xl text-white ${
                  chat.role === "model"
                    ? "bg-slate-500 text-left self-start rounded-bl-none"
                    : " text-right bg-purple-500 self-end rounded-br-none"
                }`}
                key={index}
              >
                <motion.h1 className="z-50 text-black">{chat.text}</motion.h1>
              </div>
            ))}
            {loading && (
              <div className="flex w-full items-end justify-center text-white">
                <Dot className="animate-bounce text-white" />
                <Dot className="animate-bounce text-white" />
                <Dot className="animate-bounce text-white" />
              </div>
            )}
          </div>
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
            loading={loading}
          />
        </div>
      </section> */}

      <div className="flex items-center justify-center h-[600px]">
        <article
          ref={ref}
          className="w-[80%] h-[100%] overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-r from-black/70 to-slate-950/80 shadow-md p-6"
        >
          <div
            className="flex flex-col gap-2"
            style={{ minHeight: "calc(100% - 80px)" }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`max-w-[80%] size-fit rounded-xl flex ${
                  chat.role === "model"
                    ? "rounded-bl-none bg-gray-700 justify-start"
                    : "ml-auto rounded-br-none bg-cyan-700 justify-end"
                } p-3 text-gray-50`}
              >
                {chat.text}
              </div>
            ))}
          </div>

          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
            loading={loading}
          />
        </article>
      </div>
    </>
  );
}

export default Chatbox;
