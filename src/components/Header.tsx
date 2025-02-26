import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';
import { useAppSelector } from '../app/hooks';

function Header(): ReactElement {
    const cartQuantity = useAppSelector(state => state.cart.length);
    const itemCounterVisibility = cartQuantity > 0 ? "visible" : "hidden";

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
                    <NavLink to="/cart" className={`${styles.link} ${styles.cart}`}></NavLink>
                    <div 
                        className={styles.items} 
                        style={{visibility: itemCounterVisibility}}
                    >
                        {cartQuantity}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;