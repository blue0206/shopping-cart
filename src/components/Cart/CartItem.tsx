import { ReactElement } from "react";
import { CartItem as CartItemProps } from "../../types";
import { Button } from "../";

function CartItem({
    id,
    title,
    price,
    image,
    quantity
}: CartItemProps): ReactElement {
    
    return (
        <div>
            <div>
                <img src={image} alt={`An image of ${title}`} />
            </div>
            <div>
                <div>{title}</div>
                <div>
                    <div>
                        <Button>
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