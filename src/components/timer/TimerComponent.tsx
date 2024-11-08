import { useState, useEffect } from "react";
import TimerButton from "./TimerButton";
import { useTheme } from "./../../hooks";

let countdownInterval: number | undefined;

export default function TimerComponent() {
  const theme = useTheme();
  const [countdownTimer, setCountdownTimer] = useState(
    theme.pomodoro.secondsLeft
  );
  const [timerIsOn, setTimerIsOn] = useState<boolean>(false);

  // console.log(activeTheme);

  useEffect(() => {
    //refreshes timer when seconds are modified in settings
    setCountdownTimer(theme.theme.secondsLeft);
  }, [theme.theme.secondsLeft]);

  useEffect(() => {
    setCountdownTimer(theme.theme.secondsLeft);
  }, [theme.pomodoro.secondsLeft, theme.theme.secondsLeft]);
  // console.log(countdownTimer);
  const countDownSeconds = () => {
    countdownInterval = setInterval(() => {
      setCountdownTimer((s) => s - 1);
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

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearInterval(countdownInterval);
    setTimerIsOn(false);
    setCountdownTimer(theme.theme.secondsLeft);
    console.log("reset");
  };

  const secondConverter = (seconds: number): number => {
    return Math.floor(seconds % 60);
  };
  const minuteConverter = (seconds: number): number => {
    return Math.floor(seconds / 60);
  };

  // const handleClick = (name: string) => {
  //   switch (name) {
  //     case "pomodoro":
  //       theme.selectTheme(name);
  //       break;
  //     case "shortBreak":
  //       theme.selectTheme(name);
  //       break;
  //     case "longBreak":
  //       theme.selectTheme(name);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // console.log(activeTheme);
  return (
    <div
      className={` h-96 w-fit   pl-28 pr-28 flex flex-col items-center rounded-xl justify-between ${theme.theme.colors.componentBackgroundColor} `}
    >
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
          <TimerButton name={"shortBreak"} />
        </div>{" "}
        <div>
          <TimerButton name={"longBreak"} />
        </div>
      </div>

      <div
        className={`text-9xl text-white font-dangrek w-96 flex flex-row justify-center  `}
      >
        <div className="flex flex-row justify-evenly w-96">
          <div className=" w-24 flex flex-row justify-center">
            {countdownTimer / 60 < 10
              ? `0${minuteConverter(countdownTimer)}`
              : minuteConverter(countdownTimer)}
          </div>
          :
          <div className=" w-24  flex flex-row justify-center">
            {countdownTimer % 60 < 10
              ? `0${secondConverter(countdownTimer)}`
              : secondConverter(countdownTimer)}
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
