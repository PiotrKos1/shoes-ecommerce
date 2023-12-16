import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchShop = createAsyncThunk('shop/fetchShop', async () => {
    const response = await axios.get('http://localhost:3005/shop')

    return response.data;
})