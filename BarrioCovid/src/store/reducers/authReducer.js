
const initState = {}

const authReducer = (state = initState , action) => {
    switch(action.type){
        case "LOGING_ERROR":
            console.log("login error");
            return {
                ...state,
                authError:"login failed"
                
            }
        case "LOGIN_SUCCESS":
            console.log("login success");
            console.log(action.usuario);
            console.log(state);
            return {
                ...state,
                authError: null,
                logged: action.usuario
            }






        case "LOGOUT_SUCCESS":
            console.log(state);
            console.log("logout success");
            

            return {
                ...state, 
                isLogged: false
            }
        case "LOGOUT_ERROR":
            console.log("logout error");
            return {
                ...state,
                loggoutError:true
            }








        
        case "SINGUP_SUCCESS":
            console.log("singup success");
            return {
                ...state,
                authError: null
            }
        
        case "SINGUP_ERROR":
            console.log("singup error");
            return {
                ...state,
                authError: action.err
            }

        default:
                return state
    }
    
}
export default authReducer