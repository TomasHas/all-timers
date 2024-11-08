import { createContext, ReactNode, useEffect, useState } from "react";

import { colors, ColorProperties } from "./../utils";

type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  changeSeconds: (themeName: string, seconds: number) => void;
  selectTheme: (themeName: string) => void;
  changeThemeColor: (themeName: string, themeColor: string) => void;
  pomodoro: Theme;
  shortBreak: Theme;
  longBreak: Theme;
  autoBreakStatus: boolean;
  autoBreakToggle: () => void;
};

export type Theme = {
  name: string;
  colors: ColorProperties;
  secondsLeft: number;
  colorId: string;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [pomodoro, setPomodoro] = useState<Theme>({
    name: "pomodoro",
    secondsLeft: 1500,
    colors: colors["red"],
    colorId: "red",
  });
  const [shortBreak, setShortBreak] = useState<Theme>({
    name: "shortBreak",
    secondsLeft: 300,
    colors: colors["blue"],
    colorId: "blue",
  });
  const [longBreak, setLongBreak] = useState<Theme>({
    name: "longBreak",
    secondsLeft: 900,
    colors: colors["green"],
    colorId: "green",
  });
  const [theme, setTheme] = useState<Theme>(pomodoro);
  const [autoBreakStatus, setAutoBreakStatus] = useState(false);
  console.log(autoBreakStatus);

  useEffect(() => {
    if (theme.name === "pomodoro") setTheme(pomodoro);
    else if (theme.name === "shortBreak") setTheme(shortBreak);
    else if (theme.name === "longBreak") setTheme(longBreak);
  }, [pomodoro, shortBreak, longBreak, theme.name]);

  const autoBreakToggle = (): void => {
    setAutoBreakStatus((s) => !s);
  };

  const changeSeconds = (theme: string, seconds: number) => {
    console.log("contexChangeSeconds", theme, seconds);

    switch (theme) {
      case "pomodoro":
        setPomodoro({ ...pomodoro, secondsLeft: seconds });
        // console.log(pomodoro);
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

  const changeThemeColor = (themeName: string, themeColor: string) => {
    // console.log(themeName, themeColor);

    switch (themeName) {
      case "pomodoro":
        setPomodoro({ ...pomodoro, colors: colors[themeColor] });

        break;
      case "shortBreak":
        setShortBreak({ ...shortBreak, colors: colors[themeColor] });

        break;
      case "longBreak":
        setLongBreak({ ...longBreak, colors: colors[themeColor] });

        break;

      default:
        break;
    }
  };

  console.log(theme.secondsLeft);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        pomodoro,
        longBreak,
        shortBreak,
        changeSeconds,
        selectTheme,
        changeThemeColor,
        autoBreakToggle,
        autoBreakStatus,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
