import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchShop } from "../thunks/fetchShop";
import Products from "../components/Products";



function Shop() {
    
    const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)
    const [errorLoadingProducts, setErrorLoadingProducts] = useState<null>(null)
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => {
    return state.shop;
  });

  console.log(data)

  useEffect(() => {
    setIsLoadingProducts(true)
    dispatch(fetchShop())
    .unwrap()
    .catch((err)=>setErrorLoadingProducts(err))
    .finally(()=>setIsLoadingProducts(false));
  }, [dispatch]);

  let content;
  if (isLoadingProducts) {
    content = 'Loading ...'
  } else if (errorLoadingProducts) {
    content = "error"
  } else {
    // content = data.map(product=>{return <Products key={product.id} product={product.name} />})
    content = <Products data={data} />
  }

  return (<div className='bg-lime-500'>
    {content}
    </div>
    )
}

export default Shop;
