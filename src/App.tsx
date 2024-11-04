import "./App.css";
import TopMenu from "./components/timer/TopMenu";
import Tasks from "./components/tasks/Tasks";
import TimerComponent from "./components/timer/TimerComponent";
import { ThemeContext, useTheme } from "./contexts/ThemeContext";
function App() {
  const theme = useTheme(ThemeContext);

  return (
    <div>
      {" "}
      <div
        className={` transition-colors duration-1000 ease-in ${theme?.theme.colors.mainBackgroundColor} w-screen  flex flex-col justify-center items-center`}
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
