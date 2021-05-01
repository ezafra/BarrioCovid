import React from "react";
import { Component } from "react";

import { connect } from "react-redux"
import { createProduct } from "../../store/actions/productActions"
import {ToggleButton} from 'react-toggle-button';

import { Redirect, withRouter } from 'react-router-dom';


export class CreateProduct extends Component {

    constructor(props){
        super(props);

        this.state = {
            producto: {
                productName: "",
                price: "",
                description: "",
                tienda: "",
                id: "",
                vendorId: ""
            },
             page : {
                redirect: false
            } 
    
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } */
    handleChange = (e) => {
        this.setState({
            producto:{
                ...this.state.producto,
                [e.target.id] : e.target.value
            }               
        });
    } 



    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        //console.log(user);
        this.setState({
            ...this.state
        })
        this.props.createProduct(this.state.producto);
    }


    render() {
        /* const {user} = this.props;
        console.log(user); */
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Añadir producto a su tienda</h5>
                    <div className="input-field">
                        <label htmlFor="productName">Nombre del Producto</label>
                        <input type="text" id="productName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="price">Precio (€)</label>
                        <input type="text" id="price" onChange={this.handleChange} />
                    </div>
                    <p>{console.log(this.state)}</p>

                    <div className="input-field">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" id="description" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="tienda">Tienda</label>
                        <input type="text" id="tienda" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" id="id" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink">Añadir</button>
                    </div>



                </form>
            </div>

        );
    }
}
//aqui añadimos las propiedades que queramos a las props de este componente
//esta funcion llama a la action createProduct 
const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (producto) => dispatch(createProduct(producto))
    }


}


export default connect(null, mapDispatchToProps)(CreateProduct)