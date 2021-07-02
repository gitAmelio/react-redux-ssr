import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducers from "./authReducers";
import adminsReducer from "./adminsReducer";

export default combineReducers({
    users: usersReducer,
    auth: authReducers,
    admins: adminsReducer
});