import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import { BrowserRouter as Router} from "react-router-dom";

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
    <> <Router>
      <Header handleAddTask={addTask} />
      <AddTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />

    {/* <Routes>
      <Route />
      <Route path="/todolist" element={<Home />} />
      <Route path="/kanban" element={<Services />} />
      <Route path="/calendar" element={<About />} />
      <Route path="/notes" element={<Favoris/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
  
    </Routes> */}
  </Router>
    
    </>
  );
}

export default App;
