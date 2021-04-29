



export const createProduct = (producto) => {
    return(dispatch, getState, { getFirebase, getFirestore}) => {
        //llamada a la base de datos
        const firestore = getFirestore();
        firestore.collection("productos").add({
            ...producto,
            firstName : "Edel",
            createdAt: new Date()
            //aqui irian las que queramos agregar de mas
        }).then(() => {
            dispatch({type: "CREATE_PRODUCT", producto: producto})
        }).catch((err) => {
            dispatch({type: "CREATE_PRODUCT_ERROR", err})
        })

    }
};
