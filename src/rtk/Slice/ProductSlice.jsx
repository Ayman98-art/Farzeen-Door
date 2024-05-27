import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api_Url } from "../../Api/Api";

// eslint-disable-next-line react-refresh/only-export-components
export const fetchProducts = 
createAsyncThunk("ProductSlice/fetchProducts",
async()=>{
    const res = await fetch(Api_Url)
    const data = await res.json()
    console.log(data);
    return data;
})

const ProductSlice = createSlice({
    initialState : [],
    name : "ProductSlice",
    reducers: {},
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state = action.payload;
            return state;
        })
    }

})

export const productsReducer = ProductSlice.reducer;