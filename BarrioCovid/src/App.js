import logo from './logo.svg';
import  React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import DashBoard from "./components/dashboard/Dashboard"
import { Component } from 'react';
import SingIn from './components/auth/SingIn';
import SingUp from './components/auth/SingUp';
import CreateProduct from './components/products/CreateProducts';
import inicioVendedor from "./components/vendedor/inicioVendedor";
import ProductView from "./components/products/ProductView";
import DashboardVendedor from './components/dashboard/DashboardVendedor';
import Tienda from './components/vendedor/Tienda';
import PedidoView from './Pedidos/PedidoView';
import createTienda from './components/vendedor/createTienda';
import { CreatePedido } from './Pedidos/CreatePedido';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/createPedido" component={CreatePedido}/>
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/registro" component={SingUp} />
            <Route path="/login" component={SingIn} />
            <Route path="/createProduct" component={CreateProduct} />
{/*             <Route path="/pedidosVendedor" component={PedidosVendedor} /> */}
            <Route path="/vendedor" component={inicioVendedor} />
            <Route path="/productosVendedor" component={DashBoard} />
            <Route path="/tienda" component={Tienda} />
            
            <Route path="/productos" component={ProductView} />
            <Route path="/pedidosVendedor" component={PedidoView} />
            <Route path="/formTienda" component={createTienda} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;