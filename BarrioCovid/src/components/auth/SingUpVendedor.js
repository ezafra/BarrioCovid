import React from "react";
import {Component} from "react";


export class SingUpVendedor extends Component  {
    state={
        email:"",
        password:"",
        nombre:"",
        apellidos:"",
        isSeller:""
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        console.log(this.state)
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
                        <input type="text" id="nombre" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="isSeller">isSeller</label>
                        <input type="text" id="isSeller" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink">Registrarse</button>
                    </div>



                </form>
            </div>

        );
    }
}
export default SingUpVendedor