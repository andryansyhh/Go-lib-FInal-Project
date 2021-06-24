const initState = {
  books: [],
  book: null,
  isLoading: false,
  error: null
}

const adminBookReducer = (state = initState, action) => {
  switch(action.type) {
    case "ADMIN_BOOK_LOADING":
      return { ...state, isLoading: true }
    case "FETCH_BOOKS":
      return { ...state, isLoading: false, books: action.payload }
    case "FETCH_ONE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "CREATE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "UPDATE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "DELETE_BOOK":
      return { ...state, isLoading: false, book: null }
    case "ERROR_BOOKS":
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default adminBookReducer;