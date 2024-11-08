import React from "react";

import { useTheme } from "../../hooks";
interface ThemeSettingsButtonColorOptionsProps {
  buttonTheme: string; //bg-red-600
  themeColor: string; //red
  buttonId: string;
}
export default function ThemeSettingsModalColorOptionsButton({
  buttonTheme,
  themeColor,
  buttonId,
}: ThemeSettingsButtonColorOptionsProps) {
  const theme = useTheme();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log(buttonId, themeColor);
    theme.changeThemeColor(buttonId, themeColor);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className={`h-10 w-10 rounded-lg ${buttonTheme}  `}
      ></button>
    </div>
  );
}
