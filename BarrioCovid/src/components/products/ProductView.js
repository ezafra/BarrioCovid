import React from "react"

import { tiendas } from "../../datos/tiendas"
import ProductList from "./ProductList"
import Cart from "./Cart"
import { loadProducts, showProducts } from "../../store/actions/productActions";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { history } from "../../history/history";
import { createPedido } from '../../store/actions/pedidoActions';


class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            redirect: false,
            pedido:{
            comprador:"",
            tienda:"",
            productos:[],
            aDomicilio: true,
            estado:0,
            voluntario:"",
            fecha:"",
            precio:0,
            descripcion:""
            }
        }
    }

    componentDidMount() {
        this.props.loadProducts(this.props.location.state.shop.propietario)
    }
    componentDidUpdate(){
        console.log(this.state)
        if(this.state.redirect){
            console.log("hola")
            console.log(this.state.redirect)
            console.log(this.state.pedido)
            this.props.createPedido(this.state.pedido)
        }
    }

   handlePedido=()=>{
        console.log(this.props.location)
        const prods=this.props.state.carrito.map((i)=>i.id);
        this.setState({
            redirect:true,
            pedido:{
                ...this.state.pedido,
                tienda:this.props.location.state.shop.propietario,
                estado: 1,
                productos: prods

            }
        })
        
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <Link to="/dashboard">Volver</Link>

                <ProductList productos={this.props.state.product.productos} />
                <Cart  handlePedido={this.handlePedido}/>


            </div>
        )
    }

}


const mapStateToProps = (state) => {

    // console.log(state);
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (tienda) => dispatch(loadProducts(tienda)),
        showProducts: (tienda) => dispatch(showProducts(tienda)),
        createPedido: (pedido) => dispatch(createPedido(pedido))

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView)

/* const ProductView = (tienda) => {
    console.log(tienda)
    let products = tienda.location.state.shop.productos;
    console.log(tiendas)
    console.log (products)

    return (





    )
} */
