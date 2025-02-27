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
 * Custom hook to fetch product data from the Fake Store API and manage it in a React component's state.
 * 
 * The hook initializes an empty array of products and updates this array with the fetched data from the API.
 * If the API request fails, the user is redirected to an error page.
 * 
 * The data fetching is performed inside a `useEffect` hook, which ensures that the fetch operation only occurs once,
 * when the component using this hook is first mounted.
 * 
 * The hook returns an object containing a single property, `products`, which is an array of product objects.
 * 
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