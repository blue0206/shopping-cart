import { ReactElement } from "react";
import { Header } from ".";
import styles from "../styles/notFound.module.css";

function NotFound(): ReactElement {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.body}>
                <h1 className={styles.heading}>404</h1>
                <div className={styles.text}>This is not the web page you are looking for.</div>
            </div>
        </div>
    );
}

export default NotFound;