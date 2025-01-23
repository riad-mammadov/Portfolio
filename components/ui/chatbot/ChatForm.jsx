// Ensure this is the complete and correct import statement for ArrowUp
import { ArrowUp } from "lucide-react";
import { useRef } from "react";

function ChatForm({ setChatHistory }) {
  const inputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    console.log(userMessage);

    inputRef.current.value = "";

    //Updates the chat history with new message by spreading old state and adding the new message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center bg-white outline outline-gray-400 rounded-lg"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        required
        className="border-none outline-none w-full bg-none h-[47px] p-2 text-sml"
      />
      <button
        type="submit"
        className="flex justify-center items-center text-white h-8 w-8 border-none outline-none cursor-pointer shrink-0 mr-2 rounded-full bg-gray-700"
      >
        <ArrowUp className="w-6 h-5" />
      </button>
    </form>
  );
}

export default ChatForm;
