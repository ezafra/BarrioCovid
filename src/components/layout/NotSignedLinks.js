import React from "react"
import {Link, NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {singOut} from "../../store/actions/authActions"
import {firestoreConnect} from "react-redux-firebase"
import { compose} from "redux"


const NotSignedLinks = (props) => {
    console.log(props)

    
    return(
        <ul className="right">
            <li><NavLink to="/login">Login</NavLink> </li>
            <li><a onClick={props.singOut()}>LogOut</a></li>
            <li><NavLink to="/registro">Register</NavLink> </li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        singOut: ((credenciales)=> dispatch(singOut()))
    }
}
const mapStateToProps = (state)=> {
    
    return {
        credenciales: state.firestore.ordered.registered
    }
}

export default  compose(
    connect (mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: "registered"},
        
    ])
)(NotSignedLinks);
