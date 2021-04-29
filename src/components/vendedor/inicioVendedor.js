import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux";
import {Link } from "react-router-dom";


class inicioVendedor extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        const {productos} = this.props;
        

        return(
                <div className="col-md-6 col-md-offset-3">
                <h1>Hola!</h1>
                <p>Usted está registrado como vendedor</p>
                
                
                
                <p>
                    <Link to="/pedidosVendedor">Ver los pedidos </Link>
                </p>
                <p>
                    <Link to="/historialVendedor">Historial de Pedidos</Link>
                </p>
                <p>
                    <Link to="/productosVendedor">Ver Productos de su tienda</Link>
                </p>
        </div>
        );
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {
    console.log(state)
    return{
        productos : state 
    }

}


//conecta inicioVendedor al store creado en el reducer de productos que es lo que queremos mostrar
export default connect (mapStateToProps)(inicioVendedor)