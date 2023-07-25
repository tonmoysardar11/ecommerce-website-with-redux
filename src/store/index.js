import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartSlice";
import itemSlice from "./slices/itemSlice";





const store=configureStore({
    reducer:{
        cart: cartslice,
        item: itemSlice,
        
    }
})
export default store;