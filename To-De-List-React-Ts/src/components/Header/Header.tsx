//Import Styles
import styles from './Header.module.css'
import rocketlogo from './rocket.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img
            src={rocketlogo}
            alt="Logotipo rocket" />
            <h1><strong>todo</strong></h1>
        </header>
    )
}