import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"
import VendedorSummary from "../vendedor/VendedorSummary";

 class DashboardUser extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        }
        
        
        const {productos} = this.props;
        const {user } = this.props;
        const {users} = this.props;
        console.log(this.props);
        console.log(users);
        
        let vendedores = [
            {apellidos: "jajajajaja", nombre: "Paquito" , email: "ñlaskjdf@al.skdf.com", isSeller:true},
            {apellidos: "jajajajaja2", nombre: "Paquito2" , email: "sdfdsñlaskjdf@al.skdf.com", isSeller:true}
        ]
        try{
            vendedores = users.filter(usuarios => usuarios.isSeller === "true");
            console.log(vendedores)
        }catch(e){
            console.log(e)
            vendedores = [
                {apellidos: "jajajajaja", nombre: "Paquito" , email: "ñlaskjdf@al.skdf.com", isSeller:true},
                {apellidos: "jajajajaja2", nombre: "Paquito2" , email: "sdfdsñlaskjdf@al.skdf.com", isSeller:true}
            ]
        }
        

        

        return(
        
        <div className="DashboardUser container">
            <div className="row">
            <h3>Señor {user.nombre}, esta es una lista de los establecimientos disponibles: </h3>
                <div className="col s12 m6">
                
                {vendedores.length > 1  && vendedores.map(user =>{
                return (
                    <VendedorSummary user={user}/>
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
        productos : state.firestore.ordered.productos,
        
        registered: state.firestore.ordered.registered
    }

}


//conecta DashboardUser al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: "productos"},
        
        {collection: "registered"}
    ])
)(DashboardUser)