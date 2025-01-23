"use client";
import { useState } from "react";
import ChatForm from "./chatform";

function Chatbox() {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="w-full flex items-center justify-center min-h-[100vh]">
      <div className="bg-white, w-[600px] border-2 rounded-[15px] overflow-hidden relative">
        <div className="bg-gray-600/50 flex items-center justify-between py-4 px-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-lg font-semibold text-white">Chatbot</h2>
          </div>
        </div>

        <div className="p-5 overflow-y-auto flex flex-col gap-4 h-[460px]">
          <div className="flex items-center gap-5">
            <p className="break-words p-2 whitespace-pre-line border-2 border-gray-500 rounded-lg text-sm text-white">
              Hey there, I'm Riad! Ask anything about me & my projects.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="bg-gray-500/40 border-2 text-sm p-2 rounded-lg border-gray-500 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              tenetur odit.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-white p-3">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
