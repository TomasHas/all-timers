import { useState, useEffect } from "react";
import TimerButton from "./TimerButton";
import { useTheme, ThemeContext } from "../../contexts/ThemeContext";

let countdownInterval: number | undefined;

export default function TimerComponent() {
  const theme = useTheme(ThemeContext);
  const [timeLeft, setTimeLeft] = useState(theme.theme.secondsLeft);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [timerIsOn, setTimerIsOn] = useState<boolean>(false);

  useEffect(() => {
    setTimeLeft(theme.theme.secondsLeft);
  }, [theme.theme.secondsLeft, trigger]);

  const countDownSeconds = () => {
    countdownInterval = setInterval(() => {
      setTimeLeft((s) => s - 1);
    }, 1000);
  };

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(timerIsOn);

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

  const handleReset = () => {
    clearInterval(countdownInterval);
    setTimerIsOn(false);
    setTimeLeft(theme.theme.secondsLeft);
    console.log("reset");
  };

  const handleTheme = (theme: string) => {
    console.log(theme);
  };

  const secondConverter = (seconds: number): number => {
    return Math.floor(seconds % 60);
  };
  const minuteConverter = (seconds: number): number => {
    return Math.floor(seconds / 60);
  };

  const handleTrigger = () => {
    setTrigger((t) => !t);
  };

  // console.log(theme?.theme.colors.buttonColor);

  return (
    <div
      className={` h-96 w-fit transition-colors duration-1000 ease-in ${theme?.theme.colors.buttonFocus} pl-28 pr-28 flex flex-col items-center rounded-xl justify-between `}
    >
      <div
        className="mt-6 flex flex-row gap-5 h-10
       "
      >
        <div>
          {" "}
          <TimerButton
            name={"pomodoro"}
            color={theme?.theme.colors.buttonColor}
            selectTheme={handleTheme}
            hover={theme?.theme.colors.buttonHover}
            componentBackground={theme?.theme.colors.componentBackgroundColor}
            trigger={handleTrigger}
          />
        </div>
        <div>
          {" "}
          <TimerButton
            name={"shortBreak"}
            color={theme?.theme.colors.buttonColor}
            selectTheme={handleTheme}
            hover={theme?.theme.colors.buttonHover}
            componentBackground={theme?.theme.colors.componentBackgroundColor}
            trigger={handleTrigger}
          />
        </div>{" "}
        <div>
          <TimerButton
            name={"longBreak"}
            color={theme?.theme.colors.buttonColor}
            selectTheme={handleTheme}
            hover={theme?.theme.colors.buttonHover}
            componentBackground={theme?.theme.colors.componentBackgroundColor}
            trigger={handleTrigger}
          />
        </div>
      </div>

      <div className="text-9xl text-white font-dangrek w-96 flex flex-row justify-center ">
        <div className="flex flex-row justify-center w-96 bg-yellow-500">
          <div className=" w-full flex flex-row justify-center">
            {timeLeft / 60 < 10
              ? `0${minuteConverter(timeLeft)}`
              : minuteConverter(timeLeft)}
          </div>
          :
          <div className=" w-full text-center">
            {timeLeft % 60 < 10
              ? `0${secondConverter(timeLeft)}`
              : secondConverter(timeLeft)}
          </div>
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
