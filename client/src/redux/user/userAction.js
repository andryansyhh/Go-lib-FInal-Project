import golibAPI from "../../API/go-lib"
import UserDashboard from "../../components/moleculs/pages/admin/user/UserDashboard";
import AdminRoute from "../../components/routes/AdminRoute";
import { fetchCategories } from "../admin/category/adminCategoryAction"
import { fetchUsers } from "../admin/user/adminAction"

export const resetForm = () => {
    return {
        type: "USER_RESET_FORM",
    };
}

export const registerUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "USER_LOADING" })

            const { data } = await golibAPI({
                method: "POST",
                url: "/users/register",
                data: payload,
            })

            // console.log(data)
            dispatch({ type: "USER_SUCCESS", payload: "Congratulations, your account has been successfully created. Please login." })
            return dispatch({ type: "USER_REGISTER", payload: data })

        } catch (err) {
            if (err.response.data.data.error === `Error 1062: Duplicate entry '${payload.email}' for key 'email'`) {
                dispatch({ type: "USER_ERROR", payload: "Email already exists" })
            } else {
                dispatch({ type: "USER_ERROR", payload: err.response.data.data.error })
            }
            console.log(err)
        }
    }
}

export const loginUser = (payload, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "USER_LOADING" })

            const { data } = await golibAPI({
                method: "POST",
                url: "/users/login",
                data: payload,
            })

            localStorage.setItem("accessToken", data.data.token)

            // console.log(data)
            if (data.data.role === "admin") {
                const encodedAdm = btoa(data.data.role)
                localStorage.setItem(`${encodedAdm}`, encodedAdm)
                dispatch(fetchUsers())
                history.push("/admin/users")
            } else {
                dispatch(fetchCategories())
                history.push("/home")
            }
            return dispatch({ type: "USER_LOGIN", payload: data })

        } catch (err) {
            if (err.response.data.data.errors === `user is not found`) {
                dispatch({ type: "USER_ERROR", payload: "The email/password is incorrect" })
            } else if (err.response.data.data.errors === `password invalid`) {
                dispatch({ type: "USER_ERROR", payload: "The email/password is incorrect" })
            } else {
                dispatch({ type: "USER_ERROR", payload: err.response.data.data.error })
            }
            console.log(err.response)
        }
    }
}

export const logoutUser = () => ({
    type: "LOGOUT_USER"
})
