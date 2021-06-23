import golibAPI from "../../../API/go-lib"

const access_token = !localStorage.getItem("accessToken") ? "" : localStorage.getItem("accessToken")

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_CATEGORY_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: "/categories",
        headers: {
          "Authorization": access_token
        }
      })

      return dispatch({ type: "FETCH_CATEGORIES", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_CATEGORIES" })
      console.log(err.response)
    }
  }
}

export const fetchOneCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_CATEGORY_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: `/categories/${id}`,
        headers: {
          "Authorization": access_token
        }
      })
      // console.log(data)
      return dispatch({ type: "FETCH_ONE_CATEGORY", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_CATEGORIES" })
      console.log(err.response)
    }
  }
}

export const createCategory = (payload, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_CATEGORY_LOADING" })

      const { data } = await golibAPI({
        method: "POST",
        url: "/categories",
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)
      history.push("/admin/categories")

      return dispatch({ type: "CREATE_CATEGORY", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_CATEGORIES", payload: err.response.data.data.error })
      console.log(err.response)
    }
  }

}

export const updateCategory = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_CATEGORY_LOADING" })

      const { data } = await golibAPI({
        method: "PUT",
        url: `/categories/${id}`,
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)

      return dispatch({ type: "UPDATE_CATEGORY", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_CATEGORIES" })
      console.log(err.response.data)
    }
  }
}


export const deleteCategory = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_CATEGORY_LOADING" })

      const { data } = await golibAPI({
        method: "DELETE",
        url: `/categories/${id}`,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)
      dispatch(fetchCategories())
      return dispatch({ type: "DELETE_CATEGORY", payload: data })
    } catch (err) {
      dispatch({ type: "ERROR_CATEGORIES" })
      console.log(err.response.data)
    }
  }

}