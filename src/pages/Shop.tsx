import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchShop } from "../thunks/fetchShop";

function Shop() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(state => {
    return state.shop;
  });

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  return <div className='bg-lime-500'>Shop</div>;
}

export default Shop;
