import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Slice/ProductSlice";
import { cartSliceReducer } from "./Slice/CartSlice";

export const store = configureStore({
    reducer:{
        product: productsReducer,
        cart: cartSliceReducer
    }
})