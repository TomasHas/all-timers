import TopMenuButton from "./TopMenuButton";
import Modal from "./Modal";
import { useState } from "react";
import { Theme } from "../../App";

interface TopMenuProps {
  theme: Theme;
}

export default function TopMenu({ theme }: TopMenuProps) {
  const [activeButton, setActiveButton] = useState<string>("none");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to handle button clicks
  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
    setIsOpen(true); // Open the modal when a button is clicked
  };
  console.log(theme.buttonColor);

  const handleClose = () => {
    setIsOpen(false);
    console.log(isOpen);
  };
  return (
    <div className="flex flex-row items-center justify-between w-full p-4">
      <p className="text-white text-2xl capitalize">pomodoro</p>{" "}
      <div className="w-[50%] flex gap-3 justify-end">
        {/* Each button calls the handleButtonClick function */}
        <TopMenuButton
          buttonName={"report"}
          handleButtonClick={() => handleButtonClick("report")}
          color={theme.buttonColor}
        />
        <TopMenuButton
          buttonName={"settings"}
          handleButtonClick={() => handleButtonClick("settings")}
          color={theme.buttonColor}
        />
        <TopMenuButton
          buttonName={"dots"}
          handleButtonClick={() => handleButtonClick("dots")}
          color={theme.buttonColor}
        />
      </div>
      {isOpen && (
        <Modal
          name={activeButton}
          isOpen={isOpen}
          handleClose={() => handleClose()}
        />
      )}
    </div>
  );
}
