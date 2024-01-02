// ChatScreen.js
import React, { useState, useEffect, useRef } from "react";

const ChatScreen = ({ username, onSendMessage, onExitChat }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef();

  const handleSendMessageClick = () => {
    const newMessage = { username, text: inputMessage };
    setMessages([...messages, newMessage]);
    onSendMessage(inputMessage);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessageClick();
    }
  };

  // useEffect to scroll to the bottom when messages change
  useEffect(() => {
    const container = messagesContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div className="screen chat-screen active">
      <div className="header">
        <div className="logo">Chatroom</div>
        <button id="exit-chat" onClick={onExitChat}>
          Exit
        </button>
      </div>
      <div className="messages" ref={messagesContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className="message other-message">
            <div>
              <div className="name">{msg.username}</div>
              <div className="text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="typebox">
        <input
          type="text"
          id="message-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="send-message" onClick={handleSendMessageClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
