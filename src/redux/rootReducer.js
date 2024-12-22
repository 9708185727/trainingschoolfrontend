import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import oppReducer from "./opportunity/oppSlice"

const rootReducer= combineReducers({
    auth: authReducer,
   opp:oppReducer,
    // opportunities:opportunitiesReducer
});
export default rootReducer;