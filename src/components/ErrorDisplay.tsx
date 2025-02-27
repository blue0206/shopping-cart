import { ReactElement } from 'react';
import { Header } from ".";
import styles from "../styles/error.module.css";

/**
 * Renders the error component which displays an error message and a header.
 * 
 * @returns {ReactElement} The rendered error component.
 */
function Error(): ReactElement {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.errorBody}>
                <h1 className={styles.heading}>Oops!</h1>
                <div className={styles.text}>Sorry, an unexpected error has occurred.</div>
            </div>
        </div>
    )
}

export default Error;