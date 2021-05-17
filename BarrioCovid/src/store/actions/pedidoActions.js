import axios from "axios";
import { history } from "../../history/history";

export const createPedido = (pedido) => {
    return(dispatch) => {
        //llamada a la base de datos
        
        
        console.log(pedido)

        return axios.post("http://localhost:8080/BARRIOCOVIDDD/rest/pedidos", pedido)
        .then(() => {
            dispatch({type: "CREATE_PEDIDO", pedido: pedido})
            history.push("/dashboard")
            window.location.reload()
            
        }).catch((err) => {
            dispatch({type: "CREATE_PEDIDO_ERROR", err})
        })
            
        /*     //aqui irian las que queramos agregar de mas
        }).then(() => {
            dispatch({type: "CREATE_PEDIDO", pedido: pedido})
        }).catch((err) => {
            dispatch({type: "CREATE_PEDIDO_ERROR", err})
        }) */
    }
};
//show pedidos