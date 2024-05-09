import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppStateProvider } from "./providers/state.provider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>,
);
