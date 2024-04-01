// Import Components
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';

// Import styles/icons/sybomls:
import styles from './App.module.css';
import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Search />
      </div>
    </div>
  )
}
