import { combineReducers } from "redux";
import contentReducer from "./content/contentReducer";
import userReducer  from "./user/userReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  user : userReducer,
})

export default rootReducer;