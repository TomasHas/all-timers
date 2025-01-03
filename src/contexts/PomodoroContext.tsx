import { createContext, ReactNode, useEffect, useState } from "react";
import { pomodoroDefault, longBreakDefault, shortBreakDefault } from "../utils";
import { colors } from "../utils";
import { PomodoroContextType, Mode } from "./../types/pomodoroTypes";
type PomodoroProviderProps = {
  children: ReactNode;
};

export const PomodoroContext = createContext<PomodoroContextType | undefined>(
  undefined
);

export default function PomodoroContextProvider({
  children,
}: PomodoroProviderProps) {
  const [pomodoro, setPomodoro] = useState<Mode>(() => {
    const savedData = localStorage.getItem("pomodoro");
    return savedData ? JSON.parse(savedData) : pomodoroDefault;
  });
  const [shortBreak, setShortBreak] = useState<Mode>(() => {
    const savedData = localStorage.getItem("shortBreak");
    return savedData ? JSON.parse(savedData) : shortBreakDefault;
  });
  const [longBreak, setLongBreak] = useState<Mode>(() => {
    const savedData = localStorage.getItem("longBreak");
    return savedData ? JSON.parse(savedData) : longBreakDefault;
  });
  //////////////////////////////////

  const [mode, setMode] = useState<Mode>(pomodoro);
  const [autoBreakStatus, setAutoBreakStatus] = useState(false);
  const [autoPomodoroStatus, setAutoPomodoroStatus] = useState(false);
  const [timerIsOn, setTimerIsOn] = useState<boolean>(false);
  const [longBreakInterval, setLongBreakInterval] = useState<number>(4);
  // const [trigger, setTrigger] = useState<boolean>(true);
  const [modeTracker, setModeTracker] = useState("pomodoro");
  const [turn, setTurn] = useState<number>(0);

  //keeps Mode state updated.
  useEffect(() => {
    if (modeTracker === "pomodoro") {
      setMode(pomodoro);
    }
    if (modeTracker === "shortBreak") {
      setMode(shortBreak);
    }
    if (modeTracker === "longBreak") {
      setMode(longBreak);
    }
  }, [pomodoro, shortBreak, longBreak, modeTracker]);

  // useEffect(() => {
  //   setMode((prevState) => ({ ...prevState }));
  //   console.log("tomas");
  // }, []);

  const toggleMode = (modeName: string) => {
    switch (modeName) {
      case "pomodoro":
        setMode(pomodoro);
        setModeTracker("pomodoro");
        break;
      case "shortBreak":
        setMode(shortBreak);
        setModeTracker("shortBreak");

        break;
      case "longBreak":
        setMode(longBreak);
        setModeTracker("longBreak");

        break;

      default:
        break;
    }
  };

  const autoBreakToggle = (): void => {
    setAutoBreakStatus((s) => !s);
  };
  const autoPomodoroToggle = (): void => {
    setAutoPomodoroStatus((p) => !p);
  };

  const changeTimerStatus = (status: boolean): void => {
    setTimerIsOn(status);
  };

  const changeLongBreakInterval = (number: number): void => {
    setLongBreakInterval(number);
  };
  const updateTurn = (): void => {
    setTurn((t) => t++);
  };

  const changeSeconds = (mode: string, seconds: number) => {
    switch (mode) {
      case "pomodoro":
        setPomodoro((pomodoro) => {
          const updatedData = { ...pomodoro, secondsLeft: seconds };
          localStorage.setItem("pomodoro", JSON.stringify(updatedData));
          return updatedData;
        });

        break;
      case "shortBreak":
        setShortBreak((shortBreak) => {
          const updatedData = { ...shortBreak, secondsLeft: seconds };
          localStorage.setItem("shortBreak", JSON.stringify(updatedData));
          return updatedData;
        });

        break;
      case "longBreak":
        setLongBreak((longBreak) => {
          const updatedData = { ...longBreak, secondsLeft: seconds };
          localStorage.setItem("longBreak", JSON.stringify(updatedData));
          return updatedData;
        });

        break;

      default:
        break;
    }
  };

  const changeThemeColor = (themeName: string, themeColor: string) => {
    // console.log(themeName, themeColor);

    switch (themeName) {
      case "pomodoro":
        setPomodoro((pomodoro) => {
          const updatedData = { ...pomodoro, colors: colors[themeColor] };
          localStorage.setItem("pomodoro", JSON.stringify(updatedData));
          return updatedData;
        });
        break;
      case "shortBreak":
        setShortBreak((shortBreak) => {
          const updatedData = { ...shortBreak, colors: colors[themeColor] };
          localStorage.setItem("shortBreak", JSON.stringify(updatedData));
          return updatedData;
        });
        break;
      case "longBreak":
        setLongBreak((longBreak) => {
          const updatedData = { ...longBreak, colors: colors[themeColor] };
          localStorage.setItem("longBreak", JSON.stringify(updatedData));
          return updatedData;
        });

        break;

      default:
        break;
    }
  };

  const resetLocalStorage = () => {
    localStorage.removeItem("pomodoro");
    localStorage.removeItem("shortBreak");
    localStorage.removeItem("longBreak");
    setPomodoro(pomodoroDefault);
    setShortBreak(shortBreakDefault);
    setLongBreak(longBreakDefault);
  };

  // console.log(theme.secondsLeft);
  return (
    <PomodoroContext.Provider
      value={{
        mode,
        pomodoro,
        longBreak,
        shortBreak,
        changeSeconds,
        toggleMode,
        changeThemeColor,
        autoBreakToggle,
        autoBreakStatus,
        autoPomodoroStatus,
        autoPomodoroToggle,
        timerIsOn,
        changeTimerStatus,
        longBreakInterval,
        changeLongBreakInterval,
        updateTurn,
        turn,
        resetLocalStorage,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}
