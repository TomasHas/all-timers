import { IoSettingsSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoBarChartSharp } from "react-icons/io5";
import { useTheme, ThemeContext } from "../../contexts/ThemeContext";
interface TopMenuButtonProps {
  buttonName: string;
  handleButtonClick: () => void;
}

export default function TopMenuButton({
  buttonName,

  handleButtonClick,
}: TopMenuButtonProps) {
  let content;
  const theme = useTheme(ThemeContext);
  if (buttonName === "settings") {
    content = (
      <div>
        {" "}
        <button
          onClick={handleButtonClick}
          id={buttonName}
          className={`flex flex-row items-center w-fit gap-2 ${theme.theme.colors.buttonColor} p-2 rounded-md ${theme.theme.colors.buttonHover} focus:bg-green-300`}
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
          className={`flex flex-row items-center w-fit gap-2 ${theme.theme.colors.buttonColor} h-10 p-2 rounded-md ${theme.theme.colors.buttonHover} focus:bg-green-300`}
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
          className={`flex flex-row justify-center items-center w-fit text-xl ${theme.theme.colors.buttonColor} h-10 p-2 rounded-md ${theme.theme.colors.buttonHover}  focus:bg-green-300`}
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
