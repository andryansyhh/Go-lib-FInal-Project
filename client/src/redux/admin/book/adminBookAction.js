import golibAPI from "../../../API/go-lib"

const access_token = !localStorage.getItem("access_token") ? "" : localStorage.getItem("access_token")

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: "/books",
        headers: {
          "Authorization": access_token
        }
      })

      return dispatch({ type: "FETCH_BOOKS", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response)
    }
  }
}

export const fetchOneBook = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })

      const { data } = await golibAPI({
        method: "GET",
        url: `/books/${id}`,
        headers: {
          "Authorization": access_token
        }
      })
      // console.log(data)
      return dispatch({ type: "FETCH_ONE_BOOK", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response)
    }
  }
}

export const createBook = (payload, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })
      const { data } = await golibAPI({
        method: "POST",
        url: "/books",
        data: payload,
        headers: {
          "Authorization": access_token,
        }
      })

      // console.log(data)
      history.push("/admin/books")
      return dispatch({ type: "CREATE_BOOK", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_BOOKS", payload: err.response })
      console.log(err.response)
    }
  }

}

export const updateBook = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })

      const { data } = await golibAPI({
        method: "PUT",
        url: `/books/${id}`,
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)

      return dispatch({ type: "UPDATE_BOOK", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response.data)
    }
  }
}

export const updateBookFile = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })

      const { data } = await golibAPI({
        method: "PUT",
        url: `/books/file/${id}`,
        data: payload,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)

      return dispatch({ type: "UPDATE_BOOK", payload: data })

    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response.data)
    }
  }
}

export const deleteBook = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADMIN_BOOK_LOADING" })

      const { data } = await golibAPI({
        method: "DELETE",
        url: `/books/${id}`,
        headers: {
          "Authorization": access_token
        }
      })

      // console.log(data)
      dispatch(fetchBooks())
      return dispatch({ type: "DELETE_BOOK", payload: data })
    } catch (err) {
      dispatch({ type: "ERROR_BOOKS" })
      console.log(err.response.data)
    }
  }

}