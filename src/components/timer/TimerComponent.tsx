import { useState, useEffect } from "react";
import TimerButton from "./TimerButton";
import { usePomodoro } from "./../../hooks";
import click from "./../../assets/buttonClick.mp3";
import { colors } from "../../utils";
let countdownInterval: number | undefined;
const buttonClick = new Audio(click);

export default function TimerComponent() {
  const pomodoro = usePomodoro();
  const [countdownTimer, setCountdownTimer] = useState<number>(
    pomodoro.mode.secondsLeft
  );

  //& updates the timer seconds when the settings are changed by the user
  useEffect(() => {
    setCountdownTimer(pomodoro.mode.secondsLeft);
  }, [pomodoro.pomodoro.secondsLeft, pomodoro.mode.secondsLeft]);
  // console.log(countdownTimer);

  //& Sets the next timer
  useEffect(() => {
    if (pomodoro.mode.name === "pomodoro") {
      if (countdownTimer === 0) {
        // console.log("zero");
        clearInterval(countdownInterval);
        pomodoro.toggleMode("pomodoro");
        setCountdownTimer(pomodoro.mode.secondsLeft);
        pomodoro.changeTimerStatus(false);
      }
    }
    if (pomodoro.mode.name === "shortBreak") {
      if (countdownTimer === 0) {
        // console.log("zero");
        clearInterval(countdownInterval);
        pomodoro.toggleMode("shortBreak");
        setCountdownTimer(pomodoro.mode.secondsLeft);
        pomodoro.changeTimerStatus(false);
      }
    }
    if (pomodoro.mode.name === "longBreak") {
      if (countdownTimer === 0) {
        // console.log("zero");
        clearInterval(countdownInterval);
        pomodoro.toggleMode("longBreak");
        setCountdownTimer(pomodoro.mode.secondsLeft);
        pomodoro.changeTimerStatus(false);
      }
    }
  }, [countdownTimer, pomodoro]);

  //& AUTO BREAK START starts the next timer automatically
  useEffect(() => {
    // console.log("countdownTimer", countdownTimer);
    // console.log("pomodoro.autoBreakStatus", pomodoro.autoBreakStatus);

    if (pomodoro.mode.name === "shortBreak") {
      if (pomodoro.autoBreakStatus) {
        startCountDown();
        pomodoro.changeTimerStatus(true);

        // console.log("start");
      }
    }
  }, [
    pomodoro,
    pomodoro.autoBreakStatus,
    pomodoro.mode.name,
    pomodoro.timerIsOn,
  ]);

  //& AUTO START POMODOROS after shortBreak
  useEffect(() => {
    // console.log("auto start pomodoro", pomodoro.mode.name);
    // console.log("pomodoro.autoPomodoroStatus", pomodoro.autoPomodoroStatus);
    // console.log("pomodoro.turn", pomodoro.turn);

    if (pomodoro.mode.name === "pomodoro" && pomodoro.turn !== 0) {
      if (pomodoro.autoPomodoroStatus) {
        startCountDown();
        pomodoro.changeTimerStatus(true);

        // console.log("start");
      }
    }
    // get the prev value of pomodoro so that pomodoro does not start on first loading.
  }, [pomodoro.autoPomodoroStatus, pomodoro]);

  const startCountDown = () => {
    countdownInterval = setInterval(() => {
      setCountdownTimer((s) => s - 1);
    }, 1000);
  };

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(timerIsOn);
    buttonClick.play();
    if (!pomodoro.timerIsOn) {
      startCountDown();
      pomodoro.changeTimerStatus(true);

      // console.log("start");
    } else {
      // console.log("timer is already on");
    }
  };

  const handleStop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    buttonClick.play();
    clearInterval(countdownInterval);
    pomodoro.changeTimerStatus(false);
    // console.log("stop");
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    buttonClick.play();
    clearInterval(countdownInterval);
    pomodoro.changeTimerStatus(false);
    setCountdownTimer(pomodoro.mode.secondsLeft);
    // console.log("reset");
  };
  // console.log(pomodoro.mode.colors.componentBackgroundColor);

  const secondConverter = (seconds: number): number => {
    return Math.floor(seconds % 60);
  };
  const minuteConverter = (seconds: number): number => {
    return Math.floor(seconds / 60);
  };

  return (
    <div
      className={` h-96 w-fit   pl-28 pr-28 flex flex-col items-center rounded-xl justify-between ${
        pomodoro.darkMode && pomodoro.timerIsOn
          ? colors.gray.mainBackgroundColor
          : pomodoro.mode.colors.componentBackgroundColor
      } `}
    >
      <div
        className="mt-6 flex flex-row gap-5 h-10
       "
      >
        <div>
          {" "}
          <TimerButton
            name={"pomodoro"}
            stopTimer={() => clearInterval(countdownInterval)}
          />
        </div>
        <div>
          {" "}
          <TimerButton
            name={"shortBreak"}
            stopTimer={() => clearInterval(countdownInterval)}
          />
        </div>{" "}
        <div>
          <TimerButton
            name={"longBreak"}
            stopTimer={() => clearInterval(countdownInterval)}
          />
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
        {!pomodoro.timerIsOn ? (
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
