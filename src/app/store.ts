import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

/**
 * Configure redux store.
 * @returns Store.
 */
export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

/**
 * Typescript definitions.
 * @type AppStore - Redux store.
 * @type RootState - Root state.
 * @type AppDispatch - Dispatch function.
 */
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore["dispatch"];