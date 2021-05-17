import React from "react";
import {Component} from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router";
import {singIn} from "../../store/actions/authActions"


export class SingIn extends Component  {
    state={
        email:"",
        password:"",
        name:"",
        direccion:"",
        pedidos:null,
        esVendedor: true,
    }

    redirect = false;

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit= (e) => {
        
        this.setState({
            ...this.state,
        
        })
        console.log(this.state);
        e.preventDefault();
        this.props.singIn(this.state);

        this.redirect = true;

    }
    


    render(){
        console.log(this.props)
        return(
            
            <div className="container">
                {/*this.redirect && <Redirect to ='/dashboard'/>*/}

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Login</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Email</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink">Login</button>
                    </div>



                </form>
            </div>

        );
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        singIn: (creds) => dispatch(singIn(creds))
    }
}
const mapStateToProps= (state)=>{
    return {
        state
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(SingIn)