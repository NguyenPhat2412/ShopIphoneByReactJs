const ChatBubble = ({ toggleChat, isOpen }) => {
  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-10 right-10 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      {isOpen ? (
        "❌"
      ) : (
        <div className="text-4xl">
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
      )}
    </button>
  );
};
export default ChatBubble;
