interface TimerButtonProps {
  name: string;
  color: string;
  selectTheme: (color: string) => void;

  focus: string;
  hover: string;
  componentBackground: string;
}

export default function TimerButton({
  name,
  focus,
  selectTheme,
}: TimerButtonProps) {
  const handleClick = (): void => {
    selectTheme(name);
  };

  return (
    <button
      onClick={handleClick}
      className={`capitalize text-white text-lg ${focus} p-2 rounded-xl hover:text-xl w-32 transition-colors duration-1000 ease-in`}
    >
      {name}
    </button>
  );
}
