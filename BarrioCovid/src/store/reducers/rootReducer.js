import { combineReducers } from "redux"
import authReducer from "./authReducer"
import productReducer from "./productReducer"

import tiendaReducer from "./tiendaReducer"
import pedidoReducer from "./pedidoReducer"
import cartReducer from "./cartReducer"




const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    tienda: tiendaReducer,
    pedido: pedidoReducer,
    carrito: cartReducer,
    
})
export default rootReducer