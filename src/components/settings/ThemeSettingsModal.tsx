import { colors } from "../../utils";
import ThemeSettingsModalButton from "./ThemeSettingsModalButton";
import { CgClose } from "react-icons/cg";
interface ThemeSettingsModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function ThemeSettingsModal({
  isModalOpen,
  closeModal,
}: ThemeSettingsModalProps) {
  console.log(colors.red.buttonColor);
  if (!isModalOpen) return null;
  return (
    <div
      className=" flex flex-col h-fit
        absolute inset-0  items-center justify-center  shadow-lg
     z-10 bg-gray-200 w-full rounded-lg"
    >
      {" "}
      <div className="flex flex-row justify-between w-full p-2 text-end">
        <p>select </p>
        <button onClick={closeModal}>
          {" "}
          <CgClose />
        </button>
      </div>
      <div
        className="flex flex-row gap-2 p-2
      "
      >
        {" "}
        <ThemeSettingsModalButton
          buttonTheme={colors.red.mainBackgroundColor}
        />
        <ThemeSettingsModalButton
          buttonTheme={colors.blue.mainBackgroundColor}
        />
        <ThemeSettingsModalButton
          buttonTheme={colors.yellow.mainBackgroundColor}
        />
        <ThemeSettingsModalButton
          buttonTheme={colors.lime.mainBackgroundColor}
        />
        <ThemeSettingsModalButton
          buttonTheme={colors.green.mainBackgroundColor}
        />
      </div>
    </div>
  );
}
