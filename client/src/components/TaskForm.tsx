import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Task = {
  title: string;
  description: string;
};

const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const loadTask = async (id: string) => {
    const res = await fetch(`http://localhost:5000/tasks/tasks/${id}`);
    const data = await res.json();
    setTask({ title: data.title, description: data.description });
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/tasks/tasks/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = params.id
        ? `http://localhost:5000/tasks/tasks/${params.id}`
        : "http://localhost:5000/tasks/tasks";

      const method = params.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      await response.json();
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-2/5">
        <h3 className="font-bold text-2xl my-3 text-white">
          {params.id ? "Update Task" : "Create Task"}
        </h3>
        <input
          type="text"
          name="title"
          placeholder="Write your title"
          className="border border-gray-400 p-2 rounded-md block my-2 w-full"
          onChange={handleChange}
          value={task.title}
          autoFocus
        />
        <textarea
          name="description"
          rows={4}
          placeholder="Write your description"
          className="border border-gray-400 p-2 rounded-md block my-2 w-full"
          onChange={handleChange}
          value={task.description}
        />
        <div className="flex justify-between">
          <button
            type={"submit" as "submit"}
            disabled={!task.title || !task.description}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Cargando..." : "Guardar"}
          </button>

          {params.id && (
            <button
            type={"button" as "button"}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              onClick={() => handleDelete(params.id!)}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
