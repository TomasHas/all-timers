// import TopMenuButton from "./TopMenuButton";
// import Modal from "./Modal";
// import { useState } from "react";

// export default function TopMenu() {
//   const [activeButton, setActiveButton] = useState("none");
//   const [isOpen, setIsOpen] = useState(false);
//   // const handleButtonClick = (buttonName: string): void => {
//   //   setActiveButton(buttonName);
//   //   setIsOpen(true);
//   // };

//   return (
//     <div className="flex flex-row items-center justify-between w-full p-4">
//       <p className=" text-white text-2xl capitalize">pomodoro</p>{" "}
//       <div className=" w-[50%] flex gap-3 justify-end">
//         <TopMenuButton buttonName={"report"} />
//         <TopMenuButton buttonName={"settings"} />
//         <TopMenuButton buttonName={"three Dots"} />
//       </div>
//       <Modal name={activeButton} isOpen={isOpen} />
//     </div>
//   );
// }
import TopMenuButton from "./TopMenuButton";
import Modal from "./Modal";
import { useState } from "react";

export default function TopMenu() {
  const [activeButton, setActiveButton] = useState<string>("none");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to handle button clicks
  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
    setIsOpen(true); // Open the modal when a button is clicked
  };

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
        />
        <TopMenuButton
          buttonName={"settings"}
          handleButtonClick={() => handleButtonClick("settings")}
        />
        <TopMenuButton
          buttonName={"three Dots"}
          handleButtonClick={() => handleButtonClick("three Dots")}
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
