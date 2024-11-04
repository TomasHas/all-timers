import { ThemeContext, useTheme } from "../../contexts/ThemeContext";

interface TimerButtonProps {
  name: string;
  color: string | undefined;
  selectTheme: (color: string) => void;
  trigger: () => void;

  hover: string | undefined;
  componentBackground: string | undefined;
}

export default function TimerButton({
  name,

  selectTheme,
  trigger,
}: TimerButtonProps) {
  const theme = useTheme(ThemeContext);

  const handleClick = (): void => {
    theme.selectTheme(name);

    selectTheme(name);
    trigger();
  };

  return (
    <button
      onClick={handleClick}
      className={`capitalize text-white text-lg  ${theme.theme.colors.buttonFocus} ${theme.theme.colors.buttonHover} p-2 rounded-xl hover:text-xl w-32 transition-colors duration-1000 ease-in`}
    >
      {name}
    </button>
  );
}
