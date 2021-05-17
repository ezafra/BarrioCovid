import React from 'react';
import { connect } from 'react-redux';
import {singOut} from "../../store/actions/authActions"

export class LogOut extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button className="btn pink" onClick={this.singOut}>Log Out</button>
        )
    }
}



export default (LogOut)