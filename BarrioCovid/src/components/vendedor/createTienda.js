import React from "react";
import {Component} from "react";

import { connect } from "react-redux"
import { createTienda} from "../../store/actions/tiendaActions"


export class CreateTienda extends Component  {
    constructor(props){
        super(props);
        this.state={
            propietario: "",
            direccion:"",
            genero:"",
            nombre:"",
            productos:[],
            
    
        }
    }
    
    
    

    handleChange= (e) => {
        let registiring = JSON.parse(sessionStorage.getItem("registiring"))
        this.setState({
            [e.target.id]: e.target.value,
            propietario: registiring.email,
            direccion: registiring.direccion
        })
    }


    handleSubmit=(e) => {
        e.preventDefault();
        console.log(this.state)
       
        console.log(this.state)
        sessionStorage.removeItem("registiring")
        
        //console.log(user);
       
        console.log(this.state)
        this.props.createTienda(this.state);
        
    }
    

    render(){

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Actualizar tienda</h5>
                    <div className="input-field">
                        <label htmlFor="nombre">Nombre de la tienda </label>
                        <input type="text" id="nombre" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="genero">Genero </label>
                        <input type="text" id="genero" onChange={this.handleChange}/>
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
//esta funcion llama a la action CreateTienda 
const mapDispatchToProps = (dispatch) => {
    return {
        createTienda: (tienda) => dispatch(createTienda(tienda))
    }
}

const mapStateToProps = (state) => {
    
    console.log(state);
    return{
        
        
        state
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(CreateTienda)