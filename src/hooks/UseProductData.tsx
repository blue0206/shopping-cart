import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { useNavigate } from "react-router-dom";

type ApiResponseData = {
    category: string;
    description: string;
} & ProductType;

type ProductsState = {
    products: Array<ProductType>;
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
    const [products, setProducts] = useState<Array<ProductType>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=35")
        .then(response => {
            if (!response.ok) {
                navigate("/error");
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
        .catch(error => {
            navigate("/error");
            console.error(error);
        });
    }, [navigate])
    
    return {
        products
    }
}

export default useProductData;