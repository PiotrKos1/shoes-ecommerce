import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const addToShoppingCart = createAsyncThunk('shop/addToShoppingCart', async (name: string) => {
    const response = await axios.post('http://localhost:3005/shoppingCart', {
        name: name
    })
    console.log('ok')
    return response.data;
})

