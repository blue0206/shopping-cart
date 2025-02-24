import { ReactElement } from 'react';
import { Button, Header } from './components';
import styles from "./styles/app.module.css";
import { Link } from 'react-router-dom';

function App(): ReactElement {

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.heroText}>
        <h1 className={styles.h1}>Your shopping spree starts here.</h1>
        <Button className={styles.button}>
          <Link to="/shop" className={styles.link}>Let's Go!</Link>
        </Button>
      </div>
    </div>
  );
}

export default App;
