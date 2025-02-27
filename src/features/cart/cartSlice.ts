import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

const initialState: Array<CartItem> = [];

/**
 * @description Slice for managing the shopping cart.
 * @returns The reducer and actions.
 */
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.push(action.payload);
            return state;
        },
        removeFromCart: (state, action: PayloadAction<CartItem["id"]>) => {
            return state.filter(item => item.id !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<CartItem["id"]>) => {
            return state.map(item => (item.id === action.payload ? {...item, quantity: item.quantity + 1} : item));
        },
        decrementQuantity: (state, action: PayloadAction<CartItem["id"]>) => {
            return state.map(item => (item.id === action.payload ? {...item, quantity: item.quantity - 1} : item));
        },
        updateQuantity: (state, action: PayloadAction<{ id: CartItem["id"], quantity: CartItem["quantity"]}>) => {
            return state.map(item => (item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item));
        },
        emptyCart: () => {
            return [];
        }
    }
});

/**
 * Exporting the reducer and actions.
 * @module cartSlice
 * @exports cartReducer
 * @exports addToCart
 * @exports removeFromCart
 * @exports incrementQuantity
 * @exports decrementQuantity
 * @exports updateQuantity
 * @exports emptyCart
 */
export default cartSlice.reducer;
export const { 
    addToCart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    updateQuantity, 
    emptyCart 
} = cartSlice.actions;