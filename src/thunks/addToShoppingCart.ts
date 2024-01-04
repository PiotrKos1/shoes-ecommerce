import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Data } from "../Data";

interface ProductProps {
    product: Data;
  }


export const addToShoppingCart = createAsyncThunk('shop/addToShoppingCart', async ({product}: ProductProps) => {
    const response = await axios.post('http://localhost:3005/shoppingCart', {
        name: product.name,
        price: product.price,
        img: product.img,
        productId: product.id
    })

    return response.data;
})

