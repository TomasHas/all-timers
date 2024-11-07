// import React from "react";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { useTheme } from "../../hooks";

export default function TimerSettings() {
  const theme = useTheme();
  const [isToggled, setIsToggled] = useState(false);

  const [pomodoroSeconds, setPomodoroSeconds] = useState(
    theme.pomodoro.secondsLeft / 60
  );
  const [shortBreakSeconds, setShortBreakSeconds] = useState(
    theme.shortBreak.secondsLeft / 60
  );

  const [longBreakSeconds, setLongBreakSeconds] = useState(
    theme.longBreak.secondsLeft / 60
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const seconds = Number(value);
    console.log("seconds", value);

    if (name === "pomodoro") {
      setPomodoroSeconds(seconds);
      theme.changeSeconds(name, pomodoroSeconds * 60);
      console.log(theme.theme.secondsLeft);
    } else if (name === "shortBreak") {
      setShortBreakSeconds(seconds);
      theme.changeSeconds(name, shortBreakSeconds * 60);
    } else if (name === "longBreak") {
      setLongBreakSeconds(seconds);
      theme.changeSeconds(name, longBreakSeconds * 60);
    }

    console.log(name, seconds);
  };

  const handleToggle = () => {
    setIsToggled((t) => !t);
  };

  return (
    <div className=" flex flex-col gap-3 mb-6">
      <div className="flex flex-row items-center gap-2 ">
        <FaRegClock className=" text-gray-400 text-2xl" />
        <h1 className=" text-gray-400 text-xl">timer</h1>
      </div>
      <div className=" flex flex-col gap-3 ">
        <p className="text-lg text-gray-500">time (minutes)</p>
        <div className=" flex-row flex justify-between mb-6">
          <div className=" flex-col flex gap-1">
            <p className=" text-gray-400">pomodoro</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 p-3 "
              value={pomodoroSeconds}
              name={"pomodoro"}
              onChange={handleChange}
            />
          </div>
          <div className=" flex-col flex gap-1">
            <p className=" text-gray-400">short break</p>{" "}
            <input
              type="number"
              className=" w-28 h-10 rounded-md bg-gray-200 p-3 "
              value={shortBreakSeconds}
              name={"shortBreak"}
              onChange={handleChange}
            />
          </div>
          <div className=" flex-col flex gap-1">
            <p className=" text-gray-400 ">long break</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 p-3 "
              value={longBreakSeconds}
              name={"longBreak"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-3 text-gray-600 ">
          <div className=" flex flex-row justify-between items-center">
            <p>auto start breaks</p>
            <button
              onClick={handleToggle}
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
          <div className=" flex flex-row justify-between items-center ">
            <p>auto start pomodoros</p>
            <button
              onClick={handleToggle}
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
