import { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { decrementQuantity } from "../../features/cart/cartSlice";
import { CartItem as CartItemProps } from "../../types";
import { Button } from "../";

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
    
    return (
        <div>
            <div>
                <img src={image} alt={`An image of ${title}`} />
            </div>
            <div>
                <div>{title}</div>
                <div>
                    <div>
                        <Button 
                            onClick={handleDecrement} 
                        >
                            -
                        </Button>
                        <div>{quantity}</div>
                        <Button>
                            +
                        </Button>
                    </div>
                    <div>
                        <Button>
                            Remove From Cart
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div>{price}</div>
            </div>
        </div>
    )
}

export default CartItem;