import React, { useState, useRef, useEffect } from "react";
import Todos from "./Todos";

function Task() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, inputRef.current.value]);

      setVisible(true);
    }
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex justify-center mb-6">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            ref={inputRef}
            className="border rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Add todo..."
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition"
          >
            +
          </button>
        </form>
      </div>
      <div className="space-y-2">
        {visible &&
          tasks.map((task, index) => (
            <Todos
              key={index}
              index={index}
              task={task}
              handleDelete={(index) =>
                setTasks((prevTasks) => {
                  const updatedTasks = [...prevTasks];
                  updatedTasks.splice(index, 1);
                  return updatedTasks;
                })
              }
            />
          ))}
      </div>
    </div>
  );
}

export default Task;
