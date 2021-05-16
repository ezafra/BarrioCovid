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
            {/*<li><a onClick={props.singOut()}>LogOut</a></li>*/}
            
            <li><NavLink to="/registro">Register</NavLink> </li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        singOut: ()=> dispatch(singOut())
    }
}
const mapStateToProps = (state)=> {
    
    return {
        state
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(NotSignedLinks);

