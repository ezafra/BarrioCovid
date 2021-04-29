export const singIn = (credentials) => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase= getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err) => {
            dispatch ({type: "LOGIN_ERROR"})
        });
    }

}

export const singOut = () => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase= getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: "SINGOUT_SUCCESS"})

        })
        
    }

}

export const singUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase= getFirebase();
        const firestore= getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then ((resp)=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                nombre: newUser.nombre,
                apellido: newUser.apellido
                
            })
        }).then(() =>{
            dispatch({type: "SINGUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}


