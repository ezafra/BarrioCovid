import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';


class ProductSummary extends Component {
    render(){
        const producto = this.props.producto;
        console.log(producto)
        return(
            <div className="card project summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{producto.nombre}</span>
                    
                    <p> {producto.precio} €</p>
                
                    <p className="grey-text">18 Abril</p>
                    <button className="button"
                    onClick={() => this.props.addToCart(producto)}>
                    <i className="fas fa-shopping-cart"></i>
                    Agregar al Carro 
            </button> 
                </div>
            </div>
        )  ;
    }
}
function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: producto => dispatch(addToCart(producto))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);