import styles from './Task.module.css'


export function Task() {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>0</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>0</span>
            </aside>
        </header>
    )
}