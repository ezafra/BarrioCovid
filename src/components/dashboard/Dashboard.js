import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"
import DashboardUser from "./DashboardUser";
import DashboardVendedor from "./DashboardVendedor";

 class DashBoard extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer
        
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        }
       
        console.log("dormido")    
        const {productos,registrados} = this.props;
        const {users} = this.props;
        console.log(registrados)
        
        
        
       /*  const registradoxd = (registered)=>{
            return registered.find( element => element.isLogged == "true")
        }
        const registrado = registradoxd(); */
        let registrado = {
            id: "cTJA2hE47W0Kw9JiTQFD",
            nombre: "edel",
            apellidos: "Zafra",
            isSeller:true,
            email: "asdfasdf",
            contraseña: "asdfasdf",
            isLogged: true

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
        /* console.log(this.props.registered);
        const registrar = () =>{
            return new Promise ((resolve, reject)=>{
                const {registered}= this.props;
                let registradosss=registered[0]
                resolve(registradosss);
            });
        }

        const caso =registrar().then((you)=> {
            return (you);
            console.log(you);
        }); */
        /* try{
            registrado = registrados.find(registrado => registrado.isLogged ===true)
            console.log(registrado);

        }catch(e){
            registrado = {
                id: "cTJA2hE47W0Kw9JiTQFD",
                nombre: "edel",
                apellidos: "Zafra",
                isSeller:true,
                email: "asdfasdf",
                contraseña: "asdfasdf",
                isLogged: true
            }
        } */
        
        
        
        
        if( registrado.isLogged && registrado.isSeller){
            return(<DashboardUser  productos={productos} user = {registrado} users ={users}/>)
            
            
        }
        else{
            return(<DashboardVendedor productos={productos} user = {registrado}/>)
            
        }

        
        
    
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {
    
    //console.log(state);
    return{
        productos : state.firestore.ordered.productos,
        users: state.firestore.ordered.users,
        registered: state.firestore.ordered.registered,
        registrados: state.firestore.ordered.registrados,
        
    }

}


//conecta dashboard al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: "productos"},
        {collection: "users"},
        {collection: "registered"},
        {collection: "registrados"}
    ])
)(DashBoard)
