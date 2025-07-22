// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="App" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h2>{authMode === "login" ? "Login" : "Register"}</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        {authMode === "register" && (
          <input
            type="text"
            placeholder="Name"
            style={inputStyle}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          {authMode === "login" ? "Login" : "Register"}
        </button>
      </form>
      <p
        onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}
        style={{ marginTop: "1rem", cursor: "pointer", color: "#888" }}
      >
        {authMode === "login" ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid #333",
  backgroundColor: "#111",
  color: "#fff",
};

const buttonStyle = {
  padding: "0.75rem",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#1a1a1a",
  color: "#fff",
  cursor: "pointer",
};

export default App;
