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



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/registro" component={SingUp} />
            <Route path="/login" component={SingIn} />
            <Route path="/createProduct" component={CreateProduct} />
{/*             <Route path="/pedidosVendedor" component={PedidosVendedor} /> */}
            <Route path="/vendedor" component={inicioVendedor} />
            <Route path="/productosVendedor" component={DashBoard} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
