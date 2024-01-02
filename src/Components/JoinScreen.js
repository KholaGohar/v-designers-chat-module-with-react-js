// JoinScreen.js
import React, { useState } from "react";

const JoinScreen = ({ onJoin }) => {
  const [username, setUsername] = useState("");

  const handleJoinClick = () => {
    onJoin(username);
  };

  return (
    <div className="screen join-screen">
      <div className="form">
        <h2>Join Chatroom</h2>
        <div className="form-input">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <button id="join-user" onClick={handleJoinClick}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinScreen;
