import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

const initialState: Array<CartItem> = [];

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
        }
    }
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;