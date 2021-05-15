import axios from "axios";




export const createProduct = (producto) => {
    return(dispatch) => {
        //llamada a la base de datos
        return axios.get("")
        .then(() => {
            dispatch({type: "CREATE_PRODUCT", producto: producto})
        }).catch((err) => {
            dispatch({type: "CREATE_PRODUCT_ERROR", err})
        })
    }
};

