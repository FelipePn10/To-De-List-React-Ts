// Import Components
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Button } from './components/ButtonAdd/Button';
import { TaskList } from './components/TaskListArea/TaskList';

// Import styles/icons/symbols:
import styles from './App.module.css';
import './global.css';

//Import useState
import { useState } from 'react';

export function App() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState<string[]>([]);

  // Função para adicionar uma nova tarefa ao estado de tarefas
  const addTask = (taskName: string) => {
    setTasks([...tasks, taskName]);
  };

  return (
    <main>
      <Header />
      {/* Adicionar novas tarefas: */}
      <section className={styles.wrapper}>
        <div className={styles.taskInfoContainer}>
          {/* Passando a função addTask como prop para o componente Search */}
          <Search onAddTask={addTask} />
          {/* Passando a função addTask como prop onClick para o componente Button */}
          <Button onClick={() => addTask('Nova Tarefa')} />
        </div>

        {/* Vizualizar as tarefas */}
        <div className={styles.tasksList}>
          {/* Passando as tarefas para o componente TaskList */}
          <TaskList tasks={tasks} />
        </div>
      </section>
    </main>
  );
}

