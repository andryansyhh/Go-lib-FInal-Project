const initState = {
  books: [],
  book: null,
  isLoading: false,
  error: null,
  fileProgress: 0,
  lengthBooks: 0,
}

const adminBookReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_BOOK_LOADING":
      return { ...state, isLoading: true }
    case "FETCH_BOOKS":
      return { ...state, isLoading: false, books: action.payload }
    case "FETCH_ONE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "CREATE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "PROGRESS_UPLOAD":
      return { ...state, fileProgress: action.payload }
    case "UPDATE_BOOK":
      return { ...state, isLoading: false, book: action.payload }
    case "DELETE_BOOK":
      return { ...state, isLoading: false, book: null }
    case "ERROR_BOOKS":
      return { ...state, isLoading: false, error: action.payload }
    case "LENGTH_BOOKS":
      return { ...state, isLoading: false, lengthBooks: action.payload }
    default:
      return state
  }
}

export default adminBookReducer;