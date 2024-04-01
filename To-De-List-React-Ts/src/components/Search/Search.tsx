//Import Styles
import styles from './Search.module.css'

export function Search() {
    return (
        <div className={styles.container}>
            <div className={styles['input-container']}>
                <input 
                    type="text" 
                    placeholder="Adicionar uma nova tarefa"
                />
            </div>
        </div>
    )
}