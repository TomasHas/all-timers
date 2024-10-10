import "./App.css";
import Tasks from "./components/tasks/Tasks";
import TimerComponent from "./components/timer/TimerComponent";

import TopMenu from "./components/timer/TopMenu";
function App() {
  return (
    <div className=" bg-rose-700 w-screen  flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  w-screen mt-20 md:w-screen lg:w-[60%]">
        <TopMenu />

        <div>
          {" "}
          <TimerComponent />
          <Tasks />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
