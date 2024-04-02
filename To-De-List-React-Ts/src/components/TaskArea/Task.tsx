import styles from './Task.module.css'

interface TaskProps {
    created: number;
    completed: number;
}

export function Task(props: TaskProps) {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{props.created}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>{props.completed} de {props.created}</span>
            </aside>
        </header>
    )
}