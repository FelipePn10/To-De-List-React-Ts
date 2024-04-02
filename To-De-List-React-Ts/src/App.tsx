// Import React
import { useMemo, useState } from "react";
// Import Components
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Button } from "./components/ButtonAdd/Button";
import { TaskList } from "./components/TaskListArea/TaskList";

// Import styles/icons/symbols:
import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/TaskArea/Task";
import { TaskType } from "./types";

export function App() {
  // Estado para armazenar as tarefas:
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [task, setTask] = useState("");

  // Função para adicionar uma nova tarefa ao estado de tarefas:
  const addTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: taskName, done: false },
    ]);
  };

  const handleTaskDelete = (id: string) => {
    setTasks(tasks.filter((value) => value.id !== id));
  };
  const handleTaskChange = (id: string, done: boolean) => {
    setTasks(tasks.map((item) => (item.id === id ? { ...item, done } : item)));
  };

  const completed = useMemo(
    () =>
      tasks.reduce((total, task) => {
        return total + (task.done ? 1 : 0);
      }, 0),
    [tasks]
  );

  const handleTaskAdd: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <main>
      <Header />
      {/* Adicionar novas tarefas: */}
      <section className={styles.wrapper}>
        <form onSubmit={handleTaskAdd} className={styles.taskInfoContainer}>
          {/* Passando a função addTask como prop para o componente Search */}
          <Search task={task} setTask={setTask} />
          {/* Passando a função addTask como prop onClick para o componente Button */}
          <Button />
        </form>

        {/* Vizualizar as tarefas */}
        <div className={styles.tasksList}>
          <Task completed={completed} created={tasks.length} />
          {/* Passando as tarefas para o componente TaskList */}
          <TaskList
            onTaskChange={handleTaskChange}
            onTaskDelete={handleTaskDelete}
            tasks={tasks}
          />
        </div>
      </section>
    </main>
  );
}
