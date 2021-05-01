import { Component } from "react";
import React from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import ProductCartList from "../products/ProductCartList";

class DashboardUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openOrder: false,
            total: 0.0,
            sum: 0,
            cart: [],
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.precioTotal = this.precioTotal.bind(this)
    }

    addItem (productName)  {
        //console.log(this.props.productos)
        let  suma =0;
        this.props.productos.map(p => {
            console.log(p)
            if(p.productName === productName){
                var productCart = {
                    productName: p.productName,
                    price: p.price,
                    tienda: p.tienda
                }
                suma=parseFloat(p.price) +parseFloat(this.state.sum);
                this.setState({
                    ...this.state,
                    cart: this.state.cart.concat([productCart]),
                    sum: suma
                })
                console.log(this.state.cart)
            }});
    }

    removeItem(productName){
        console.log(this.state.cart)
        this.state.cart.map(p => {
            let suma = parseFloat(this.state.sum)
            console.log(p)
            if(p.productName === productName){
                let pos = this.state.cart.indexOf(p);
                if (pos===0){
                    this.setState({
                        ...this.state,
                        cart: this.state.cart.pop(),
                        sum: suma-parseFloat(p.price),
                    })
                }
                console.log(p)
                this.setState({
                    ...this.state,
                    cart: this.state.cart.splice(pos,1),
                    sum:suma-parseFloat(p.price)
                })
            }
        });
    }

    precioTotal(){
        let suma=0;
        this.state.cart.map(p=>{
            suma=suma+p.price;
        })
        console.log(suma)
        this.setState({
            ...this.state,
            sum: suma
        })
    }

    render() {


        //asignamos a una constante que creamos el valor de las props, que mapStateToProps ha convertido con los parametros que llegan del stado proporcionado por el Product Reducer

        const { productos } = this.props;
        const { user } = this.props;




        return (
            <div className="DashboardUser container">
                <div className="carrito">
                    <ProductList productos={this.state.cart} />
                    <ProductCartList productos={productos}
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                     />

                    Total {this.state.sum} €
                </div>
                <div className="row">
                    <h3>Esta es la descripcion de la aplicacion</h3>
                    <div className="col s12 m6">
                        <Link to="/createProduct">Esta es una lista de los vendedores disponibles </Link>
                        <Link to="/comprador">Volver</Link>


                    </div>

                    <div className="col s12 m5 offset-m1"></div>

                </div>
            </div>
        );
    }
}
//para el estado del store a props de este component
const mapStateToProps = (state) => {

    console.log(state);
    return {
        productos: state.firestore.ordered.productos,
        users: state.firestore.ordered.users,
        registered: state.firestore.ordered.registered
    }

}


//conecta DashboardUser al store creado en el reducer de productos que es lo que queremos mostrar
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "productos" },
        { collection: "users" },
        { collection: "registered" }
    ])
)(DashboardUser)