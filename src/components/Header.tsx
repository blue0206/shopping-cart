import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header(): ReactElement {

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <nav className={styles.nav}>
                    <NavLink to="/" className={styles.link}>Home</NavLink>
                    <NavLink to="/shop" className={styles.link}>Shop</NavLink>
                </nav>
            </div>
            <div className={styles.right}>
                <nav className={styles.nav}>
                    <NavLink to="/cart" className={`${styles.link} ${styles.cart}`}>
                        <div className={styles.items}></div>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;