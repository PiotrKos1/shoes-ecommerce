import ProductElement from "./Product"
import { Data } from "../Data"

interface Props {
    data: Data[],
}


const Products = ({data}: Props) => {
    const renderedProducts = data.map((product) => { return <ProductElement key={product.id} product={product} /> })
    return (
        <div>
            {renderedProducts}
    
        </div>
    )
}

export default Products;