import { useState } from "react";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I'm PinkMart's assistant. I can help you find businesses, services, and categories around your campus!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((current) => [
      ...current,
      { role: "user", text: userMessage },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            data.reply ||
            "Sorry, I couldn't get a response right now.",
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "Sorry! I can't connect to PinkMart's AI right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="pinkmart-chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        ✦ Ask PinkMart
      </button>

      {isOpen && (
        <div className="pinkmart-chat-window">
          <div className="chat-header">
            <div>
              <strong>PinkMart AI ✦</strong>
              <span>Your campus assistant</span>
            </div>

            <button onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`chat-message ${item.role}`}
              >
                {item.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant">
                Thinking... ✦
              </div>
            )}
          </div>

          <form
            className="chat-input-area"
            onSubmit={sendMessage}
          >
            <input
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Ask me anything..."
            />

            <button type="submit">→</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBox;