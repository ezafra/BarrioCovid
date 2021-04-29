import React from "react"
import {Link, NavLink} from "react-router-dom"


const UserLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/">Historial de pedidos</NavLink> </li>
            <li><NavLink to="/">Buscar tiendas</NavLink> </li>
            <li><NavLink to="/">Log out</NavLink> </li>
        </ul>
    )

}
export default UserLinks;