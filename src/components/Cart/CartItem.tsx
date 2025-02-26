import { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { CartItem as CartItemProps } from "../../types";
import { Button } from "../";
import styles from "../../styles/cartItem.module.css";

function CartItem({
    id,
    title,
    price,
    image,
    quantity
}: CartItemProps): ReactElement {

    const dispatch = useAppDispatch();

    const handleDecrement = () => {
        if (quantity > 1 && quantity <= 100) {
            dispatch(decrementQuantity(id));
        }
    }

    const handleIncrement = () => {
        if (quantity >= 1 && quantity < 100) {
            dispatch(incrementQuantity(id));
        }
    }

    const handleRemove = () => {
        dispatch(removeFromCart(id));
    }
    
    return (
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <img 
                    src={image} 
                    alt={`An image of ${title}`} 
                    className={styles.image}
                />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.options}>
                    <div className={styles.qty}>
                        <Button 
                            className={styles.qtySpin} 
                            onClick={handleDecrement} 
                        >
                            -
                        </Button>
                        <div>
                            {quantity}
                        </div>
                        <Button 
                            className={styles.qtySpin} 
                            onClick={handleIncrement}
                        >
                            +
                        </Button>
                    </div>
                    <div>
                        <Button 
                            className={styles.remove} 
                            onClick={handleRemove} 
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.price}>${price}</div>
            </div>
        </div>
    )
}

export default CartItem;