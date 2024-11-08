import { colors } from "../../utils";
import ThemeSettingsModalColorOptionsButton from "./ThemeSettingsModalColorOptionsButton";
import { CgClose } from "react-icons/cg";
interface ThemeSettingsColorOptionsModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  buttonId: string;
}

export default function ThemeSettingsColorOptionsModal({
  isModalOpen,
  closeModal,
  buttonId,
}: ThemeSettingsColorOptionsModalProps) {
  // console.log(colors.red.buttonColor);
  // console.log(colors.name);
  // console.log(buttonId);

  if (!isModalOpen) return null;
  return (
    <div
      className=" flex flex-col h-fit
        absolute inset-0  items-center justify-center  shadow-lg
     z-10 bg-gray-200 w-full rounded-lg p-2"
    >
      <div className="flex flex-row justify-between w-full p-2 text-end">
        <p>select </p>
        <button onClick={closeModal}>
          <CgClose />
        </button>
      </div>
      <div
        className="flex flex-row gap-2 p-2
      "
      >
        <ThemeSettingsModalColorOptionsButton
          buttonTheme={colors.red.mainBackgroundColor}
          themeColor={colors.red.name}
          buttonId={buttonId}
        />
        <ThemeSettingsModalColorOptionsButton
          buttonTheme={colors.blue.mainBackgroundColor}
          themeColor={colors.blue.name}
          buttonId={buttonId}
        />
        <ThemeSettingsModalColorOptionsButton
          buttonTheme={colors.yellow.mainBackgroundColor}
          themeColor={colors.yellow.name}
          buttonId={buttonId}
        />
        <ThemeSettingsModalColorOptionsButton
          buttonTheme={colors.lime.mainBackgroundColor}
          themeColor={colors.lime.name}
          buttonId={buttonId}
        />
        <ThemeSettingsModalColorOptionsButton
          buttonTheme={colors.green.mainBackgroundColor}
          themeColor={colors.green.name} //red
          buttonId={buttonId} //pomodoro
        />
      </div>
    </div>
  );
}
