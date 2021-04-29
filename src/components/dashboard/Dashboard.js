import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"

class DashBoard extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        const {productos} = this.props;
        

        return(
        <div className="dashboard container">
            <div className="row">
            <h3>Esta es la descripcion de la aplicacion</h3>
                <div className="col s12 m6">
                    <Link to="/createProduct">Crear producto </Link>
                    
                    <ProductList productos={productos}/>
                    
                </div>

                <div className="col s12 m5 offset-m1"></div>
        
            </div>
        </div>
        );
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {
    
    console.log(state.firestore.ordered);
    return{
        productos : state.firestore.ordered.productos
    }

}


//conecta dashboard al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: "productos"}
    ])
)(DashBoard)
