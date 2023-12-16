import { Data } from "../Data"

interface ProductProps {
    product: Data,
}

function ProductElement({product}: ProductProps) {
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductElement;