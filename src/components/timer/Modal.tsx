import TimerSettings from "./TimerSettings";
interface Modal {
  //   toggle: boolean;
  name: string;
  isOpen: boolean;
}

export default function Modal({
  name,
  isOpen,
  handleClose,
}: {
  name: string;
  isOpen: boolean;
  handleClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-40 md:left-[25%] lg:left-[25%] md:w-1/2 lg:w-[50%]">
      <div className=" relative h-full p-10 bg-white rounded-xl flex flex-col items-center mt-4">
        {name === "report" && (
          <div className="capitalize font-bold mt-4">Report </div>
        )}
        {name === "settings" && (
          <div className="capitalize font-bold mt-4 flex flex-col w-full">
            <p className=" w-full text-center mb-10">Settings Dashboard</p>
            <TimerSettings />
          </div>
        )}
        {name === "three Dots" && (
          <div className="capitalize font-bold mt-4">Three Dots Dashboard</div>
        )}
        <button
          className="absolute top-2 right-2 bg-red-500 "
          onClick={handleClose}
        >
          {" "}
          close
        </button>
      </div>
    </div>
  );
}
