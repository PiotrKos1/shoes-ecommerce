import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Data } from "../Data";

interface ProductProps {
    product: Data;
    selectedSize: string
  }


export const addToShoppingCart = createAsyncThunk('shop/addToShoppingCart', async ({product, selectedSize}: ProductProps) => {
    const response = await axios.post('http://localhost:3005/shoppingCart', {
        name: product.name,
        price: product.price,
        img: product.img,
        productId: product.id,
        selectedSize: selectedSize
    })

    return response.data;
})

