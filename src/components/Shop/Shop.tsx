import { ReactElement } from 'react';
import styles from '../../styles/shop.module.css';
import useProductData from '../../hooks/UseProductData';
import { Header } from '../';
import Product from './Product';
import { ProductType } from '../../interfaces';

function Shop(): ReactElement {
    const { products } = useProductData();

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.shopContainer}>
                {
                    products.length === 0 ? (
                        <div className={styles.loaderContainer}>
                            <div className={styles.loader}></div>
                            <h1 className={styles.loaderText}>Loading...</h1>
                        </div>
                    ) : (
                        products.map((product: ProductType) => {
                            return (
                                <Product 
                                    key={product.id} 
                                    title={product.title} 
                                    price={product.price} 
                                    image={product.image} 
                                />
                            )
                        })
                    )
                }
            </div>
        </div>
    );
}

export default Shop;