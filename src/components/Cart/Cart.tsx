import { ReactElement } from 'react';
import { Header } from "../";
import CartItem from './CartItem';
import { useAppSelector } from '../../app/hooks';

function Cart(): ReactElement {
    const cartItems = useAppSelector(state => state.cart);

    return (
        <div>
            <Header />
            {
                cartItems.length > 0 ? (
                    <ol>
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
                    </ol>
                ) : (
                    <div>The cart is empty.</div>
                )
            }
        </div>
    );
}

export default Cart;