import { ReactElement } from 'react';
import { Button, Input } from '../';

type ProductProps = {
    title: string;
    price: number;
    image: string;
}

function Product({
    title,
    price,
    image
}: ProductProps): ReactElement {
    return (
        <div>
            <div>
                <img src={image} alt={`An image of ${title}`} />
            </div>
            <div>
                <h2>{title}</h2>
                <div>{price}</div>
                <div>
                    <Button>-</Button>
                    <Input type='number' />
                    <Button>+</Button>
                </div>
                <div>Add to Cart</div>
            </div>
        </div>
    );
}

export default Product;