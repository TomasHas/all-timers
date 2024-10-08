import TimerButton from "./TimerButton";

export default function Timer() {
  return (
    <div className="bg-red-600 h-96 w-fit pl-28 pr-28 flex flex-col items-center rounded-xl justify-between ">
      <div className="mt-6">
        <TimerButton name={"pomodoro"} />
        <TimerButton name={"short break"} />
        <TimerButton name={"long break"} />
      </div>
      <div className=" text-9xl text-white">25:00</div>
      <button className="mb-6 w-44">start</button>
    </div>
  );
}
