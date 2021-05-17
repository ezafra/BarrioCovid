import { Component } from "react";
import React from "react";


import { Link } from "react-router-dom";
import { singOut } from "../../store/actions/authActions";

 class DashboardVendedor extends Component{
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        const {productos} = this.props;
        console.log(productos);
        const vendedor = JSON.parse(localStorage.getItem("registrado"))
        
        
        
        
        return(
            <div className="col-md-6 col-md-offset-3">
            <h1>Hola {vendedor.name}!</h1>
            <p>Usted está registrado como vendedor</p>
            
            
            
            
            <p>
                <Link to="/pedidosVendedor">Ver los pedidos </Link>
            </p>
            <p>
                <Link to="/historialVendedor">Historial de Pedidos</Link>
            </p>
            <p>
               
                <Link to={{
                    pathname: '/tienda',
                    state: {
                        productos:productos,
                        
                    }  
                
                
                
                }}>Ver productos de la tienda</Link>
            </p>
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


//conecta DashboardVendedor al store creado en el reducer de productos que es lo que queremos mostrar
export default DashboardVendedor