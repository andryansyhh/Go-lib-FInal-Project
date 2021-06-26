const initState = {
  categories: [],
  category: null,
  isLoading: false,
  error: null,
  length: 0,
}

const adminCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_CATEGORY_LOADING":
      return { ...state, isLoading: true }
    case "FETCH_CATEGORIES":
      return { ...state, isLoading: false, categories: action.payload }
    case "FETCH_ONE_CATEGORY":
      return { ...state, isLoading: false, category: action.payload }
    case "CREATE_CATEGORY":
      return { ...state, isLoading: false, category: action.payload }
    case "UPDATE_CATEGORY":
      return { ...state, isLoading: false, category: action.payload }
    case "DELETE_CATEGORY":
      return { ...state, isLoading: false, category: null }
    case "ERROR_CATEGORIES":
      return { ...state, isLoading: false, error: action.payload }
    case "LENGTH_CATEGORIES":
      return { ...state, isLoading: false, length: action.payload }
    default:
      return state
  }
}

export default adminCategoryReducer;