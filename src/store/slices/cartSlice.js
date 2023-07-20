import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItem:()=>{
        },
        removeItem:()=>{

        },
        clearCart:()=>{

        }
    }
})

export default cartslice;