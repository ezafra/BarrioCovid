import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {singUp} from "../../store/actions/authActions"
import { Checkbox } from '@material-ui/core'


export class SingUp extends Component  {
    state={
        email:"",
        password:"",
        name:"",
        direccion:"",
        pedidos:null,
        esVendedor: true,
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        
        console.log(this.state);
        this.props.singUp(this.state);
    }
   


    render(){
        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Registrarse</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>

                    {/* <div className="input-field">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" onChange={this.handleChange}/>
                    </div> */}

                    <div className="input-field">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" id="direccion" onChange={this.handleChange}/>
                    </div>
{/* 
                    <div className="input-field">
                        <label htmlFor="isSeller">isSeller</label>
                        <input type="text" id="isSellerr" checked={this.state.isGoing} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                       <Checkbox id ="isSeller" text="tocaSiEresVendedor" />
                    </div> */}
                    
                    

                    <div className="input-field">
                        <button className="btn pink">Registrarse</button>
                    </div>




                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
   
    return{
        singUp: (newUser) => dispatch(singUp(newUser))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps) (SingUp)