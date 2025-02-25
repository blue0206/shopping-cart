import { ReactElement } from 'react';
import styles from '../../styles/product.module.css';
import { Button, Input } from '../';

type ProductProps = {
    title: string;
    price: string;
    image: string;
}

function Product({
    title,
    price,
    image
}: ProductProps): ReactElement {
    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={`An image of ${title}`} />
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.price}>{price}</div>
                <div className={styles.quantity}>
                    <Button className={styles.qtySpin}>-</Button>
                    <Input className={styles.qtyInput} type='number' />
                    <Button className={styles.qtySpin}>+</Button>
                </div>
                <Button className={styles.add}>Add to Cart</Button>
            </div>
        </div>
    );
}

export default Product;