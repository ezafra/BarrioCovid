import axios from "axios";



export const singIn = (credentials) => {
    return (dispatch)=>{

        return  axios.get("http://localhost:8080/BARRIO-SERVICE/rest/usuarios")
        .then(()=>{
            localStorage.setItem('user', JSON.stringify(credentials));

            dispatch({type:"LOGIN_SUCCESS", usuario: credentials})
        }).catch((err) => {
            dispatch ({type: "LOGIN_ERROR"})
        });
    }

}

export const singOut = () => {
    return (dispatch)=>{
        return  axios.get("http://localhost:8080/BARRIO-SERVICE/rest/usuarios/")
        .then(()=>{
            dispatch({type: "LOGOUT_SUCCESS"})

        }).catch((err) => {
            dispatch ({type: "LOGOUT_ERROR"})
        });
        
       /*  firestore.collection("registered").doc(credenciales.id).delete() */
        

    }

}

export const singUp = (newUser) => {
    return (dispatch)=>{
        const usuario = JSON.stringify(newUser)
        console.log(usuario)
        return axios.post("http://localhost:8080/BARRIO-SERVICE/rest/usuarios", newUser)
        .then(() =>{
            dispatch({type: "SINGUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}


