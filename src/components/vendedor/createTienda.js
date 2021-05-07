import React from "react";
import {Component} from "react";

import { connect } from "react-redux"
import { createTienda} from "../../store/actions/productActions"


export class CreateTienda extends Component  {
    constructor(props){
        super(props);
        this.state={
            nombreTienda: "",
            vendedor:"",
            idVendedor:"",
            productos:[],
            idTienda:""
           
            
        }

    }
    

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e) => {
        e.preventDefault();
        const {registered} = this.props;

        
        //console.log(user);
        this.setState({
            ...this.state,
            vendorId: registered[0].id
        
        })
        console.log(this.state)
        this.props.CreateTienda(this.state);
        
    }
    

    render(){

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Crear tienda</h5>
                    <div className="input-field">
                        <label htmlFor="nombreTienda">Nombre de la tienda </label>
                        <input type="text" id="nombreTienda" onChange={this.handleChange}/>
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
        
        
        registered: state.firestore.ordered.registered
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CreateTienda)