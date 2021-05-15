//import { CreateProduct } from "../../components/products/CreateProducts";

const initState = {
    tiendas: ["hola"]
}




//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
const tiendaReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_TIENDA":
            console.log("created tienda", action.tienda);
            return state;
        case "CREATE_TIENDA_ERROR":
            console.log("error de creacion", action.err);
            return state;

        case "SHOW_TIENDAS":
            return{
            ...state,
            tiendas: action.tiendas
            }
    }
    return state;
}
export default tiendaReducer