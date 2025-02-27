import { ReactElement, useEffect, useState } from 'react';
import { Header, Button } from "../";
import CartItem from './CartItem';
import styles from "../../styles/cart.module.css";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { emptyCart } from '../../features/cart/cartSlice';
import { useNavigate, Link } from 'react-router-dom';

/**
 * Renders the cart component which displays the items in the cart, 
 * calculates the total price, and allows the user to place an order.
 * 
 * If the cart is empty, it displays a message with a link to the shop.
 * 
 * When the user places an order, it shows a popup with a countdown 
 * and navigates to the home page after 5 seconds and empties the cart.
 * 
 * @returns {ReactElement} The cart component.
 */
function Cart(): ReactElement {
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart);
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        let interval: number;
        if (isVisible && timer >= 0) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [isVisible, timer]);

    const handleOrder = () => {
        setTimer(5);    // Reset timer on subsequent orders.
        setIsVisible(true);
        setTimeout(() => {
            navigate("/");
            setIsVisible(false);
            dispatch(emptyCart());
        }, 5000)
    }

    return (
        <div>
            <Header />
            {
                cartItems.length > 0 ? (
                    <ul className={styles.cartContainer}>
                        {
                            cartItems.map(item => (
                                <li key={item.id}>
                                    <CartItem 
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
                                Grand Total ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
                            </div>
                            <div>
                                ${cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                ) : (
                    <div className={`${styles.cartContainer} ${styles.emptyText}`}>The cart is empty. Please add some items from the <Link to="/shop">Shop</Link></div>
                )
            }
            {
                cartItems.length > 0 && (
                    <div className={styles.order}>
                        <Button 
                            className={styles.orderBtn} 
                            onClick={handleOrder} 
                        >
                            Place Order
                        </Button>
                    </div>
                )
            }
            {
                isVisible && (
                    <div className={styles.popup}>
                        <div className={styles.popupText}>
                            Thank you for shopping with us! Redirecting in {timer} seconds...
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;