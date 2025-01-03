export type PomodoroContextType = {
  mode: Mode;
  changeSeconds: (modeName: string, seconds: number) => void;
  toggleMode: (modeName: string) => void;
  changeThemeColor: (modeName: string, themeColor: string) => void;
  pomodoro: Mode;
  shortBreak: Mode;
  longBreak: Mode;
  autoBreakStatus: boolean;
  autoPomodoroStatus: boolean;
  timerIsOn: boolean;
  longBreakInterval: number;
  autoBreakToggle: () => void;
  autoPomodoroToggle: () => void;
  changeTimerStatus: (status: boolean) => void;
  changeLongBreakInterval: (number: number) => void;
  updateTurn: () => void;
  turn: number;
  resetLocalStorage: () => void;
};

export type Mode = {
  name: string; //pomodoro
  colors: ColorProperties;
  secondsLeft: number; //900
  colorId: string; //red
};

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
