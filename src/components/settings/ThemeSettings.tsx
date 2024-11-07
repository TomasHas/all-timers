import { IoColorPalette } from "react-icons/io5";
import ThemeSettingsButton from "./ThemeSettingsButton";
import { useState } from "react";
import ThemeSettingsModal from "./ThemeSettingsModal";
import { useTheme } from "../../hooks";

export default function ThemeSettings() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((t) => !t);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  return (
    <div className=" flex-col flex gap-4 mb-6">
      <div className=" flex flex-row items-center gap-2">
        <IoColorPalette className=" text-gray-400 text-2xl" />
        <h1 className=" text-gray-400 text-xl">theme color</h1>
      </div>
      <div className=" relative flex-row flex justify-between items-center">
        <p>color themes</p>{" "}
        <div className=" flex-row flex gap-2">
          <ThemeSettingsButton
            openModal={openModal}
            buttonTheme={theme.pomodoro.colors.buttonColor}
          />
          <ThemeSettingsButton
            openModal={openModal}
            buttonTheme={theme.shortBreak.colors.buttonColor}
          />
          <ThemeSettingsButton
            openModal={openModal}
            buttonTheme={theme.longBreak.colors.buttonColor}
          />{" "}
          <ThemeSettingsModal
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-between">
        <p>dark mode when running</p>{" "}
        <button
          onClick={handleToggle}
          className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
            isToggled ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isToggled ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
