// import React from "react";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { ThemeContext, useTheme } from "../../contexts/ThemeContext";

export default function TimerSettings() {
  const theme = useTheme(ThemeContext);
  const [isToggled] = useState();

  const [pomodoroSeconds, setPomodoroSeconds] = useState(25);
  const [shortBreakSeconds, setShortBreakSeconds] = useState(5);

  const [longBreakSeconds, setLongBreakSeconds] = useState(15);

  // const handleToggle = () => {};
  // console.log(theme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const seconds = Number(value);
    console.log(value);

    if (name === "pomodoro") {
      setPomodoroSeconds(seconds);
      theme.changeSeconds(name, seconds * 60);
      console.log(theme.theme.secondsLeft);
    } else if (name === "shortBreak") {
      setShortBreakSeconds(seconds);
      theme.changeSeconds(name, seconds * 60);
    } else if (name === "longBreak") {
      setLongBreakSeconds(seconds);
      theme.changeSeconds(name, seconds * 60);
    }

    // console.log(name, seconds);
  };

  return (
    <div className=" flex flex-col gap-3 ">
      <div className="flex flex-row items-center gap-2 ">
        <FaRegClock />
        <p>timer</p>
      </div>
      <div className=" flex flex-col gap-3 ">
        <p>time (seconds)</p>
        <div className=" flex-row flex gap-4">
          <div>
            <p>pomodoro</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 text-center "
              value={pomodoroSeconds}
              name={"pomodoro"}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>short break</p>{" "}
            <input
              type="number"
              className=" w-28 h-10 rounded-md bg-gray-200 text-center"
              value={shortBreakSeconds}
              name={"shortBreak"}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>long break</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 text-center"
              value={longBreakSeconds}
              name={"longBreak"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-3 ">
          <div className=" flex flex-row justify-between items-center">
            <p>auto start breaks</p>
            <button
              // onClick={handleToggle}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
                isToggled ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggled ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className=" flex flex-row justify-between items-center">
            <p>auto start pomodoros</p>
            <button
              // onClick={handleToggle}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
                isToggled ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggled ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>{" "}
          <div className=" flex flex-row justify-between items-center">
            <p>long break interval</p>
            <input
              type="number"
              className=" w-16  h-10 rounded-lg bg-gray-200 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
