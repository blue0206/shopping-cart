/**
 * @description Type for a product.
 * @property {string} id - The unique id of the product.
 * @property {string} title - The title of the product.
 * @property {number} price - The price of the product.
 * @property {string} image - The URL of the product's image.
 */
export type ProductType = {
    id: string;
    title: string;
    price: string;
    image: string;
}

/**
 * @description Type for a product in the cart.
 * @extends ProductType
 * @property {number} quantity - The quantity of the product in the cart.
 */
export type CartItem = ProductType & {
    quantity: number;
}
