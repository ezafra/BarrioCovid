export const createTienda = (tienda) => {
    return(dispatch, getState, { getFirebase, getFirestore}) => {
        //llamada a la base de datos
        const firestore = getFirestore();
        
        firestore.collection("tiendas").add({
            ...tienda,
            
            //aqui irian las que queramos agregar de mas
        }).then(() => {
            dispatch({type: "CREATE_TIENDA", tienda: tienda})
        }).catch((err) => {
            dispatch({type: "CREATE_TIENDA_ERROR", err})
        })
    }
};
