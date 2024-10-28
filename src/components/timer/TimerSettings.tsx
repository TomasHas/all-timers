// import React from "react";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
export default function TimerSettings() {
  const [isToggled] = useState();
  const handleToggle = () => {};
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <FaRegClock />
        <p>timer</p>
      </div>
      <div>
        <p>time (minutes)</p>
        <div className=" flex-row flex gap-4">
          <div>
            <p>pomodoro</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 text-center "
            />
          </div>
          <div>
            <p>short break</p>{" "}
            <input
              type="number"
              className=" w-28 h-10 rounded-md bg-gray-200 text-center"
            />
          </div>
          <div>
            <p>long break</p>{" "}
            <input
              type="number"
              className=" w-28  h-10 rounded-lg bg-gray-200 text-center"
            />
          </div>
        </div>
        <div>
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
          <div className=" flex flex-row justify-between items-center">
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
