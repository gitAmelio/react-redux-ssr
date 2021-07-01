import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducers from "./authReducers";

export default combineReducers({
    users: usersReducer,
    auth: authReducers
});