import { X } from "lucide-react";

import { TTask } from "../../types/tasks";

type TasksProps = {
  tasks: TTask[];
  handleDeleteTaskOnClick: (id: string) => void;
};

const Tasks = ({ tasks, handleDeleteTaskOnClick }: TasksProps) => {
  if (tasks.length <= 0) {
    return (
      <div className="w-full h-auto flex items-center justify-center pt-16">
        <h1 className="text-zinc-300 text-2xl font-light">You are all set</h1>
      </div>
    );
  }

  return (
    <ul className="flex items-start justify-start flex-wrap gap-4 mt-4">
      {tasks.map((item) => {
        return (
          <li
            key={item.id}
            className="relative flex items-center justify-center gap-4 px-6 py-2 rounded-md bg-zinc-50"
          >
            <h4 className="text-lg font-medium">{item.task}</h4>{" "}
            <button
              onClick={() => handleDeleteTaskOnClick(item.id)}
              className="absolute w-6 h-6 flex items-center justify-center bg-red-200 hover:bg-red-400 text-white top-[-10px] right-[-10px] rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
