import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header(): ReactElement {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <nav className={styles.nav}>
                    <NavLink className={styles.link}>Home</NavLink>
                    <NavLink className={styles.link}>Shop</NavLink>
                </nav>
            </div>
            <div className={styles.right}>
                <nav className={styles.nav}>
                    <NavLink className={styles.link}>Cart</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;