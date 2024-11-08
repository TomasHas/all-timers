export type ColorProperties = {
  name: string;
  buttonColor: string;
  buttonFocus: string;
  buttonHover: string;
  componentBackgroundColor: string;
  mainBackgroundColor: string;
  TimerButtonActiveBg: string;
  border: string;
  taskSeparatorBg: string;
};

export const colors: Record<string, ColorProperties> = {
  red: {
    name: "red",
    buttonColor: `bg-red-800`,
    buttonFocus: `focus:bg-red-500`,
    buttonHover: `hover:bg-red-300`,
    componentBackgroundColor: `bg-red-700`,
    mainBackgroundColor: `bg-red-600`,
    TimerButtonActiveBg: `bg-red-800`,
    border: `border-red-300`,
    taskSeparatorBg: `bg-red-300`,
  },
  blue: {
    name: "blue",
    buttonColor: `bg-blue-800`,
    buttonFocus: `focus:bg-blue-500`,
    buttonHover: `hover:bg-blue-300`,
    componentBackgroundColor: `bg-blue-700`,
    mainBackgroundColor: `bg-blue-600`,
    TimerButtonActiveBg: `bg-blue-800`,
    border: `border-blue-300`,
    taskSeparatorBg: `bg-blue-300`,
  },
  yellow: {
    name: "yellow",
    buttonColor: `bg-yellow-800`,
    buttonFocus: `focus:bg-yellow-500`,
    buttonHover: `hover:bg-yellow-300`,
    componentBackgroundColor: `bg-yellow-700`,
    mainBackgroundColor: `bg-yellow-600`,
    TimerButtonActiveBg: `bg-yellow-800`,
    border: `border-yellow-300`,
    taskSeparatorBg: `bg-yellow-300`,
  },
  green: {
    name: "green",
    buttonColor: `bg-green-800`,
    buttonFocus: `focus:bg-green-500`,
    buttonHover: `hover:bg-green-300`,
    componentBackgroundColor: `bg-green-700`,
    mainBackgroundColor: `bg-green-600`,
    TimerButtonActiveBg: `bg-green-800`,
    border: `border-green-300`,
    taskSeparatorBg: `bg-green-300`,
  },
  lime: {
    name: "lime",
    buttonColor: `bg-lime-800`,
    buttonFocus: `focus:bg-lime-500`,
    buttonHover: `hover:bg-lime-300`,
    componentBackgroundColor: `bg-lime-700`,
    mainBackgroundColor: `bg-lime-600`,
    TimerButtonActiveBg: `bg-lime-800`,
    border: `border-lime-300`,
    taskSeparatorBg: `bg-lime-300`,
  },
};
