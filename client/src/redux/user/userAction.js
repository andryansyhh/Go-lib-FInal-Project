import golibAPI from "../../API/go-lib"

export const registerUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type : "USER_LOADING"})
    
            const { data } = await golibAPI({
                method : "POST",
                url : "/users/register",
                data : payload,
            })

            console.log(data)

            return dispatch({ type : "USER_REGISTER", payload : data})

        } catch(err) {
            console.log(err)
        }
    }
}

export const loginUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type : "USER_LOADING"})
    
            const { data } = await golibAPI({
                method : "POST",
                url : "/users/login",
                data : payload,
            })

            localStorage.setItem("access_token", data.data.token)

            console.log(data)

            return dispatch({ type : "USER_LOGIN", payload : data})

        } catch(err) {        
            console.log(err.response)
        }
    }
}

export const logoutUser = () => ({
    type : "LOGOUT_USER"
})
