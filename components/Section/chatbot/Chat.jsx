"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./ChatForm";
import { Dot, Info, User } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";

function Chat() {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      text: "Hello, I'm Riad!",
    },
    {
      role: "model",
      text: "Feel free to ask anything about me, my education, and projects that i have worked on, i'm happy to share!",
    },
  ]);
  const ref = useRef(null);
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function updateHistory(text, isError = false) {
    setChatHistory((prev) => [...prev, { role: "model", text, isError }]);
  }

  function formatApiResponse(apiResponseText) {
    // Double newlines indicate a new paragraph
    return apiResponseText
      .split("\n\n")
      .map((paragraph) => `<p>${paragraph.trim()}</p>`)
      .join("<br>");
  }

  async function generateBotResponse(history) {
    setIsLoading(true);
    const question = history[history.length - 1].text;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const apiResponseText = data.candidates[0].content.parts[0].text;
        const formattedResponse = formatApiResponse(apiResponseText);
        updateHistory(formattedResponse);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Chat Error:", error);
      updateHistory(
        "Apologies — something went wrong on our end. Please try again in a moment.",
        true
      );
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
      <span className="flex items-center justify-center mb-6 z-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
              <User className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="w-6 h-6 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-500/50 flex items-center justify-center transition-all duration-200">
                        <Info className="w-4 h-4 text-blue-400" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-72 bg-gray-800 border-gray-600 text-white mb-4">
                      <p className="text-center leading-relaxed text-xs">
                        Gemini may occasionally encounter issues beyond my
                        control, which can result in errors. If you have any
                        questions, feel free to reach out using the contact form
                        below.
                        <br />
                        <br />
                        Please note: The responses may occasionally contain
                        inaccuracies.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-md sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Curious to learn more? My AI Assistant is here to help! Ask
            questions about my background, education, skills, or any of the
            projects I’ve worked on.
          </p>
        </motion.div>
      </span>
      <div className="flex flex-col items-center justify-center h-[400px]">
        <article
          ref={ref}
          className="w-[90%] md:w-[75%] h-[100%] overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-bl from-slate-950/80 to-gray-950/80 shadow-md p-6"
        >
          <div
            className="flex flex-col gap-2"
            style={{ minHeight: "calc(100% - 80px)" }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: chat.text }}
                className={`max-w-[100%] sm:max-w-[80%] text-sm sm:text-base font-italic size-fit rounded-xl ${
                  chat.role === "model"
                    ? "rounded-bl-none bg-gray-700 justify-start"
                    : "ml-auto rounded-br-none bg-cyan-700 justify-end"
                } p-3 text-gray-50`}
              ></div>
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
      <div className="w-full px-[5%] sm:px-[20%] ">
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

export default Chat;
