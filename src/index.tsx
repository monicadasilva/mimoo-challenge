import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Providers } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
