import { combineReducers } from "@reduxjs/toolkit";
import loadUserReducer from "./slices/loadUserSlice"

const rootReducer = combineReducers({
    user: loadUserReducer,
})

export default rootReducer;