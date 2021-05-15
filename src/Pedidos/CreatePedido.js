import React from "react";
import {Component} from "react";

import { connect } from "react-redux"
import { CreatePedido} from "../store/actions/pedidoActions"


export class CreatePedido extends Component  {
    constructor(props){
        super(props);
        this.state={
            idPedido:"",
            idTienda:"",
            idVendedor:"",
            productos:[],
            isDelivered: true
           
            
        }

    }
    

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e) => {
        e.preventDefault();
        const {registered} = this.props;

        
        //console.log(user);
        this.setState({
            ...this.state,
            vendorId: registered[0].id
        
        })
        console.log(this.state)
        this.props.createPedido(this.state);
        
    }
    

    render(){

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Crear tienda</h5>
                    <div className="input-field">
                        <label htmlFor="nombreTienda">Nombre de la tienda </label>
                        <input type="text" id="nombreTienda" onChange={this.handleChange}/>
                    </div>

                 

                    <div className="input-field">
                        <button className="btn pink">Añadir</button>
                    </div>



                </form>
            </div>

        );
    }
}
//aqui añadimos las propiedades que queramos a las props de este componente
//esta funcion llama a la action CreatePedido 
const mapDispatchToProps = (dispatch) => {
    return {
        createPedido: (pedido) => dispatch(createPedido(pedido))
    }
}

const mapStateToProps = (state) => {
    
    console.log(state);
    return{
        
        
        state
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePedido)