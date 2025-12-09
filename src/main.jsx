import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";  // App is now inside src directly
import "./index.css"; // optional but recommended if you created it

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
