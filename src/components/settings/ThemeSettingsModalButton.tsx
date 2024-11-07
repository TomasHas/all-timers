interface ThemeSettingsButtonProps {
  buttonTheme: string;
}
export default function ThemeSettingsModalButton({
  buttonTheme,
}: ThemeSettingsButtonProps) {
  return (
    <div>
      <button className={`h-10 w-10 rounded-lg ${buttonTheme}  `}></button>
    </div>
  );
}
