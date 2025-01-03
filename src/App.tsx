import "./App.css";
import TopMenu from "./components/header/TopMenu";
import Tasks from "./components/tasks/Tasks";
import TimerComponent from "./components/timer/TimerComponent";

import { usePomodoro } from "./hooks";
function App() {
  const pomodoro = usePomodoro();

  return (
    <div>
      {" "}
      <div
        className={` transition-colors duration-500 ease-out ${pomodoro?.mode.colors.mainBackgroundColor} w-screen  flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col items-center  w-screen mt-20 md:w-screen lg:w-[60%]">
          <TopMenu />

          <div>
            {" "}
            <TimerComponent />
            <Tasks />
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
