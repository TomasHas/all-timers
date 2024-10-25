import { IoSettingsSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoBarChartSharp } from "react-icons/io5";

interface TopMenuButtonProps {
  buttonName: string;
  handleButtonClick: () => void;
  color: string;
}

export default function TopMenuButton({
  buttonName,
  color,

  handleButtonClick,
}: TopMenuButtonProps) {
  let content;

  if (buttonName === "settings") {
    content = (
      <div>
        {" "}
        <button
          onClick={handleButtonClick}
          id={buttonName}
          className={`flex flex-row items-center w-fit gap-2 ${color} p-2 rounded-md hover:${color} focus:bg-green-300`}
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
          className={`flex flex-row items-center w-fit gap-2 ${color} h-10 p-2 rounded-md hover:${color} focus:bg-green-300`}
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
          className={`flex flex-row justify-center items-center w-fit text-xl ${color} h-10 p-2 rounded-md hover:${color} focus:bg-green-300`}
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
