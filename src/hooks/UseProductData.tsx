import { useEffect, useState } from "react";
import { Product } from "../interfaces";

type ApiResponseData = {
    category: string;
    description: string;
} & Product;

type ProductsState = {
    products: Array<Product>
}

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