import axios from "axios"
export const createTienda = (tienda) => {
    return(dispatch) => {
        //llamada a la base de datos
        return axios.get()
        .then(() => {
            dispatch({type: "CREATE_TIENDA", tienda: tienda})
        }).catch((err) => {
            dispatch({type: "CREATE_TIENDA_ERROR", err})
        })
    }
};
export function loadTiendas(){
    
    return(dispatch)=>{
        return axios.get("http://localhost:8080/BARRIOCOVIDDD/rest/tiendas",{
            headers: { 
            'x-apikey': 'API_KEY',
            },
          responseType: 'json',
           }

        ).then((response)=>{
            dispatch(showTiendas(response.data));
        }
        )
    }
}
export function showTiendas(tiendas){
    console.log("show tiendas")
    console.log(tiendas)
    return{
        type: "SHOW_TIENDAS",
        tiendas: tiendas
    }

}
