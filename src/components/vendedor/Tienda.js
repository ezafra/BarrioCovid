import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";

import { Link } from "react-router-dom";
import { showTienda } from "../../store/actions/tiendaActions";
import { connect } from "react-redux";
import { productos } from "../../datos/productos";
import axios from "axios";
import { loadProducts, showProducts } from "../../store/actions/productActions";



class Tienda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            productoShow: []
        }
    }

    handleButton = () => {
        const seller = JSON.parse(localStorage.getItem("registrado"))
        this.props.showTienda(seller)
        console.log(seller)
    }

    loadProducts =  (productos) => {
        let prods = [];
        
        for (let i = 0; i < productos; i++) {
            let prod =  axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/${productos[i]}`);
            console.log("putaaaaaaaaaaaaaaaaaaaaaas")
            console.log(prod.data)
            this.setState({
                ...this.state,
                productoShow: this.state.productoShow.concat(prod.data)
            })
        }
        return prods;
    }


    componentDidMount() {
        try {
        
        setTimeout(() => {
            const seller = JSON.parse(localStorage.getItem("registrado"))
        this.props.showTienda(seller)

        console.log(seller)
        this.setState({
            ...this.state,
            productos: seller.productos
        })
        console.log("HEHE")
        console.log(seller.producto)
        this.setState({
            ...this.state,
            productoShow: []

        })
        this.props.loadProducts(seller.email)
        }, 2000);
        } catch(e){}
        
        
        
            // this.loadProducts();
        try{
            let prods
            
            console.log("Pelele")
            console.log(prods)
        }catch(e){}
            
        
    }
    
    
    render() {


        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        //const productos = this.props.location.state.productos;
        //console.log(productos);
        //const productos = this.props.state.tienda.productos
        //console.log(productos)

        console.log(this.props.state.tienda.tienda.productos);
        
        //const prods = this.loadProducts(this.props.state.tienda.tienda.productos)
        console.log("PUTA")
        console.log(this.props.state.product.productos)
        console.log(this.state.productoShow)
        //this.loadProducts(this.props.state.tienda.tienda.productos)
        return (
            <div className="Tienda container">
                <div className="row">

                    <h3>Hola señor, esta es una lista de sus productos en venta</h3>
                    <Link to="/dashboard">Volver</Link>

                    <div className="col s12 m6">
                        {/*  { <button onClick={this.handleButton()}>cargar tienda</button> } */}

                        <Link to="/createProduct"  >Crear producto </Link>

                        {/*<ProductList productos={this.props.state.tienda.productos} />*/}
                        <ProductList productos={this.props.state.product.productos} />


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
    return {
        state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        showTienda: (seller) => dispatch(showTienda(seller)),
        loadProducts: (tienda) =>dispatch(loadProducts(tienda)),
        showProducts: (tienda) => dispatch(showProducts(tienda))
    }

}

//conecta Tienda al store creado en el reducer de productos que es lo que queremos mostrar
export default connect(mapStateToProps, mapDispatchToProps)(Tienda)