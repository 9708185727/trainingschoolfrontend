import { combineReducers } from "@reduxjs/toolkit";
import oppReducer from "./opportunity/oppSlice"
import authReducer from "./auth/authSlice"
import oppCartReducer from "./cart/cartSlice"
import subReducer from "./submission/subSlice"
const rootReducer= combineReducers({
    auth:authReducer,
    opp:oppReducer,
    cart:oppCartReducer,
    sub:subReducer,
});
export default rootReducer;