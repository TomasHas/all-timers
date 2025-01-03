// import React from "react";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { usePomodoro } from "../../hooks";

export default function TimerSettings() {
  const pomodoro = usePomodoro();
  const [isToggledAutoBreaks, setIsToggledAutoBreaks] = useState(
    pomodoro.autoBreakStatus
  );
  const [isToggledAutoPomodoro, setIsToggledAutoPomodoro] = useState(
    pomodoro.autoPomodoroStatus
  );

  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(
    pomodoro.pomodoro.secondsLeft / 60
  );
  const [shortBreakSeconds, setShortBreakSeconds] = useState<number>(
    pomodoro.shortBreak.secondsLeft / 60
  );

  const [longBreakSeconds, setLongBreakSeconds] = useState<number>(
    pomodoro.longBreak.secondsLeft / 60
  );

  const [intervalNumber, setIntervalNumber] = useState<number>(
    pomodoro.longBreakInterval
  );

  useEffect(() => {
    setIsToggledAutoBreaks(pomodoro.autoBreakStatus);
  }, [pomodoro.autoBreakStatus]);

  useEffect(() => {
    setIsToggledAutoPomodoro(pomodoro.autoPomodoroStatus);
  }, [pomodoro.autoPomodoroStatus]);
  // console.log(pomodoro.autoPomodoroStatus);

  useEffect(() => {
    //updates the intervalNumber from the pomodoro context
    setIntervalNumber(pomodoro.longBreakInterval);
  }, [pomodoro.longBreakInterval]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const seconds = Number(value);
    // console.log("seconds", value);

    if (name === "pomodoro") {
      setPomodoroSeconds(() => seconds);
      pomodoro.changeSeconds(name, seconds * 60);
      // console.log(pomodoro.mode.secondsLeft);
    } else if (name === "shortBreak") {
      setShortBreakSeconds(seconds);
      pomodoro.changeSeconds(name, seconds * 60);
    } else if (name === "longBreak") {
      setLongBreakSeconds(seconds);
      pomodoro.changeSeconds(name, seconds * 60);
    }

    // console.log(name, seconds);
  };

  const handleToggleAutoBreaks = () => {
    pomodoro.autoBreakToggle();
  };
  const handleToggleAutoPomodoro = () => {
    pomodoro.autoPomodoroToggle();
  };

  //changes the interval number in the pomodoro context
  const handleIntervalChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    pomodoro.changeLongBreakInterval(Number(e.target.value));
    // setIntervalNumber(Number(e.target.value));
    console.log(e.target.value);
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
              onClick={handleToggleAutoBreaks}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
                isToggledAutoBreaks ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggledAutoBreaks ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className=" flex flex-row justify-between items-center ">
            <p>auto start pomodoros</p>
            <button
              onClick={handleToggleAutoPomodoro}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
                isToggledAutoPomodoro ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggledAutoPomodoro ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>{" "}
          <div className=" flex flex-row justify-between items-center">
            <p>long break interval</p>
            <input
              type="number"
              className=" w-16  h-10 rounded-lg bg-gray-200 text-center"
              value={intervalNumber}
              onChange={handleIntervalChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
