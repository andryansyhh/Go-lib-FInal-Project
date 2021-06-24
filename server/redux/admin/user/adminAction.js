import golibAPI from "../../../API/go-lib"

const access_token = !localStorage.getItem("accessToken") ? "" : localStorage.getItem("accessToken")

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: "/users",
        headers: {
          "Authorization": access_token
        }
      })

      return dispatch({ type: "FETCH_USERS", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_USERS" })
      console.log(err.response)
    }
  }
}

export const fetchOneUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: `/users/${id}`,
        headers: {
          "Authorization": access_token
        }
      })
      // console.log(data)
      return dispatch({ type: "FETCH_ONE_USER", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_USERS" })
      console.log(err.response)
    }
  }
}

export const createUser = (payload, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_LOADING" })

      const { data } = await golibAPI({
        method: "POST",
        url: "/users/register",
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)
      history.push("/admin/users")

      return dispatch({ type: "CREATE_USER", payload: data })

    } catch (err) {
      if (err.response.data.data.error === `Error 1062: Duplicate entry '${payload.email}' for key 'email'`) {
        dispatch({ type: "ERROR_USERS", payload: "Email already exists" })
      } else {
        dispatch({ type: "ERROR_USERS", payload: err.response.data.data.error })
      }
      console.log(err.response)
    }
  }

}


export const updateUser = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_LOADING" })

      const { data } = await golibAPI({
        method: "PUT",
        url: `/users/${id}`,
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)

      return dispatch({ type: "UPDATE_USER", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_USERS" })
      console.log(err.response.data)
    }
  }
}


export const deleteUser = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_LOADING" })

      const { data } = await golibAPI({
        method: "DELETE",
        url: `/users/${id}`,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)
      dispatch(fetchUsers())
      return dispatch({ type: "DELETE_USER", payload: data })
    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response.data)
    }
  }

}