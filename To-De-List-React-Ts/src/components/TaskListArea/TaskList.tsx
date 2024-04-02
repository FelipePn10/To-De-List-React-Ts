// Importando estilos, ícones e types
import styles from './TaskList.module.css';
import Clipboard from './Clipboard.svg';
import { TaskType } from '../../types';
import { Trash } from '@phosphor-icons/react';

// Essa interface serve  para definir os tipos de dados que a função "Task" pode receber
interface TaskListProps {
  onTaskChange: (taskId: string, done: boolean) => void;
  onTaskDelete: (taskId: string) => void;
  tasks: TaskType[]; // Definindo o tipo das tarefas como um array de strings
}

export function TaskList({ tasks,  onTaskDelete, onTaskChange }: TaskListProps) {
  
  
  return (
    <div className={styles.container}>
      <img className={tasks.length > 0 ? styles.hide : ''} src={Clipboard} alt="ícone de prancheta" />
      {/* vai ser renderizado as tarefas, usando a função map para percorrer cada elemento da lista de tarefas */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li
            className={styles.taskitem}
            key={index}>
            <div className={styles.checkboxWrapper}>
              <input
              className={styles.checkbox}
              checked= {task.done}
              onChange={() => onTaskChange(task.id, ! task.done)} 
              type="checkbox"></input></div>
              <label id={task.done ? styles.Checked : ''}>{task.title}</label>
            <button className={styles.deletebutton} onClick={() => onTaskDelete(task.id)}>
                <Trash size={22} />
              </button></li>
          ))}
        </ul>
      ) : (<p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>)}
    </div>
  );
}
