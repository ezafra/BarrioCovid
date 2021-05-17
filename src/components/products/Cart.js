import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { removeFromCart } from '../../store/actions/cartActions';
import { createPedido } from '../../store/actions/pedidoActions';

class Cart extends Component {

  /* handlePedido=()=>{
    const prods = this.props.cart.map((i)=>i.id);
    this.props.createPedido(prods)
  } */

  render() {
    
    console.log(this.props.cart)
    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    let cartList = [];
    try{
      cartList = this.props.cart.map(( producto, index) =>{
        return <div key={index}> 
           <span className="card-title">{producto.nombre}</span>
          <p>Precio: {producto.precio} €</p>
          <button className="btn pink" 
                  style={{ backgroundColor: "#b73535"}}
                  onClick={ () => this.props.removeFromCart(producto)} > 
                  <i className="fas fa-trash-alt"></i>
                  Eliminar  
          </button>
        </div>;
      });

    }catch(e){
      cartList= ()=>{
        return (<h2> carrito vacio</h2>)
      }
    }
    console.log(cartList);
    

    let totalList=0
    try{
      totalList=this.props.cart.reduce((sum, product) => sum  +  parseFloat(product.precio) , 0)
    }catch(e){
      totalList=0;

    }
    console.log(totalList)
   

    return (
      <div>
        <p style={{backgroundColor:'#4f92b13b'}}>
        <h1>CARRO DE COMPRAS 
          <i className="fas fa-cart-arrow-down"></i>
        </h1>
        </p>
        <div  className="cart">
          {cartList}
          {console.log(cartList)}
        </div>
        <h2 style={{color:'#476a7b'}}>Total</h2>
        <div>
        <span style={{ color: "blue" ,fontSize:20}}>
          {totalList} (€)
          </span>
          <p></p>
         
          <button className="btn pink" onClick={this.props.handlePedido}>Cerrar Pedido</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state)
    return {
      
        cart: state.carrito
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: producto => dispatch(removeFromCart(producto)),
        createPedido: pedido => dispatch(createPedido(pedido))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);