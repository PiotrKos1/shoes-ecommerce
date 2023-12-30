import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchShoppingCart } from "../thunks/fetchShoppingCart";

function ShoppingCart() {
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useAppSelector(state => {
      return state.shop;
    });
    console.log(data)
    useEffect(()=>{
        dispatch(fetchShoppingCart())
    }, [dispatch])

    return (
        <div>
            ShoppingCart
        </div>
    )
}

export default ShoppingCart;