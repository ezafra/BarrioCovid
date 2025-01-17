import React from "react"
import {Link} from "react-router-dom"
import NotSignedLinks from "./NotSignedLinks"
import UserLinks from "./UserLinks"
import VendedorLinks from "./VendedorLinks"


const NavBar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">BarrioCovic</Link>
                <NotSignedLinks/>
            </div>
        </nav>
    )

}
export default NavBar;