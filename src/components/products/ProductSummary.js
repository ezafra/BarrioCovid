import React from "react";



const ProductSummary = ({producto}) => {
    return(
        <div className="card project summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{producto.productName}</span>
                <p>Posted by {producto.tienda}</p>
                <p> {producto.price} €</p>
                <p className="grey-text">18 Abril</p>
            </div>
        </div>
    )  ;
}
export default ProductSummary