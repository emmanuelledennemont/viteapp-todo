import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";

const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const addTask = (taskTitle) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  return (
    <>
      <Header handleAddTask={addTask} />
      <AddTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;
