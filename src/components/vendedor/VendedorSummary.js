import React from "react";



const VendedorSummary = ({user}) => {
    return(
        <div className="card project summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{user.nombre}</span>
                <p>Posted by {user.apellido}</p>
                
                <p className="grey-text">18 Abril</p>
            </div>
        </div>
    )  ;
}
export default VendedorSummary