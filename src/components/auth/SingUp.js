import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { singUp } from "../../store/actions/authActions"
import ToggleButton from 'react-toggle-button'

export class SingUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: "",
                nombre: "",
                apellidos: "",
                isSeller: true
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                [e.target.id]: e.target.value    
            }})
    }
    handleSeller = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                isSeller: !this.state.user.isSeller,

            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.singUp(this.state.user);
    }


    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Registrarse</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <p>{console.log(this.state)}</p>
                    <div className="input-field">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="isSeller">isSeller</label>
                        <ToggleButton className="form-control" name="isSeller" id="isSeller" value={this.state.user.isSeller || false} onToggle={this.handleSeller} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink">Registrarse</button>
                    </div>



                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        singUp: (newUser) => dispatch(singUp(newUser))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp)