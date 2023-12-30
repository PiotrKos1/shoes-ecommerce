import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchShoppingCart = createAsyncThunk('shop/fetchShoppingCart', async () => {
    const response = await axios.get('http://localhost:3005/shoppingCart')

    return response.data;
})