import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk('fetchItems',async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json();
    }
)

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        isLoading: true,
        data: null,
        isError:false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchItems.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchItems.rejected,(state,action)=>{
            state.isError=true;
            console.log('Error',action.payload)
        })
    }
})

export default itemSlice.reducer;