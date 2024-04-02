//Importando os estilos
import styles from './Search.module.css';

//Essa interface é para definir os tipos de dados que a função Search pode receber por parâmetro
interface SearchProps {
  task: string;
  setTask: (task: string) => void; //Limpar o form
}

export function Search({ task, setTask }: SearchProps) {

  return (
    // o input  possui um evento de mudança no seu valor, que chama a função setTask
      <input
        className={styles.container} 
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
  );
}
