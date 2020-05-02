/* eslint-disable no-fallthrough */
/* eslint-disable no-lone-blocks */
import {
    SET_TAG_OPTIONS,
    SET_FEELING_OPTIONS,
    GET_FEELING_OPTIONS,
    GET_TAG_OPTIONS,
    ADD_TAG,
    ADD_FEELINNG,
    SEARCH_TAG,
    SEARCH_FILTER,
    REMOVE_TAG
} from "../../actions/actionTypes";
const init = {
    searchKeyword: "",
    initTag: [],
    tagOptions: [],
    feelingOptions: [],
    tagedFriends: []
};

const errorReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_TAG_OPTIONS: {
            return {
                ...state,
                initTag: payload,
                tagOptions: payload
            };
        }
        case GET_TAG_OPTIONS: {
            return state.tagOptions;
        }
        case SEARCH_TAG: {
            const { keyword } = payload;
            let filterdData = [];
            const temp = [...state.tagOptions]
            if (keyword) {
                filterdData = temp
                    ? temp.filter((itm) => {
                        return itm.name.toLowerCase().includes(keyword.toLowerCase());
                    })
                    : [];
            } else {
                filterdData = state.initTag
            }
            return {
                ...state,
                searchKeyword: keyword,
                tagOptions: filterdData,
            };
        }
        case ADD_TAG: {
            const { id } = payload;
            state.initTag.forEach(itm => {
                if (itm.id === id) {
                    itm.isSelected = true
                    state.tagedFriends.push(itm)
                }
            });
            return {
                ...state,
            }
        }
        case REMOVE_TAG: {
            const { id } = payload;
            let filterdData = []
            state.initTag.forEach(itm => {
                if (itm.id === id) {
                    filterdData = state.tagedFriends.filter(itm => {
                        return itm.id !== id
                    })
                    itm.isSelected = false;
                }
            });

            return {
                ...state,
                // tagOptions: filterData,
                tagedFriends: [...filterdData]
            }

        }
        case SET_FEELING_OPTIONS: {
            state.feelingOptions = payload;
            return state.feelingOptions;
        }
        case GET_FEELING_OPTIONS: {
            return state.feelingOptions;
        }
        default:
            return state;
    }
};

export default errorReducer;
