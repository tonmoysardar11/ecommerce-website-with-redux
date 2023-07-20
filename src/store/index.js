import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartSlice";

const store=configureStore({
    reducer:{
        cart: cartslice.reducer
    }
})
export default store;