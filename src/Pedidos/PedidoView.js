import React, { Component } from 'react';


import {pedidos} from "../datos/pedidos"
import PedidosList from './PedidosList';

class PedidoView extends Component {
    
  render() {
    
    
    

    return (
        <PedidosList pedidos={pedidos}/>
      
    );
  }
}

/* function mapStateToProps(state, props) {
  console.log(state)
    return {
      
        cart: state.carrito
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromPedidoView: producto => dispatch(removeFromPedidoView(producto))
    }
} */

export default (PedidoView);