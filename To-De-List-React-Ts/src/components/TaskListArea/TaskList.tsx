// Importando estilos e ícone
import styles from './TaskList.module.css';
import Clipboard from './Clipboard.svg';

interface TaskListProps {
  tasks: string[]; // Definindo o tipo das tarefas como um array de strings
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="ícone de prancheta" />
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      )}
    </div>
  );
}
