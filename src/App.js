import './App.css'
import React, { useState } from "react";
import JoinScreen from "./Components/JoinScreen";
import ChatScreen from "./Components/ChatScreen";

const App = () => {
  const [username, setUsername] = useState("");
  const [activeScreen, setActiveScreen] = useState("join");
  const [msg, setmsg] = useState("");

  const handleJoin = (enteredUsername) => {
    if (enteredUsername.length === 0) {
      return;
    }

    setUsername(enteredUsername);
    setActiveScreen("chat");
  };

  const handleSendMessage = (message) => {
    console.log(`Message from ${username}: ${message}`);
    setmsg(message)
  };

  const handleExitChat = () => {
    setUsername("");
    setActiveScreen("join");
  };

  return (
    <div className="app">
      {(!username || activeScreen === "join") && (
        <JoinScreen onJoin={handleJoin} />
      )}
      {username && activeScreen === "chat" && (
        <ChatScreen
        message="msg"
          username={username}
          onSendMessage={handleSendMessage}
          onExitChat={handleExitChat}
        />
      )}
    </div>
  );
};

export default App;
