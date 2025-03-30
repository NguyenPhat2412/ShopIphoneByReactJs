import { useState } from "react";

const LiveChat = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Gia lap phan hoi tu bot
    setTimeout(() => {
      setMessages(
        (prevMessages) => [
          ...prevMessages,
          { text: "Bot: " + input, sender: "bot" },
        ],
        1000
      );
    });
  };

  return (
    <div
      className={`fixed bottom-30 right-10 w-100 bg-white shadow-lg rounded-lg transition ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
      }`}
    >
      <div>
        <div className="flex justify-between pt-3 px-3 rounded-lg">
          <div className="p-1 font-bold">Customer Support</div>
          <div>
            <div
              className="p-1 px-2
           text-sm text-gray-500 bg-gray-100"
              style={{ margin: "5px" }}
            >{`Let's Chat App`}</div>
          </div>
        </div>
        <div className="p-3 h-60 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-lg text-sm${
                msg.sender === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="p-2 border-t flex bg-gray-100">
          <input
            className="flex-1 p-2 bg-white rounded-md"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Message!"
          />
          <button
            className="ml-2 text-gray-400 p-2 rounded-md"
            onClick={sendMessage}
          >
            <i className="fa-solid fa-paperclip"></i>
          </button>
          <button className="ml-2 text-gray-400 p-2 rounded-md">
            <i className="fa-solid fa-face-smile"></i>
          </button>
          <button
            className="ml-2 text-blue-500 p-2 rounded-md"
            onClick={sendMessage}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LiveChat;
