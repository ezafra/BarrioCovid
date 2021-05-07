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
        firestore.collection("registrados").doc("OUYp7kRnDqB2jzDgKUFj").update({
            
            isLogged: true,
            

            
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

        firebase.auth().signOut()
        console.log("se ha ejecutao la funcion")
        firestore.collection("registrados").doc("OUYp7kRnDqB2jzDgKUFj").update({
            
            isLogged: false,
            

            
        }).then(()=>{
            dispatch({type: "LOGOUT_SUCCESS"})

        }).catch((err) => {
            dispatch ({type: "LOGOUT_ERROR"})
        });
        
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
        firestore.collection("registrados").add({
            nombre: newUser.nombre,
            apellidos: newUser.apellidos,
            email: newUser.email,
            contraseña: newUser.password,
            isSeller: newUser.isSeller,
            isLogged:false
            

        }).then(() =>{
            dispatch({type: "SINGUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}


