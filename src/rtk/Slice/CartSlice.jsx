import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],

    reducers: {
        addItem: (state, action) => {
            const findProduct = state.find((item)=> item.id === action.payload.id)
            if (findProduct) {
                findProduct.qty += 1
            } else {
                const newProduct = {...action.payload, qty : 1}
                state.push(newProduct);
            }
            
        },

        deleteItem: (state, action) => {
            return state.filter( (item) => item.id !== action.payload.id )
        },

        clearItem: () => {
            return [];
        },

    }
})

export const {addItem, deleteItem, clearItem, increaseItem, decreaseItem } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer 