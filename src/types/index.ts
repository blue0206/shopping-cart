export type ProductType = {
    id: string;
    title: string;
    price: string;
    image: string;
}

export type CartItem = ProductType & {
    quantity: number;
}
