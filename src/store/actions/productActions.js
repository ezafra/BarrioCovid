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
            const array = axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/`)
            console.log(array)
            const id = (array.length -1)
            console.log(id)
            console.log(res)
            let tienda = res.data
            console.log(tienda)
            try{tienda =({
                ...tienda,
                productos: tienda.productos.concat(id)
            })}catch{
                tienda =({
                    ...tienda,
                    productos: [id]

            })}
            
            console.log(tienda)
            return axios.post(`http://localhost:8080/BARRIOCOVIDDD/rest/tiendas/${tienda.propietario}`, tienda)
        })
        .then(() => {
            dispatch({type: "CREATE_PRODUCT", producto: producto})
        }).catch((err) => {
            dispatch({type: "CREATE_PRODUCT_ERROR", err})
        })
    }
};

