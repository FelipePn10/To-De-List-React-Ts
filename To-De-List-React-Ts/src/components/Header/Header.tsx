//Importando logo e estilos
import styles from './Header.module.css'
import rocketlogo from './rocket.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={rocketlogo} alt="logo da aplicação" />
      <h1>to <span>do</span> </h1>
    </header>
  )
}