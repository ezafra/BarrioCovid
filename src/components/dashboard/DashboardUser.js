import { Component } from "react";
import React from "react";

import { connect } from "react-redux"

import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"
import VendedorSummary from "../vendedor/VendedorSummary";
import { tiendas} from "../../datos/tiendas"


 class DashboardUser extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer
        const {user } = this.props;
        
        console.log(tiendas);
        console.log(user);


        return(
        
        <div className="DashboardUser container">
            <div className="row">
            <h3>Señor {user.nombre}, esta es una lista de los establecimientos disponibles: </h3>
                <div className="col s12 m6">
                    
                
                {tiendas.length > 0  && tiendas.map(tienda =>{
                return (
                    <VendedorSummary tienda={tienda}/>
                )
                
                })}

                
                                      
                    
                    
                </div>

                <div className="col s12 m5 offset-m1"></div>
        
            </div>
        </div>
        );
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {

    return{
        registered: state.firestore.ordered.registered
    }

}


//conecta DashboardUser al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        

        {collection: "registered"}
    ])
)(DashboardUser)