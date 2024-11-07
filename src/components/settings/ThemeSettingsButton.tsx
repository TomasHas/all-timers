interface ThemeSettingsButtonProps {
  buttonTheme: string;
  openModal: () => void;
}
export default function ThemeSettingsButton({
  buttonTheme,
  openModal,
}: ThemeSettingsButtonProps) {
  return (
    <div>
      <button
        onClick={openModal}
        className={`h-10 w-10 rounded-lg ${buttonTheme}`}
      ></button>
    </div>
  );
}
