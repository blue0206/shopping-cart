import { ReactElement } from 'react';
import { Header, Button } from "../";
import CartItem from './CartItem';
import { useAppSelector } from '../../app/hooks';
import styles from "../../styles/cart.module.css";

function Cart(): ReactElement {
    const cartItems = useAppSelector(state => state.cart);

    return (
        <div>
            <Header />
            {
                cartItems.length > 0 ? (
                    <ul className={styles.cartContainer}>
                        {
                            cartItems.map(item => (
                                <li>
                                    <CartItem 
                                        key={item.id} 
                                        id={item.id} 
                                        title={item.title} 
                                        image={item.image} 
                                        price={item.price} 
                                        quantity={item.quantity} 
                                    />
                                </li>
                            ))
                        }
                        <li className={styles.totalContainer}>
                            <div>
                                Grand Total
                            </div>
                            <div>
                                ${cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                ) : (
                    <div className={styles.cartContainer}>The cart is empty.</div>
                )
            }
            {
                cartItems.length > 0 && (
                    <div className={styles.order}>
                        <Button className={styles.orderBtn}>Place Order</Button>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;