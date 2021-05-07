export const createPedido = (pedido) => {
    return(dispatch, getState, { getFirebase, getFirestore}) => {
        //llamada a la base de datos
        const firestore = getFirestore();
        
        firestore.collection("pedidos").add({
            ...pedido,
            
            //aqui irian las que queramos agregar de mas
        }).then(() => {
            dispatch({type: "CREATE_PEDIDO", pedido: pedido})
        }).catch((err) => {
            dispatch({type: "CREATE_PEDIDO_ERROR", err})
        })
    }
};
//show pedidos