import { useState } from "react";

interface TaskModal {
  onAddTask: (text: string) => void;

  onClose: () => void;
}

export default function TaskModal({ onAddTask, onClose }: TaskModal) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInputText(e.target.value);
  };
  const handleClose = () => {
    onClose();
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputText);
    onAddTask(inputText);
    handleClose();
    // Clear the input field
    setInputText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="  flex flex-col mb-20 gap-4 w-full justify-between rounded-xl  bg-white"
    >
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="What are you working on?"
        required
        autoFocus
        className=" animate animate-pulse bg-transparent shadow-none hover:bg-transparent hover:border-none hover:shadow-none border-transparent  rounded-3xl w-full text-xl font-bold italic p-3 mt-3  focus:outline-none "
      />
      <div className=" flex flex-row justify-end p-3 gap-3  bg-slate-200 rounded-b-xl">
        <button type="button" className=" bg-transparent" onClick={handleClose}>
          Close
        </button>{" "}
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
