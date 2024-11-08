import { HiOutlineSpeakerWave } from "react-icons/hi2";

export default function ThemeSettings() {
  const handleChange = () => {};
  return (
    <div className=" flex-col flex gap-4">
      <div className=" flex flex-row items-center gap-2">
        <HiOutlineSpeakerWave className=" text-gray-400 text-2xl" />
        <h1 className=" text-gray-400 text-xl">sound</h1>{" "}
      </div>
      <div className=" flex-col flex gap-4">
        <div className="flex flex-row justify-between">
          <p>alarm sound</p>{" "}
          <div className=" bg-gray-300 h-10 w-fit p-2 rounded-md">dropdown</div>
        </div>
        <div className="   flex flex-row justify-end  h-10 rounded-md p-2">
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            onChange={handleChange}
            className="w-1/2 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>
      <div>
        <p>repeat</p>
        <div></div>
      </div>
      <div className="flex-col flex gap-4">
        <div className=" flex flex-row justify-between">
          <p>ticking sound</p>{" "}
          <div className=" bg-gray-300 h-10 w-fit p-2 rounded-md">dropdown</div>
        </div>{" "}
        <div className="   flex flex-row justify-end  h-10 rounded-md p-2">
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            onChange={handleChange}
            className="w-1/2 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
}
