// Importando estilos e ícone
import styles from './TaskList.module.css';
import Clipboard from './Clipboard.svg';
import { TaskType } from '../../types';

// Essa interface serve  para definir os tipos de dados que a função "Task" pode receber
interface TaskListProps {
  onTaskChange: (taskId: string, done: boolean) => void;
  onTaskDelete: (taskId: string) => void;
  tasks: TaskType[]; // Definindo o tipo das tarefas como um array de strings
}

export function TaskList({ tasks,  onTaskDelete, onTaskChange }: TaskListProps) {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="ícone de prancheta" />
      {/* vai ser renderizado as tarefas, usando a função map para percorrer cada elemento da lista de tarefas */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li 
            key={index}>
              <input
              checked= {task.done}
              onChange={() => onTaskChange(task.id, ! task.done)} 
              type='checkbox'></input>{task.title} 
            <button onClick={() => onTaskDelete(task.id)}>Excluir</button></li>
          ))}
        </ul>
      ) : (<p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>)}
    </div>
  );
}
