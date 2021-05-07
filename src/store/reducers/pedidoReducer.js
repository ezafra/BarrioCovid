//import { CreateProduct } from "../../components/products/CreateProducts";

const initState = {
    pedidos: []
}




//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
const pedidoReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_PEDIDO":
            console.log("created pedido", action.pedido);
            return state;
        case "CREATE_PEDIDO_ERROR":
            console.log("error de creacion", action.err);
            return state;
    }
    return state;
}
export default pedidoReducer