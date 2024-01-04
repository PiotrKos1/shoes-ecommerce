import { Data } from "../Data";
import { addToShoppingCart } from "../thunks/addToShoppingCart";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface ProductProps {
  product: Data;
}



function ProductElement({ product }: ProductProps) {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(state => {
    return state.shop;
  });

 

  const handleClick = () => {
    dispatch(addToShoppingCart({product}))
  };

  return (
    <div className='w-48 m-3 bg-third-color border-solid border-2'>
      <img src={product.img} className='h-40 w-full' />
      <div className='flex justify-around h-12 bg-main-color '>
        <p className='w-24 text-third-color cursor-pointer'>{product.name}</p>
        <p className='text-text-color'>{product.price} ZŁ</p>
      </div>
      <div className='flex justify-around'>
        <p>Choose size:</p>
        <select>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
        </select>
      </div>
      <button
        onClick={handleClick}
        className='h-8 bg-text-color text-third-color w-full uppercase font-bold'>
        add
      </button>
    </div>
  );
}

export default ProductElement;
