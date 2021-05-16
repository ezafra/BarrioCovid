import axios from "axios";
import { productos } from "../../datos/productos";




export const createProduct = (producto) => {
    return(dispatch) => {
        //llamada a la base de datos
        const product = producto;
        console.log(product)
        return axios.post(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/`, producto)
        .then(()=>{
            return axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/tiendas/${product.tienda}`)

        })
        .then((res)=>{
            console.log(res)
            let tienda = res.data
            console.log(tienda)
            tienda =({
                ...tienda,
                productos: productos.concat(producto)
            })
            console.log(tienda)
            return axios.post(`http://localhost:8080/BARRIOCOVIDDD/rest/tiendas/`, tienda)
        })
        .then(() => {
            dispatch({type: "CREATE_PRODUCT", producto: producto})
        }).catch((err) => {
            dispatch({type: "CREATE_PRODUCT_ERROR", err})
        })
    }
};

