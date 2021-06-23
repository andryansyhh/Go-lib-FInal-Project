import { combineReducers } from "redux";
import contentReducer from "./content/contentReducer";
import adminReducer from "./admin/user/adminReducer";
import adminCategoryReducer from "./admin/category/adminCategoryReducer";
import adminBookReducer from "./admin/book/adminBookReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  admin: adminReducer,
  adminCategory: adminCategoryReducer,
  adminBook: adminBookReducer,
})

export default rootReducer;