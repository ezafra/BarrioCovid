import React from "react"

import {tiendas } from "../../datos/tiendas"
import ProductList from "./ProductList"
import Cart from "./Cart"


const ProductView = (tienda) => {
    console.log(tienda)
    let products = tienda.location.state.shop.productos;
    console.log(tiendas)
    console.log (products)
    return (
        
        
        
        <div>
            <ProductList productos ={products}/>
            <Cart/>


        </div>
        
    )
}

export default ProductView