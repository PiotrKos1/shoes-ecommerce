import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchShoppingCart } from "../thunks/fetchShoppingCart";
import ShoppingCartItems from "../components/ShoppingCartItems";

function ShoppingCart() {
    const [isLoadingShoppingCart, setIsLoadingShoppingCart] = useState<boolean>(false)
    const [errorShoppingCart, setErrorShoppingCart] = useState<null>(null)
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => {
        return state.shop;
    });
    console.log(data)


    useEffect(()=>{
        setIsLoadingShoppingCart(true)
        dispatch(fetchShoppingCart())
        .unwrap()
        .catch((err)=>setErrorShoppingCart(err))
        .finally(()=>setIsLoadingShoppingCart(false))
    }, [dispatch])

    let content

    if (isLoadingShoppingCart) {
        content = 'Loading.....'
        // console.log('load')
    } else if (errorShoppingCart) {
        content = 'error ....'
    } else (
        content = data.map((item)=>{
            return <ShoppingCartItems key={item.id} item={item} />
        })
    )



    return (
        <div>
            {content}
        </div>
    )
}

export default ShoppingCart;