//import { CreateProduct } from "../../components/products/CreateProducts";

const initState = {
    productos: [
       
    ]
}




//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
const productReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_PRODUCT":
            console.log("created product", action.producto);
            console.log(action)
            return {
                ...state,
                producto:action.producto
            }
        case "CREATE_PRODUCT_ERROR":
            console.log("error de creacion", action.err);
            return state;
    }
    return state;
}
export default productReducer