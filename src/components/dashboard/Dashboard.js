import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"

import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"
import DashboardUser from "./DashboardUser";
import DashboardVendedor from "./DashboardVendedor";
import {productos} from "../../datos/productos"

 class DashBoard extends Component{
     
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer
        
        
        console.log(this.props)
        let products = productos;
        
        let logged = JSON.parse(localStorage.getItem("registrado"))
        console.log(logged)
  
        if( !logged.esVendedor){
            return(<DashboardUser  productos={products} user = {logged}/>)
        
        }
        else{
            return(<DashboardVendedor productos={products} />)
            
        }

        
        
    
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {
    
    console.log(state);
    return{
        state
    }
}


//conecta dashboard al store creado en el reducer de productos que es lo que queremos mostrar
export default connect (mapStateToProps)(DashBoard)
