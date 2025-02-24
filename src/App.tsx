import { ReactElement } from 'react';
import { Button } from './components';
import styles from "./styles/app.module.css";

function App(): ReactElement {

  return (
    <>
      <div className={styles.heroText}>
        <h1 className={styles.h1}>Your shopping spree starts here.</h1>
        <Button className={styles.button}>Let's Go!</Button>
      </div>
    </>
  );
}

export default App;
