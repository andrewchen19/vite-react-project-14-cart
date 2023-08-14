import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// to wrap entire application
import AppContext from "./content";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
