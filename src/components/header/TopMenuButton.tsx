import { IoSettingsSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoBarChartSharp } from "react-icons/io5";
import { usePomodoro } from "../../hooks";
import { colors } from "../../utils";

interface TopMenuButtonProps {
  buttonName: string;
  handleButtonClick: () => void;
}

export default function TopMenuButton({
  buttonName,

  handleButtonClick,
}: TopMenuButtonProps) {
  let content;
  const pomodoro = usePomodoro();
  if (buttonName === "settings") {
    content = (
      <div>
        {" "}
        <button
          onClick={handleButtonClick}
          id={buttonName}
          className={`flex flex-row items-center w-fit gap-2 ${
            pomodoro.darkMode && pomodoro.timerIsOn
              ? colors.gray.mainBackgroundColor
              : pomodoro.mode.colors.buttonColor
          } p-2 rounded-md ${pomodoro.mode.colors.buttonHover} ${
            pomodoro.mode.colors.buttonFocus
          } `}
        >
          {" "}
          <IoSettingsSharp />
          <p className=" text-white capitalize">{buttonName}</p>
        </button>
      </div>
    );
  } else if (buttonName === "report") {
    content = (
      <div>
        {" "}
        <button
          onClick={handleButtonClick}
          id={buttonName}
          className={`flex flex-row items-center w-fit gap-2 ${
            pomodoro.darkMode && pomodoro.timerIsOn
              ? colors.gray.mainBackgroundColor
              : pomodoro.mode.colors.buttonColor
          } h-10 p-2 rounded-md ${pomodoro.mode.colors.buttonHover} ${
            pomodoro.mode.colors.buttonFocus
          } `}
        >
          {" "}
          <IoBarChartSharp />
          <p className=" text-white capitalize">{buttonName}</p>
        </button>
      </div>
    );
  } else if (buttonName === "dots") {
    content = (
      <div>
        {" "}
        <button
          onClick={handleButtonClick}
          id={buttonName}
          className={`flex flex-row justify-center items-center w-fit text-xl ${
            pomodoro.darkMode && pomodoro.timerIsOn
              ? colors.gray.mainBackgroundColor
              : pomodoro.mode.colors.buttonColor
          } h-10 p-2 rounded-md ${pomodoro?.mode.colors.buttonHover}  `}
        >
          {" "}
          <BsThreeDotsVertical /> <p className=" text-white"></p>
        </button>
      </div>
    );
  }
  return (
    <div>
      {" "}
      <div className=" text-white">{content}</div>
    </div>
  );
}
