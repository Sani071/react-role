import {
    SET_PERMISSION_TO_ROLE,
    DELETE_ROLE
} from "../action/actionsTypes";

var initState = [
    { name: "admin", permission: [] },
    { name: "super admin", permission: [] },
    { name: "moderator", permission: [] }
]


const roleReducer = (state = initState, action) => {
    let { type, payload } = action;
    switch (type) {
        case SET_PERMISSION_TO_ROLE: {
            const { role, permission } = payload;
            state.forEach(itm => {
                if (itm.name === role) {
                    itm.permission.unshift(...permission)
                }
            })
            return state
        };
        case DELETE_ROLE: {
            const filterData = state.filter(itm => itm.name !== payload);
            state = filterData
            return state;
        };

        default:
            return state;
    }
};
export default roleReducer;