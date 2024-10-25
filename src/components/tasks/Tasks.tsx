import { useState, useRef } from "react";
import { Task, TaskManager } from "./taskClasses";
import TaskModal from "./TaskModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { FaCircleCheck } from "react-icons/fa6";
import { Theme } from "../../App";

interface TasksProps {
  theme: Theme;
}
export default function Tasks({ theme }: TasksProps) {
  const taskManager = useRef(new TaskManager());
  const [tasks, setTasks] = useState<Task[]>(taskManager.current.getTasks());
  // const [tasks, setTasks] = useState<objec[]>(taskManager.current.getTasks());

  const [openModal, setOpenModal] = useState(false);
  const [bool, setBool] = useState(false);

  function addTaskClick(): void {
    setOpenModal(true);
  }

  const handleClose = (): void => {
    setOpenModal(false);
  };
  // console.log(bool);

  const handleAddTask = (newTask: string): void => {
    taskManager.current.addTask(newTask); // Sends string to method. The method initiates instance.
    setTasks(taskManager.current.getTasks());

    setBool((prev) => !prev);

    console.log(tasks);
    console.log(taskManager.current.getTasks());
  };
  console.log(theme.buttonColor);

  const handleDelete = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault(); // If needed
    taskManager.current.deleteTask(id);
    setTasks(taskManager.current.getTasks());
  };

  return (
    <div className="relative w-full mt-20">
      <div className=" flex flex-row justify-between w-full mt-5 mb-5">
        <p className=" text-white text-xl">Tasks</p>{" "}
        <div>
          <BsThreeDotsVertical className=" text-white text-3xl" />
        </div>
      </div>
      <div className=" bg-red-200 h-1 w-full mb-8"></div>
      <div className=" relative mb-20">
        {tasks && (
          <ul className="flex flex-col mb-10 gap-2">
            {tasks.map((task, i) => (
              <li
                key={i}
                className=" flex flex-row items-center rounded-lg h-20 w-full bg-white"
              >
                <FaCircleCheck className="w-[10%] text-3xl text-gray-200" />
                <div className=" flex flex-row w-[60%] justify-between">
                  {" "}
                  <p className=" text-xl font-bold">{task.text}</p>
                  <p className=" text-xl font-bold">{i + 1}</p>
                </div>

                <div className="w-[30%] flex justify-end">
                  {" "}
                  <button
                    className="mr-4"
                    onClick={(event) => handleDelete(i, event)}
                  >
                    delete
                  </button>
                </div>
              </li> // Adjust based on Task properties
            ))}
          </ul>
        )}
        {!openModal && (
          <div
            className={`flex flex-col justify-center items-center w-full rounded-xl border-dashed border-2 border-red-300 h-20 ${theme.componentBackgroundColor}`}
          >
            <div className=" flex flex-row justify-center items-center w-full ">
              <button
                onClick={addTaskClick}
                className=" flex flex-row  bg-transparent border-transparent text-red-200 text-xl gap-2"
              >
                <HiPlusCircle className=" text-3xl text-red-200" />
                <p className="capitalize">add task</p>
              </button>
            </div>
          </div>
        )}
        {openModal && (
          <div className="  flex flex-row w-full">
            <TaskModal onAddTask={handleAddTask} onClose={handleClose} />

            {/* <button onClick={handleClose}>cancel</button> */}
          </div>
        )}
      </div>
    </div>
  );
}
