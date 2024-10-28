import { useState, useEffect } from "react";
import TimerButton from "./TimerButton";
import { Theme } from "../../App";

interface TimerComponentProps {
  selectedTheme: (theme: string) => void;
  currentTheme: Theme;
}
let countdownInterval: number | undefined;

export default function TimerComponent({
  selectedTheme,
  currentTheme,
}: TimerComponentProps) {
  const [seconds, setSeconds] = useState<number>(5);
  const [minutes, setMinutes] = useState<number>(currentTheme.minutes);

  const [timerIsOn, setTimerIsOn] = useState<boolean>(false);
  console.log(currentTheme.minutes);
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(5);
      if (minutes === 0) {
        clearInterval(countdownInterval);
        console.log("times up");
      } else {
        setMinutes((m) => m - 1);
      }
    }
  }, [seconds, minutes]);

  useEffect(() => {
    setMinutes(currentTheme.minutes);
  }, [currentTheme.minutes]);
  const countDownSeconds = () => {
    countdownInterval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
  };

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(timerIsOn);

    if (!timerIsOn) {
      countDownSeconds();
      setTimerIsOn(true);
      console.log("start");
    } else {
      console.log("timer is already on");
    }
  };

  const handleStop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearInterval(countdownInterval);
    setTimerIsOn(false);
    console.log("stop");
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("reset");
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

      <div className="text-9xl text-white font-dangrek w-96 flex flex-row justify-center ">
        <div>
          {minutes === 0 ? "00" : minutes < 10 ? `0${minutes}` : `${minutes}`}
        </div>{" "}
        :{" "}
        <div className=" ">
          {" "}
          {seconds === 60 ? "00" : seconds < 10 ? `0${seconds}` : `${seconds}`}
        </div>
      </div>
      <div className={`flex flex-row justify-between items-center h-10`}>
        {!timerIsOn ? (
          <button
            className=" w-44 text-white text-xl capitalize"
            onClick={handleStart}
          >
            start
          </button>
        ) : (
          <button
            className=" w-44 text-white text-xl capitalize"
            onClick={handleStop}
          >
            Pause
          </button>
        )}
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
