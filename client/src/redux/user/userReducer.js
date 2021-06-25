const initState = {
  user: null,
  isLoading: false,
  error: null,
  success: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return { ...state, isLoading: true };
    case "USER_REGISTER":
      return { ...state, user: action.payload, isLoading: false };
    case "USER_LOGIN":
      return { ...state, user: action.payload, isLoading: false };
    case "LOGOUT_USER":
      localStorage.removeItem("accessToken");
      return { ...state, user: null };
    case "USER_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "USER_SUCCESS":
      return { ...state, success: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
