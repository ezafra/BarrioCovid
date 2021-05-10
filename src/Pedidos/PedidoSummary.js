import { pedidos } from "../datos/pedidos";
import { Component} from "react"

class PedidoSummary extends Component {
    render(){
        const pedido = this.props.pedido;
        console.log(pedido)
        return(
            <div className="card project summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{pedidos.id}</span>
                    
                    <p> {pedido.descripcion} €</p>
                
                    <p className="grey-text">18 Abril</p>
                    
                </div>
            </div>
        )  ;
    }
}
// function mapStateToProps(state, props) {
//     return {
//         products: state.products
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addToCart: producto => dispatch(addToCart(producto))
//     }
// }
 
export default (PedidoSummary);