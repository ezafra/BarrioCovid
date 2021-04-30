import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"
import DashboardUser from "./DashboardUser";
import DashboardVendedor from "./DashboardVendedor";

 class DashBoard extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer
        
            
        const {productos} = this.props;
        const {users} = this.props;
        const {registered}= this.props;
        
       /*  const registradoxd = (registered)=>{
            return registered.find( element => element.isLogged == "true")
        }
        const registrado = registradoxd(); */
        const registrado = {
            id: 123,
            nombre: "edel",
            apellidos: "Zafra",
            isSeller:true,
            email: "asdfasdf",
            contraseña: "asdfasdf"
        }
      /*   if(registered[1]!=null){
            registrado = registered[1]
        }
        else{
            registrado = {}
        }
         */
        

        /* console.log(users);
        console.log(productos);
        console.log(registered) */
        /* .then((registered, registrado)=>{
            registrado=registered[0]

        }) */
        
        if(!registrado.isSeller){
            return(
                
                <DashboardUser user={registrado} productos={productos}/>    
            
        )}
        else{
            return(<DashboardVendedor user = {registrado}/>)
        }

        
        
    
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {
    
    //console.log(state);
    return{
        productos : state.firestore.ordered.productos,
        users: state.firestore.ordered.users,
        registered: state.firestore.ordered.registered
    }

}


//conecta dashboard al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: "productos"},
        {collection: "users"},
        {collection: "registered"}
    ])
)(DashBoard)
