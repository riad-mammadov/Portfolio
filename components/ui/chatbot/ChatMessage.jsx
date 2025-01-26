import { Bot } from "lucide-react";

function ChatMessage({ chat }) {
  const isBot = chat.role === "model";

  return (
    <div
      className={`flex ${isBot ? "items-center gap-5" : "justify-end"} w-full`}
    >
      {isBot && <Bot color="white" />}
      <div
        className={`${
          isBot
            ? " border-gray-500 text-white"
            : "bg-blue-300 border-blue-500 text-black"
        } ${
          chat.isError && "text-red-600"
        } border-2  rounded-lg text-sm p-2 whitespace-pre-line break-words max-w-[70%]`}
      >
        <p>{chat.text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
