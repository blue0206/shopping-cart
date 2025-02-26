import { ReactElement } from 'react';
import { Header, Button } from "../";
import CartItem from './CartItem';
import styles from "../../styles/cart.module.css";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { emptyCart } from '../../features/cart/cartSlice';
import { useNavigate, Link } from 'react-router-dom';

function Cart(): ReactElement {
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart);

    const handleOrder = () => {
        alert("Thank you for shopping with us!");
        dispatch(emptyCart());
        navigate("/shop");
    }

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
        </div>
    );
}

export default Cart;