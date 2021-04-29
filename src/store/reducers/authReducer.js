
const initState = {}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGING_ERROR":
            console.log("login error");
            return {
                ...state,
                authError:"login failed"
            }
        case "LOGIN_SUCCESS":
            console.log("login success");
            return {
                ...state,
                authError: null
            }
        case "SINGOUT_SUCCESS":
            console.log("logout success");
            return state
        
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