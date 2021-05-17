//import { CreateProduct } from "../../components/products/CreateProducts";

const initState = {
    tiendas: [],
    tienda:[]
}




//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
const tiendaReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_TIENDA":
            //console.log("created tienda", action.tienda);
            return state;
        case "CREATE_TIENDA_ERROR":
            //console.log("error de creacion", action.err);
            return state;

        case "SHOW_TIENDAS":
            return{
            ...state,
            tiendas: action.tiendas
            }
            case "LOAD_TIENDA":
                console.log(state)
                return{
                ...state,
                tienda: action.tienda
                }
    
    }
    return state;
}
export default tiendaReducer