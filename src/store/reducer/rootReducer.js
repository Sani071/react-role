import { combineReducers } from "redux";
import users from "./usersReducer";
import role from "./roleReducer";
import permission from "./permissionReducer";
import auth from "./authReducer";

export default combineReducers({
    users,
    role,
    permission,
    auth
});