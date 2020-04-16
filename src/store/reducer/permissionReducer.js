import {
    ADD_NEW_PERMISSION,
    DELETE_PERMISSION
} from "../action/actionsTypes";

var initState = ["add", "edit", "delete", "publish"]


const roleReducer = (state = initState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_NEW_PERMISSION: {
            const { permission } = payload;
            state.unshift(permission)
            return state
        }
        case DELETE_PERMISSION: {
            const filterData = state.filter(itm => itm !== payload);
            state = filterData
            return state;
        };
        default:
            return state;
    }
};
export default roleReducer;