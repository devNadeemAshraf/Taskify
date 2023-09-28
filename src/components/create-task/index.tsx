import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Plus, X } from "lucide-react";
import { TTask } from "../../types/tasks";

type CreateTaskProps = {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};

export default function CreateTask({ tasks, setTasks }: CreateTaskProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function enterKeyPressed(key: KeyboardEvent) {
      if (!(inputValue === "") && key.code === "Enter") {
        handleAddOnClick();
      }
    }

    window.addEventListener("keydown", enterKeyPressed);
    return () => {
      window.removeEventListener("keydown", enterKeyPressed);
    };
  }, [inputValue]);

  const handleAddOnClick = () => {
    setInputValue("");
    console.log("Added");

    const id = uuidv4();
    const newTask: TTask = {
      id,
      task: inputValue,
    };
    const items = [...tasks, newTask];
    setTasks(items);
  };

  return (
    <div className="border rounded-md flex items-center justify-center gap-2 px-4 py-2">
      <input
        className="w-full h-full outline-none text-base"
        type="text"
        placeholder="Add your task..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          setInputValue("");
        }}
        className="w-10 h-10 flex items-center justify-center bg-zinc-50 hover:bg-zinc-100 rounded-md transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddOnClick}
        className="w-10 h-10 flex items-center justify-center bg-zinc-50 hover:bg-zinc-100 rounded-md transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
