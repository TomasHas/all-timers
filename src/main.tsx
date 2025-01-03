import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PomodoroContextProvider from "./contexts/PomodoroContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PomodoroContextProvider>
      <App />
    </PomodoroContextProvider>
  </StrictMode>
);
