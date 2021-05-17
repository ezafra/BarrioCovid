import axios from "axios";
import { history } from "../../history/history";



export const singIn =   (credentials) => {
    return (dispatch)=>{
        const email = credentials.email;
        const url = `http://localhost:8080/BARRIOCOVIDDD/rest/usuarios/${email}`

        return  axios.get(url)
        .then((res)=>{
            
            if(res.data.email===credentials.email && res.data.password ===credentials.password){
                
                dispatch({type:"LOGIN_SUCCESS", usuario: res.data})
                console.log(res)
                localStorage.setItem("registrado", JSON.stringify(res.data))
                
                history.push("/dashboard")
                window.location.reload();
                
            }else{
                dispatch ({type: "LOGIN_ERROR"})
                history.push("/login")
                
            }

            
        }).catch((err) => {
            dispatch ({type: "LOGIN_ERROR"})
        });
    }

}

export const singOut = () => {
    return (dispatch)=>{
        return   axios.get("http://localhost:8080/BARRIOCOVIDDD/rest/usuarios")
        .then((res)=>{
            history.push("/")
            localStorage.removeItem("registrado")
            dispatch({type: "LOGOUT_SUCCESS"})
            history.push("/")
            window.location.reload();

        }).catch((err) => {
            history.push("/")
            window.location.reload();
            dispatch ({type: "LOGOUT_ERROR"})
            

        });
        
       /*  firestore.collection("registered").doc(credenciales.id).delete() */
        

    }

}

export const singUp = (newUser) => {
    return (dispatch)=>{
        const usuario = JSON.stringify(newUser)
        console.log(usuario)
        /* const tienda = {
            propietario: newUser.email,
            direccion: newUser.direccion, 
            nombre: "",
            genero: "", 
            productos : []
        }
        sessionStorage.setItem("tienda", JSON.stringify(tienda)) */
        sessionStorage.setItem("registiring", JSON.stringify(newUser))
        return axios.post("http://localhost:8080/BARRIOCOVIDDD/rest/usuarios", newUser)
        
        /* .then(()=>{
            console.log("tienda creada")
            console.log(tienda)
            return axios.post("http://localhost:8080/BARRIOCOVIDDD/rest/tiendas", tienda )
        }) */
        .then(() =>{
            dispatch({type: "SINGUP_SUCCESS"})
            console.log("hola")
            console.log(newUser.esVendedor)
            if(newUser.esVendedor===true){
                history.push("/formTienda")
                window.location.reload()
            }else {
                history.push("/dashboard")
            }
        }).catch((err)=>{
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}