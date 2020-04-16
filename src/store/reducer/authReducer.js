import {
    LOGIN_USER
} from "../action/actionsTypes";

const authReducer = (state = false, action) => {
    let { type, payload } = action;
    switch (type) {
        case LOGIN_USER: {
            state = payload
            return state
        }
        default:
            return state;
    }
};
export default authReducer;