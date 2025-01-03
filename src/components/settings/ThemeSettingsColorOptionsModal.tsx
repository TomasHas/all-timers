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
        className="flex flex-row gap-2 p-2 items-center
      "
      >
        <div className="">
          <ThemeSettingsModalColorOptionsButton
            buttonBg={colors.red.mainBackgroundColor}
            buttonColor={colors.red.name}
            buttonId={buttonId}
            // activeColor={borderFocus}
          />
        </div>{" "}
        <div>
          <ThemeSettingsModalColorOptionsButton
            buttonBg={colors.blue.mainBackgroundColor}
            buttonColor={colors.blue.name}
            buttonId={buttonId}
            // activeColor={borderFocus}
          />{" "}
        </div>
        <div>
          <ThemeSettingsModalColorOptionsButton
            buttonBg={colors.yellow.mainBackgroundColor}
            buttonColor={colors.yellow.name}
            buttonId={buttonId}
            // activeColor={borderFocus}
          />
        </div>{" "}
        <div>
          <ThemeSettingsModalColorOptionsButton
            buttonBg={colors.lime.mainBackgroundColor}
            buttonColor={colors.lime.name}
            buttonId={buttonId}
            // activeColor={borderFocus}
          />{" "}
        </div>{" "}
        <div>
          <ThemeSettingsModalColorOptionsButton
            buttonBg={colors.green.mainBackgroundColor}
            buttonColor={colors.green.name} //red
            buttonId={buttonId}
            // activeColor={borderFocus}
            //pomodoro
          />
        </div>
      </div>
    </div>
  );
}
