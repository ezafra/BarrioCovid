import React from "react"
import { NavLink} from "react-router-dom"



const VendedorLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/">Productos de la tienda</NavLink> </li>
            <li><NavLink to="/">Añadir producto</NavLink> </li>
            <li><NavLink to="/">Log out</NavLink> </li>
        </ul>
    )

}
export default VendedorLinks;