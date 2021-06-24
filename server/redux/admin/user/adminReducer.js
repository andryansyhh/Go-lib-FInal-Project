const initState = {
  users: [],
  user: null,
  isLoading: false,
  error: null
}

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_LOADING":
      return { ...state, isLoading: true }
    case "FETCH_USERS":
      return { ...state, isLoading: false, users: action.payload }
    case "FETCH_ONE_USER":
      return { ...state, isLoading: false, user: action.payload }
    case "CREATE_USER":
      return { ...state, isLoading: false, user: action.payload }
    case "UPDATE_USER":
      return { ...state, isLoading: false, user: action.payload }
    case "DELETE_USER":
      return { ...state, isLoading: false, user: null }
    case "ERROR_USERS":
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default adminReducer;