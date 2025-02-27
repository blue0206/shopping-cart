import { ReactElement, useState } from 'react';
import styles from '../../styles/product.module.css';
import { Button, Input } from '../';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../features/cart/cartSlice';
import { CartItem } from '../../types';

type ProductProps = {
    productId: string;
    title: string;
    price: string;
    image: string;
}

enum CartBtnState {
    add = "add",
    remove = "remove"
}

function Product({
    productId,
    title,
    price,
    image
}: ProductProps): ReactElement {
    
    const productInCart = useAppSelector(state => state.cart.find(item => item.id === productId));
    const dispatch = useAppDispatch();
    
    const [quantity, setQuantity] = useState(productInCart ? productInCart.quantity : 1);
    const [btnState, setBtnState] = useState<CartBtnState>(productInCart ? CartBtnState.remove : CartBtnState.add);

    const handleIncrement = () => {
        if (quantity < 100 && quantity > 0) {
            if (productInCart) {
                dispatch(incrementQuantity(productId));
            }
            setQuantity(quantity + 1);
        }
    }
    const handleDecrement = () => {
        if (quantity > 1 && quantity <= 100) {
            if (productInCart) {
                dispatch(decrementQuantity(productId));
            }
            setQuantity(quantity - 1);
        }
    }
    const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value)
        if (newQuantity > 0 && newQuantity <= 100) {
            if (productInCart) {
                dispatch(incrementQuantity(productId))
            }
            setQuantity(newQuantity);
        }
    }

    const handleCartOperation = () => {
        if (btnState === CartBtnState.add) {
            const cartItem: CartItem = {
                id: productId,
                title,
                price,
                image,
                quantity
            }
            dispatch(addToCart(cartItem));
            setBtnState(CartBtnState.remove);
        } else {
            dispatch(removeFromCart(productId));
            setBtnState(CartBtnState.add);
        }
    }

    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={`An image of ${title}`} />
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.price}>{price}</div>
                <div className={styles.quantity}>
                    <Button 
                        className={styles.qtySpin} 
                        onClick={handleDecrement} 
                    >
                        -
                    </Button>
                    <Input 
                        type='number' 
                        className={styles.qtyInput} 
                        value={quantity} 
                        onChange={handleQuantityInput} 
                    />
                    <Button 
                        className={styles.qtySpin} 
                        onClick={handleIncrement}
                    >
                        +
                    </Button>
                </div>
                <Button 
                    className={styles[btnState]} 
                    onClick={handleCartOperation}
                >
                    {btnState === CartBtnState.add ? "Add To Cart" : "Remove From Cart"}
                </Button>
            </div>
        </div>
    );
}

export default Product;