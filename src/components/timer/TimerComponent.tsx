import { useState, useRef, useEffect } from "react";
import TimerButton from "./TimerButton";
import { Theme } from "../../App";

interface TimerComponentProps {
  selectedTheme: (theme: string) => void;
  currentTheme: Theme;
}
export default function TimerComponent({
  selectedTheme,
  currentTheme,
}: TimerComponentProps) {
  const [seconds, setSeconds] = useState<number>(10);
  const [minutes, setMinutes] = useState<number>(currentTheme.minutes);
  const [timerIsOn, setTimerIsOn] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null); // To hold the interval ID
  console.log(currentTheme.minutes);
  useEffect(() => {
    setMinutes(currentTheme.minutes);
  }, [currentTheme.minutes]);

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("start");
  };

  const handleStop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("stop");
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleTheme = (theme: string) => {
    selectedTheme(theme);
  };

  return (
    <div
      className={` h-96 w-fit transition-colors duration-1000 ease-in ${currentTheme.componentBackgroundColor} pl-28 pr-28 flex flex-col items-center rounded-xl justify-between `}
    >
      <div
        className="mt-6 flex flex-row gap-5 h-10
       "
      >
        <div>
          {" "}
          <TimerButton
            name={"pomodoro"}
            color={currentTheme.buttonColor}
            selectTheme={handleTheme}
            focus={currentTheme.buttonFocus}
            hover={currentTheme.buttonHover}
            componentBackground={currentTheme.componentBackgroundColor}
          />
        </div>
        <div>
          {" "}
          <TimerButton
            name={"short break"}
            color={currentTheme.buttonColor}
            selectTheme={handleTheme}
            focus={currentTheme.buttonFocus}
            hover={currentTheme.buttonHover}
            componentBackground={currentTheme.componentBackgroundColor}
          />
        </div>{" "}
        <div>
          <TimerButton
            name={"long break"}
            color={currentTheme.buttonColor}
            selectTheme={handleTheme}
            focus={currentTheme.buttonFocus}
            hover={currentTheme.buttonHover}
            componentBackground={currentTheme.componentBackgroundColor}
          />
        </div>
      </div>

      <div className="text-9xl text-white font-dangrek">
        {minutes < 10 ? `0${minutes}` : `${minutes}`}:
        {seconds < 10 ? `0${seconds}` : `${seconds}`}
      </div>
      <div className={`flex flex-row justify-between items-center h-10`}>
        <button
          className=" w-44 text-white text-xl capitalize"
          onClick={handleStart}
        >
          start
        </button>
        <button
          className=" w-44 text-white text-xl capitalize"
          onClick={handleStop}
        >
          stop
        </button>
        <button
          className=" w-44 text-white text-xl capitalize"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
      <div></div>
    </div>
  );
}
