import { combineReducers } from "redux";
import contentReducer from "./content/contentReducer";
import adminReducer from "./admin/user/adminReducer";
import adminCategoryReducer from "./admin/category/adminCategoryReducer";
import adminBookReducer from "./admin/book/adminBookReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  user: userReducer,
  admin: adminReducer,
  adminCategory: adminCategoryReducer,
  adminBook: adminBookReducer,
})

export default rootReducer;