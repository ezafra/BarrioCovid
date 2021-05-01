import React from "react";


export default class ProductsCart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card project summary" id={this.props.producto.id}>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{this.props.producto.productName}</span>
                <p>Posted by {this.props.producto.tienda}</p>
                <p> {this.props.producto.price} €</p>
                <p className="grey-text">18 Abril</p>
                <button className="btn pink" onClick={this.props.addItem} >Añadir</button>
                <button className="btn pink" onClick={this.props.removeItem} >Quitar</button>

            </div>
        </div>
        )
    }
}

/* 
const ProductsCart = ({producto},props) => {
    return(
        <div className="card project summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{producto.productName}</span>
                <p>Posted by {producto.tienda}</p>
                <p> {producto.price} €</p>
                <p className="grey-text">18 Abril</p>
                <button className="btn pink" onClick={props.addItem} >Añadir</button>
            </div>
        </div>
    )  ;
}
export default ProductsCart */