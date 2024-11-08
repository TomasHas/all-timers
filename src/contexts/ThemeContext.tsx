import { createContext, ReactNode, useEffect, useState } from "react";

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
  changeThemeColor: (themeName: string, themeColor: string) => void;
  pomodoro: Theme;
  shortBreak: Theme;
  longBreak: Theme;
};

export type Theme = {
  name: string;
  colors: ColorSet;
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

  // useEffect(() => {
  //   console.log("Pomodoro colors updated:", pomodoro.colors);
  // }, [pomodoro.colors]);

  // useEffect(() => {
  //   console.log("ShortBreak colors updated:", shortBreak.colors);
  // }, [shortBreak.colors]);

  // useEffect(() => {
  //   console.log("LongBreak colors updated:", longBreak.colors);
  // }, [longBreak.colors]);

  useEffect(() => {
    console.log("Pomodoro seconds updated:", pomodoro.secondsLeft);
  }, [pomodoro.secondsLeft]);

  useEffect(() => {
    console.log("ShortBreak seconds updated:", shortBreak.secondsLeft);
  }, [shortBreak.secondsLeft]);

  useEffect(() => {
    console.log("LongBreak seconds updated:", longBreak.secondsLeft);
  }, [longBreak.secondsLeft]);

  const changeSeconds = (theme: string, seconds: number) => {
    switch (theme) {
      case "pomodoro":
        console.log("changing seconds", theme, seconds);

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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
