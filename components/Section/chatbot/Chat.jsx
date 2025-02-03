"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./chatform";
import { Dot, User } from "lucide-react";

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

  function formatApiResponse(apiResponseText) {
    // Double newlines indicate a new paragraph
    return apiResponseText
      .split("\n\n")
      .map((paragraph) => `<p>${paragraph.trim()}</p>`)
      .join("<br>");
  }

  async function generateBotResponse(history) {
    setIsLoading(true);
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    console.log(history);

    const question = history[history.length - 1].parts[0].text;

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
        throw new Error(data.error.message || "Something went wrong!");
      }
      const apiResponseText = data.candidates[0].content.parts[0].text;
      const formattedResponse = formatApiResponse(apiResponseText);
      updateHistory(formattedResponse);
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
      <span className="flex items-center justify-center gap-4 mb-10 z-10 ">
        <User className="animate-bounce text-cyan-700" />
        <h1 className="text-center text-xl tracking-wide sm:text-3xl text-white font-semibold">
          About Me
        </h1>
      </span>
      <div className="flex items-center justify-center h-[400px]">
        <article
          ref={ref}
          className="w-[90%] md:w-[75%] h-[100%] overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-bl from-gray-200/20 to-gray-400/20 shadow-md p-6"
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
