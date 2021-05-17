import axios from "axios";
import { history } from "../../history/history";




export const createProduct = (producto) => {
    return(dispatch) => {
        //llamada a la base de datos
        const product = producto;
        console.log(product)
        return axios.post(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/`, producto)
        .then(()=>{
            return axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/tiendas/${product.tienda}`)

        })
        .then(async (res)=>{
            const array = await axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/`)
            console.log(array)
            const id = (array.data[array.data.length -1].id)
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
            return axios.post(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/${tienda.propietario}`, tienda)
        })
        .then(() => {
            dispatch({type: "CREATE_PRODUCT", producto: producto})
            history.push("/tienda");
            window.location.reload();
        }).catch((err) => {
            dispatch({type: "CREATE_PRODUCT_ERROR", err})
            history.push("/tienda");
            window.location.reload();
        })
    }
};

export function loadProducts(seller){
    
    return(dispatch)=>{
        return axios.get(`http://localhost:8080/BARRIOCOVIDDD/rest/productos/tienda/${seller}`,{
            headers: { 
            'x-apikey': 'API_KEY',
            },
          responseType: 'json',
           }

        ).then((response)=>{
            dispatch(showProducts(response.data));
        }
        )
    }
}

export function showProducts(productos){

    return{
        type: "SHOW_PRODUCTS",
        productos: productos
    }

}