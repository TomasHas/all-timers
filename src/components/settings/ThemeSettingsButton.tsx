import React from "react";

interface ThemeSettingsButtonProps {
  buttonTheme: string;
  openModal: () => void;
  buttonId: string;
  setThemeId: (themeName: string) => void;
}
export default function ThemeSettingsButton({
  buttonTheme,
  openModal,
  setThemeId,
  buttonId,
}: ThemeSettingsButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
    setThemeId(buttonId);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`h-10 w-10 rounded-lg ${buttonTheme}`}
      ></button>
    </div>
  );
}
