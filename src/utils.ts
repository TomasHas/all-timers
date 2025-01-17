import { ColorProperties } from "./types/pomodoroTypes";

export const colors: Record<string, ColorProperties> = {
  red: {
    name: "red",
    buttonColor: `bg-red-800`,
    buttonFocus: `focus:bg-red-500`,
    buttonHover: `hover:bg-red-300`,
    componentBackgroundColor: `bg-red-700`,
    mainBackgroundColor: `bg-red-600`,
    TimerButtonActiveBg: `bg-red-800`,
    border: "border-red-400",
    taskSeparatorBg: `bg-red-700`,
  },
  blue: {
    name: "blue",
    buttonColor: `bg-blue-800`,
    buttonFocus: `focus:bg-blue-500`,
    buttonHover: `hover:bg-blue-300`,
    componentBackgroundColor: `bg-blue-700`,
    mainBackgroundColor: `bg-blue-600`,
    TimerButtonActiveBg: `bg-blue-800`,
    border: `border-blue-400`,
    taskSeparatorBg: `bg-blue-400`,
  },
  yellow: {
    name: "yellow",
    buttonColor: `bg-yellow-800`,
    buttonFocus: `focus:bg-yellow-500`,
    buttonHover: `hover:bg-yellow-300`,
    componentBackgroundColor: `bg-yellow-700`,
    mainBackgroundColor: `bg-yellow-600`,
    TimerButtonActiveBg: `bg-yellow-800`,
    border: `border-yellow-400`,
    taskSeparatorBg: `bg-yellow-400`,
  },
  green: {
    name: "green",
    buttonColor: `bg-green-800`,
    buttonFocus: `focus:bg-green-500`,
    buttonHover: `hover:bg-green-300`,
    componentBackgroundColor: `bg-green-700`,
    mainBackgroundColor: `bg-green-600`,
    TimerButtonActiveBg: `bg-green-800`,
    border: `border-green-400`,
    taskSeparatorBg: `bg-green-400`,
  },
  lime: {
    name: "lime",
    buttonColor: `bg-lime-800`,
    buttonFocus: `focus:bg-lime-500`,
    buttonHover: `hover:bg-lime-300`,
    componentBackgroundColor: `bg-lime-700`,
    mainBackgroundColor: `bg-lime-600`,
    TimerButtonActiveBg: `bg-lime-800`,
    border: `border-lime-400`,
    taskSeparatorBg: `bg-lime-400`,
  },
  gray: {
    name: "gray",
    buttonColor: `bg-gray-800`,
    buttonFocus: `focus:bg-gray-500`,
    buttonHover: `hover:bg-gray-300`,
    componentBackgroundColor: `bg-gray-700`,
    mainBackgroundColor: `bg-gray-600`,
    TimerButtonActiveBg: `bg-gray-800`,
    border: `border-gray-400`,
    taskSeparatorBg: `bg-gray-400`,
  },
};

export const pomodoroDefault = {
  name: "pomodoro",
  secondsLeft: 1500,
  colors: colors["red"],
  colorId: "red",
};
export const shortBreakDefault = {
  name: "shortBreak",
  secondsLeft: 300,
  colors: colors["blue"],
  colorId: "blue",
};

export const longBreakDefault = {
  name: "longBreak",
  secondsLeft: 900,
  colors: colors["green"],
  colorId: "green",
};
