import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';

class Cart extends Component {
  render() {
    
    console.log(this.props.cart)
    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    let cartList = [];
    try{
      cartList = this.props.cart.map(( producto, index) =>{
        return <div key={index}> 
          <p style={{ color: "green"}}>
          {producto.nombre}
          </p>
          <p>Precio: {producto.precio} €</p>
          <button className="button" 
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
      totalList=cartList.reduce((sum, product) => sum + product.precio, 0)
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
          <p style={{ color: "black"}}>(€))
          <span style={{ color: "blue" ,fontSize:20}}>
          {totalList}
          </span>
          </p>
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
        removeFromCart: producto => dispatch(removeFromCart(producto))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);