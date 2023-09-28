import { useState } from "react";

import { TTask } from "@/types/tasks";

import CreateTask from "@/components/create-task";
import Tasks from "@/components/tasks";

export default function Home() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const handleDeleteTaskOnClick = (id: string) => {
    const updatedTaskArray = tasks.filter((item) => item.id !== id);
    setTasks(updatedTaskArray);
  };

  return (
    <main className="max-w-[1280px] mx-auto w-full h-full px-2 py-4 pt-16">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} handleDeleteTaskOnClick={handleDeleteTaskOnClick} />
    </main>
  );
}
