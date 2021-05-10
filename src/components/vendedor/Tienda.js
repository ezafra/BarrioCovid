import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";

import { Link } from "react-router-dom";

 class Tienda extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        const productos = this.props.location.state.productos;
        console.log(productos); 
        
        
        
        
        return(
        <div className="Tienda container">
            <div className="row">
                
            <h3>Hola señor, esta es una lista de sus productos en venta</h3>
                <div className="col s12 m6">
                    
                    <Link to="/createProduct"  >Crear producto </Link>
                    
                    <ProductList productos={productos} />
                    
                    
                </div>

                <div className="col s12 m5 offset-m1"></div>
        
            </div>
        </div>
        );
    }
}
//para el estado del store a props de este component
/* const mapStateToProps = (state) => {
    
    // console.log(state);
    return{
        productos : state.firestore.ordered.productos,
        users: state.firestore.ordered.users,
        registered: state.firestore.ordered.registered
    }

} */


//conecta Tienda al store creado en el reducer de productos que es lo que queremos mostrar
export default Tienda