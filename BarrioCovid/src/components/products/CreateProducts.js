import React from "react";
import {Component} from "react";

import { connect } from "react-redux"
import { createProduct} from "../../store/actions/productActions"


export class CreateProduct extends Component  {
    constructor(props){
        super(props);
        this.state={
            nombre: "",
            id:null,
            tienda:"",
            precio:0,
            cantidad:"",
            
            
        }

    }
    
    
    
    
    
    handleChange= (e) => {
        const jeje = JSON.parse(localStorage.getItem("registrado"))
        this.setState({
            tienda: jeje.email,
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e) => {
        e.preventDefault();
        
        
        
        this.props.createProduct(this.state);
        
    }
    

    render(){
       
        

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Añadir producto a su tienda</h5>
                    <div className="input-field">
                        <label htmlFor="nombre">Nombre del Producto</label>
                        <input type="text" id="nombre" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="precio">Precio (€)</label>
                        <input type="text" id="precio" onChange={this.handleChange}/>
                    </div>

                   {/*  <div className="input-field">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" id="description" onChange={this.handleChange}/>
                    </div> */}

                    {/* <div className="input-field"> 
                        <label htmlFor="tienda">Tienda</label>
                        <input type="text" id="tienda" onChange={this.handleChange}/>
                    </div> */}

                    {/* <div className="input-field"> 
                        <label htmlFor="id">Id</label>
                        <input type="id" id="id" onChange={this.handleChange}/>
                    </div>  */}
                                    

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

const mapStateToProps = (state) => {
    
    console.log(state);
    return{
        state
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)