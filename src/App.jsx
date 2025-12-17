import React from "react";
import "./App.css";
import videoFile from "./assets/44509-439412962_small.mp4";

function App() {
  return (
    <div className="app">
      <video className="background-video" autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content-wrapper">
          <h1 className="overlay-text">Welcome to Sri Eshwar</h1>
          <div className="login-card">
            <h2>Login into your account</h2>
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p className="signup-link">Don't have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;