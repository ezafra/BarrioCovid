import React from "react";
import {Link } from "react-router-dom"

const VendedorSummary = ({tienda}) => {
    return(
        <div className="card project summary"  >
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{tienda.nombre}</span>
                <p>Posted by {tienda.propietario.name}</p>
                <Link to={{
                    pathname: '/productos',
                    state: {
                        shop: tienda,
                        
                    }  
                
                
                
                }}>Ver productos de la tienda</Link>
                
                <p className="grey-text">18 Abril</p>
            </div>
        </div>
    )  ;
}
export default VendedorSummary