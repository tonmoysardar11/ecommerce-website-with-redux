import { createSlice } from "@reduxjs/toolkit";

const viewerSlice=createSlice({
    name:'viewer',
    initialState:[],
    reducers:{
        view:(state,action)=>{
            state=[];
            state.push(action.payload);

        }
    }
})

export const {view}=viewerSlice.actions;
export  {viewerSlice};