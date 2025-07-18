import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app";
import "@/app.css";

const ERROR_MESSAGE = "Root element not found";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(ERROR_MESSAGE);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
