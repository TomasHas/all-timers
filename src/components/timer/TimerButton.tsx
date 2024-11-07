import React from "react";

import { useTheme } from "../../hooks";

interface TimerButtonProps {
  name: string;
}

export default function TimerButton({ name }: TimerButtonProps) {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    theme.selectTheme(name);
  };

  return (
    <button
      id={name}
      className={`capitalize ${
        name === theme.theme.name ? theme.theme.colors.TimerButtonActiveBg : ""
      } text-white text-lg 
    p-2 rounded-xl hover:text-xl w-32`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
