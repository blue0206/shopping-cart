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

/**
 * Renders a product component which displays the product image, title, price,
 * and quantity. It conditionally renders button text to add the product to the 
 * cart or remove it from the cart. The quantity can be incremented or decremented 
 * using buttons, or manually input via the input field.
 * 
 * If the item has been added to cart, the quantity of the product in the cart is 
 * displayed and directly updated using dispatch. 
 * If the item hasn't been added to cart yet, then the quantity is initialized as 1
 * and the local component state is used for updating the quantity.
 *
 * When the user clicks on the "Add To Cart" or "Remove From Cart" button, an action is 
 * dispatched with the appropriate payload to add/remove the product to/from the cart.
 * 
 * @param {ProductProps} props The properties of the product.
 * @param {string} props.productId The unique id of the product.
 * @param {string} props.title The title of the product.
 * @param {string} props.price The price of the product.
 * @param {string} props.image The image URL of the product.
 * 
 * @returns {ReactElement} The rendered product component.
 */
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