import React from "react"
import ProductSummary from "./ProductSummary"


const ProductList = ({productos}) => {
    
    return (
        <div className="product-list section">
            {productos && productos.map(producto =>{
                return (
                    <ProductSummary producto={producto} />
                )
                
            })}
        </div>
    );
}
export default ProductList