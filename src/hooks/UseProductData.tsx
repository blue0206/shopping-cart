import { useEffect, useState } from "react";
import { Product } from "../interfaces";

type ApiResponseData = {
    category: string;
    description: string;
} & Product;

type ProductsState = {
    products: Array<Product>
}

/**
 * A hook that fetches product data from the Fake Store API and returns a state object containing the products.
 * The products are stored in the component's state and updated whenever the component is reloaded.
 * The hook uses the useEffect hook to fetch the data when the component is mounted.
 * The useEffect hook ensures that the fetch operation only runs once, when the component is first mounted.
 * The hook returns an object with a single property, `products`, which is an array of product objects.
 * @returns {ProductsState} An object with a single property, `products`, which is an array of product objects.
 */
function useProductData(): ProductsState {
    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=35")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => setProducts(data.map((product: ApiResponseData) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }))))
        .catch(error => console.log(error));
    }, [])
    
    return {
        products
    }
}

export default useProductData;