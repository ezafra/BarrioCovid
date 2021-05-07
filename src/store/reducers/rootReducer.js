import { combineReducers } from "redux"
import authReducer from "./authReducer"
import productReducer from "./productReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import tiendaReducer from "./tiendaReducer"
import pedidoReducer from "./pedidoReducer"




const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    tienda: tiendaReducer,
    pedido: pedidoReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

})
export default rootReducer