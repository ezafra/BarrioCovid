//import { CreateProduct } from "../../components/products/CreateProducts";

const initState = {
    productos: [
        {productName: "Gafas", price: "78", description: "basura de gafas", tienda: "Carglass", id: "1"},
        {productName: "Porro", price: "5", description: "buena mierda del bosque", tienda: "La calle", id: "2"}
    ]
}




//en vez de los datos creados a mano, vamos a empezar a utlizar los de la bbdd
const productReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_PRODUCT":
            console.log("created product", action.producto);
            return state;
        case "CREATE_PRODUCT_ERROR":
            console.log("error de creacion", action.err);
            return state;
    }
    return state;
}
export default productReducer