import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";

import { Link } from "react-router-dom";
import { showTienda } from "../../store/actions/tiendaActions";
import { connect } from "react-redux";


 class Tienda extends Component{
    componentDidMount= ()=>{
        const seller = JSON.parse(localStorage.getItem("registrado"))
        showTienda(seller)
        console.log(this.props)
    }
    handleButton = () =>{
        const seller = JSON.parse(localStorage.getItem("registrado"))
        this.props.showTienda(seller)
    }
    render(){

        
        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        //const productos = this.props.location.state.productos;
        //console.log(productos);
        const productos = this.props.state.tienda.productos 
        console.log(productos)
        
        console.log(this.props.state.tienda);
        return(
        <div className="Tienda container">
            <div className="row">
                
            <h3>Hola señor, esta es una lista de sus productos en venta</h3>
                <div className="col s12 m6">
                   {/*  { <button onClick={this.handleButton()}>cargar tienda</button> } */}
                    
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
const mapStateToProps = (state) => {
    
    // console.log(state);
    return{
        state
    }

}
const mapDispatchToProps = (dispatch)=>{
    return {
        showTienda: (seller) => dispatch(showTienda(seller))
    }

}

//conecta Tienda al store creado en el reducer de productos que es lo que queremos mostrar
export default connect(mapStateToProps, mapDispatchToProps)(Tienda)
