import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import productReducer from "./product/product.reducer";
let rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
export { rootReducer };
