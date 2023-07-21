import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk('fetchItems',async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json();
    }
)

export const fetch_electronics = createAsyncThunk('fetch_electronics', async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics')
    return response.json();
}
)

export const fetch_jewelery = createAsyncThunk('fetch_jewelery', async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
    return response.json();
}
)

export const fetch_mens = createAsyncThunk('fetch_mens', async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    return response.json();
}
)
export const fetch_womens = createAsyncThunk('fetch_womens', async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
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
            state.data=null;
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