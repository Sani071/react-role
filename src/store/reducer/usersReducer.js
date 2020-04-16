import {
    SET_ROLE_TO_USER,
    DELETE_USER
} from "../action/actionsTypes";

var initState = [
    {
        id: 1,
        userName: "alamin77",
        password: '12ss11',
        role: "",
        isDeleted: false
    },
    {
        id: 2,
        userName: "sani071",
        password: '12ss11',
        role: "",
        isDeleted: false
    },
    {
        id: 3,
        userName: "durjoy7",
        password: '12ss11',
        role: "",
        isDeleted: false
    },
    {
        id: 4,
        userName: "noyon11",
        password: '12ss11',
        role: "",
        isDeleted: false
    },
]

const usersReducer = (state = initState, action) => {
    let { type, payload } = action;
    switch (type) {
        case SET_ROLE_TO_USER: {
            const { userName, role } = payload;
            state.forEach(itm => {
                if (itm.userName === userName) {
                    itm.role = role
                }
            })
            return state;
        }
        case DELETE_USER: {
            const filterData = state.filter(itm => itm.userName !== payload);
            state = filterData
            return state;
        }
        default:
            return state;
    }
};
export default usersReducer;