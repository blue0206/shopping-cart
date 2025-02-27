import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';
import { useAppSelector } from '../app/hooks';

/**
 * Renders a header component with a sticky position at the top of the page
 * so that header stays visible while scrolling down.
 * 
 * It has links to the home page and the shop page on the left side.
 * 
 * On the right side, it displays a link to the cart page and the number of 
 * items in the cart which are fetched from Redux store through useAppSelector
 * typed hook.
 * The number of items is hidden if the cart is empty.
 * 
 * @returns {ReactElement} - The rendered header component.
 */
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