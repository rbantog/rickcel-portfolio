import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="flex items-center justify-center m-2">
      <a
        className="absolute top-0 left-0 m-2"
        href="https://rickcelbantog.com/"
      >
        <ArrowBackIosNewIcon />
      </a>
      <App />
    </div>
  </React.StrictMode>
);
