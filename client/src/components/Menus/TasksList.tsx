import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

type Task = {
  id: number;
  title: string;
  description: string;
};

const TasksList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks/tasks");
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TasksList;
