import React from "react"
import PedidoSummary from "./PedidoSummary"


const PedidosList = ({pedidos}) => {
  

    
    console.log(pedidos)
    return (
        
        <div className="product-list section">
            
            
                
                   {pedidos && pedidos.map(pedido => {
                       return (
                        <PedidoSummary pedido={pedido} />
                       )
                   })
                    
                   
                   
                   } 
                
                
            )
            
        </div>
    );
}

export default PedidosList