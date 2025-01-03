import TimerSettings from "../settings/TimerSettings";
import ThemeSettings from "../settings/ThemeSettings";
import SoundSettings from "../settings/SoundSettings";
import { usePomodoro } from "../../hooks";
interface ModalProps {
  //   toggle: boolean;
  name: string;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ name, isOpen, handleClose }: ModalProps) {
  const pomodoro = usePomodoro();
  if (!isOpen) return null;
  const handleReset = () => {
    pomodoro.resetLocalStorage();
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center  bg-opacity-90  z-10 ">
      {/* <div className="relative w-[500px] bg-white p-7 rounded-lg shadow-lg  scrollbar-hide"> */}
      <div className=" relative bg-white  w-full max-w-lg h-full max-h-[90vh] p-10  overflow-y-auto scrollbar-hide rounded-lg">
        {name === "report" && (
          <div className="capitalize font-bold mt-4">Report </div>
        )}
        {name === "settings" && (
          <div className="capitalize font-bold mt-4 flex flex-col w-full">
            <p className=" w-full text-center mb-10">Settings Dashboard</p>
            <button
              className={` absolute top-2 right-30 bg-red-600 hover:bg-red-500 p-2 rounded-lg text-black`}
              onClick={handleReset}
            >
              Reset
            </button>
            <TimerSettings />
            <div className="border-t border-gray-300 my-4"></div>
            <ThemeSettings />
            <div className="border-t border-gray-300 my-4"></div>
            <SoundSettings />
          </div>
        )}
        {name === "three Dots" && (
          <div className="capitalize font-bold mt-4">Three Dots Dashboard</div>
        )}

        <button
          className={`absolute top-2 right-2 bg-red-600 hover:bg-red-500 p-2 rounded-lg text-white`}
          onClick={handleClose}
        >
          {" "}
          close
        </button>
      </div>
    </div>
  );
}
