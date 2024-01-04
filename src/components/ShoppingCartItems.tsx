import { Data } from "../Data";

interface ItemsProps {
    item: Data
}

function ShoppingCartItems({item}: ItemsProps) {

    

    return (
        <div>
            <div>{item.name}</div>
    
        </div>
    )
}

export default ShoppingCartItems;