import { useState } from "react";
import TimerButton from "./TimerButton";

export default function TimerComponent() {
  const [count, setCount] = useState(10);

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    setInterval(() => {
      setCount((prevCount) => prevCount - 1); // Use functional update to get the latest state
    }, 1000);
  };
  console.log(count);
  return (
    <div className="bg-red-600 h-96 w-fit pl-28 pr-28 flex flex-col items-center rounded-xl justify-between ">
      <div
        className="mt-6 flex flex-row gap-5 h-10
       "
      >
        <div>
          {" "}
          <TimerButton name={"pomodoro"} />
        </div>
        <div>
          {" "}
          <TimerButton name={"short break"} />
        </div>{" "}
        <div>
          <TimerButton name={"long break"} />
        </div>
      </div>
      <div className="text-9xl text-white">{count}</div>

      <button
        className="mb-6 w-44 text-white text-xl capitalize"
        onClick={handleStart}
      >
        start
      </button>
      <div></div>
    </div>
  );
}
