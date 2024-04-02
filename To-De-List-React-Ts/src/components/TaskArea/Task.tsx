//Importando os estilos
import styles from './Task.module.css'

//Essa interface serve para  definir as propriedades que a Task vai ter
interface TaskProps {
    created: number;
    completed: number;
}

export function Task(props: TaskProps) {
    return (
        <header className={styles.container}>
            <aside>
                <p className={styles.created}>Tarefas criadas</p>
                <span>{props.created}</span>
            </aside>

            <aside>
                <p className={styles.completed}>Concluídas</p>
                <span>{props.completed} de {props.created}</span>
            </aside>
        </header>
    )
}