import React from "react"
import ProductsCart from "./ProductsCart";


export default class ProductCartList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="product-list section">
            {this.props.productos && this.props.productos.map(producto =>{
                return (
                    <ProductsCart producto={producto} 
                                  addItem={()=>this.props.addItem(producto.productName)}
                                  removeItem={()=>this.props.removeItem(producto.productName)}
                    />
                )
                
            })}
        </div>
        )
    }
}

/* 
const ProductCartList = ({productos}) => {
    
    return (
        <div className="product-list section">
            {productos && productos.map(producto =>{
                return (
                    <ProductsCart producto={producto} 

                    />
                )
                
            })}
        </div>
    );
}
export default ProductCartList */