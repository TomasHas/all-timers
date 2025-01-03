import { useContext } from "react";
import { PomodoroContext } from "./contexts/PomodoroContext";
export function usePomodoro() {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
