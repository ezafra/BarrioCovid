import { getFirestore } from "redux-firestore";


export const singIn = (credentials) => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase= getFirebase();
        const firestore= getFirestore();
        
        console.log(credentials);
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        firestore.collection("registered").add({
            email: credentials.email,
            contraseña: credentials.password,
            isLogged: credentials.isLogged
            
        }).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err) => {
            dispatch ({type: "LOGIN_ERROR"})
        });
    }

}

export const singOut = () => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase= getFirebase();
        const firestore= getFirestore()

        firebase.auth().signOut().then(()=>{
            dispatch({type: "SINGOUT_SUCCESS"})

        })
        
       /*  firestore.collection("registered").doc(credenciales.id).delete() */
        
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
        console.log(newUser.nombre);
        firestore.collection("users").add({
            nombre: newUser.nombre,
            apellidos: newUser.apellidos,
            email: newUser.email,
            contraseña: newUser.password,
            isSeller: newUser.isSeller,
            

        }).then(() =>{
            dispatch({type: "SINGUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}


