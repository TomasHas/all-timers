import { useState } from "react";
import "./App.css";
import Tasks from "./components/tasks/Tasks";
import TimerComponent from "./components/timer/TimerComponent";
import TopMenu from "./components/timer/TopMenu";

export type Theme = {
  name: string;
  buttonColor: string;
  buttonFocus: string;
  buttonHover: string;
  componentBackgroundColor: string;
  mainBackgroundColor: string;
  minutes: number;
};
const pomodoro: Theme = {
  name: "pomodoro",
  buttonColor: "bg-red-700",
  buttonFocus: "focus:bg-red-500",
  buttonHover: "hover:bg-red-500",
  componentBackgroundColor: "bg-red-600",
  mainBackgroundColor: "bg-red-800",
  minutes: 25,
};

const shortBreak: Theme = {
  name: "short break",
  buttonColor: "bg-blue-700",
  buttonFocus: "focus:bg-blue-500",
  buttonHover: "hover:bg-blue-500",
  componentBackgroundColor: "bg-blue-600",
  mainBackgroundColor: "bg-blue-800",
  minutes: 5,
};
const longBreak: Theme = {
  name: "long break",
  buttonColor: "bg-green-700",
  buttonFocus: "focus:bg-green-500",
  buttonHover: "hover:bg-green-500",
  componentBackgroundColor: "bg-green-600",
  mainBackgroundColor: "bg-green-800",
  minutes: 15,
};
function App() {
  const [theme, setTheme] = useState<Theme>(pomodoro);
  //function that changes mode and assigns theme

  const selectTheme = (theme: string) => {
    switch (theme) {
      case "pomodoro":
        setTheme(pomodoro);
        break;
      case "short break":
        setTheme(shortBreak);
        break;
      case "long break":
        setTheme(longBreak);
        break;

      default:
        break;
    }
  };
  // console.log(theme);

  return (
    <div
      className={` transition-colors duration-1000 ease-in ${theme.mainBackgroundColor} w-screen  flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col items-center  w-screen mt-20 md:w-screen lg:w-[60%]">
        <TopMenu theme={theme} />

        <div>
          {" "}
          <TimerComponent selectedTheme={selectTheme} currentTheme={theme} />
          <Tasks theme={theme} />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
