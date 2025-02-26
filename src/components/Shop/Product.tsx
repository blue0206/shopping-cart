import { ReactElement, useState } from 'react';
import styles from '../../styles/product.module.css';
import { Button, Input } from '../';
import { useAppDispatch } from '../../app/hooks';
import { addToCart, removeFromCart } from '../../features/cart/cartSlice';
import { CartItem } from '../../types';

type ProductProps = {
    productId: string;
    title: string;
    price: string;
    image: string;
}

function Product({
    productId,
    title,
    price,
    image
}: ProductProps): ReactElement {

    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < 100 && quantity > 0) {
            setQuantity(quantity + 1);
        }
    }
    const handleDecrement = () => {
        if (quantity > 1 && quantity <= 100) {
            setQuantity(quantity - 1);
        }
    }
    const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value)
        if (newQuantity > 0 && newQuantity <= 100) {
            setQuantity(newQuantity);
        }
    }

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            id: productId,
            title,
            price,
            image,
            quantity
        }
        dispatch(addToCart(cartItem));
    }

    const handleDeleteFromCart = () => {
        dispatch(removeFromCart(productId));
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
                    className={styles.add} 
                    onChange={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default Product;