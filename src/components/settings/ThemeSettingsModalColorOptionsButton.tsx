import { useEffect, useState } from "react";
import { usePomodoro } from "../../hooks";
interface ThemeSettingsButtonColorOptionsProps {
  buttonBg: string; //bg-red-600
  buttonColor: string; //red
  buttonId: string; //pomodoro
  // activeColor: string; //pomodoro
}
export default function ThemeSettingsModalColorOptionsButton({
  buttonBg,
  buttonColor,
  buttonId,
}: // activeColor,
ThemeSettingsButtonColorOptionsProps) {
  const pomodoro = usePomodoro();
  const [modeColor, setModeColor] = useState("");
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log(buttonId, themeColor);
    pomodoro.changeThemeColor(buttonId, buttonColor);
  };

  useEffect(() => {
    if (buttonId === "pomodoro") setModeColor(pomodoro.pomodoro.colors.name);
    if (buttonId === "shortBreak")
      setModeColor(pomodoro.shortBreak.colors.name);
    if (buttonId === "longBreak") setModeColor(pomodoro.longBreak.colors.name);
  }, [
    buttonId,
    modeColor,
    pomodoro.longBreak.colors.name,
    pomodoro.pomodoro.colors.name,
    pomodoro.shortBreak.colors.name,
  ]);

  console.log("modeColor:", modeColor, "buttonColor", buttonColor);
  return (
    <div
      className={`rounded-xl flex items-center justify-center ${
        modeColor === buttonColor ? " border-4 border-blue-500 m-1" : ""
      } `}
    >
      <button
        onClick={handleClick}
        className={`h-12 w-12 rounded-lg ${buttonBg} flex items-center justify-center m-1 `}
      ></button>
    </div>
  );
}
