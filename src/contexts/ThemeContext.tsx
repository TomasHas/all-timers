import { createContext, ReactNode, useState } from "react";

import { colors } from "./../utils";

type ColorSet = {
  buttonColor: string;
  buttonFocus: string;
  buttonHover: string;
  componentBackgroundColor: string;
  mainBackgroundColor: string;
  TimerButtonActiveBg: string;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  changeSeconds: (themeName: string, seconds: number) => void;
  selectTheme: (themeName: string) => void;
  pomodoro: Theme;
  shortBreak: Theme;
  longBreak: Theme;
};

export type Theme = {
  name: string;
  colors: ColorSet;
  secondsLeft: number;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [pomodoro, setPomodoro] = useState<Theme>({
    name: "pomodoro",
    secondsLeft: 1500,
    colors: colors["red"],
  });
  const [shortBreak, setShortBreak] = useState<Theme>({
    name: "shortBreak",
    secondsLeft: 300,
    colors: colors["blue"],
  });
  const [longBreak, setLongBreak] = useState<Theme>({
    name: "longBreak",
    secondsLeft: 900,
    colors: colors["green"],
  });
  const [theme, setTheme] = useState<Theme>(pomodoro);
  // console.log(theme.name);

  const changeSeconds = (theme: string, seconds: number) => {
    switch (theme) {
      case "pomodoro":
        console.log("changing seconds", theme, seconds);

        setPomodoro({ ...pomodoro, secondsLeft: seconds });
        console.log(pomodoro);
        break;
      case "shortBreak":
        setShortBreak({ ...shortBreak, secondsLeft: seconds });
        break;
      case "longBreak":
        setLongBreak({ ...longBreak, secondsLeft: seconds });
        break;

      default:
        break;
    }
  };

  const selectTheme = (themeName: string) => {
    switch (themeName) {
      case "pomodoro":
        setTheme(pomodoro);
        break;
      case "shortBreak":
        setTheme(shortBreak);
        break;
      case "longBreak":
        setTheme(longBreak);
        break;

      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        pomodoro,
        longBreak,
        shortBreak,
        changeSeconds,
        selectTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
