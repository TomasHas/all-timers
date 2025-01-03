import React from "react";
import click from "./../../assets/buttonClick.mp3";
import { usePomodoro } from "../../hooks";

const buttonClick = new Audio(click);
interface TimerButtonProps {
  name: string;
  stopTimer: () => void;
}

export default function TimerButton({ name, stopTimer }: TimerButtonProps) {
  const pomodoro = usePomodoro();

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    buttonClick.play();
    pomodoro.toggleMode(name);
    stopTimer();

    pomodoro.changeTimerStatus(false);
  };
  // console.log(pomodoro.mode.name);

  return (
    <button
      id={name}
      className={`capitalize ${
        name === pomodoro.mode.name
          ? pomodoro.mode.colors.TimerButtonActiveBg
          : ""
      } text-white text-lg 
    p-2 rounded-xl hover:text-xl w-32`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
