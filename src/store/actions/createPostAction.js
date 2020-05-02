import { SET_TAG_OPTIONS, SET_FEELING_OPTIONS, GET_FEELING_OPTIONS, GET_TAG_OPTIONS, ADD_TAG, ADD_FEELINNG, SEARCH_TAG, SEARCH_FEELING, REMOVE_TAG } from "./actionTypes";

export const setTagOption = payload => {
    return {
        type: SET_TAG_OPTIONS,
        payload
    };
};

export const getTagOption = payload => {
    return {
        type: GET_TAG_OPTIONS,
        payload
    };
};

export const searchTagOption = payload => {
    return {
        type: SEARCH_TAG,
        payload
    };
};

export const addTag = payload => {
    return {
        type: ADD_TAG,
        payload
    };
};
export const removeTag = payload => {
    return {
        type: REMOVE_TAG,
        payload
    };
};


export const getFeelingOption = payload => {
    return {
        type: GET_FEELING_OPTIONS,
        payload
    };
};


export const setFeelingOption = payload => {
    return {
        type: SET_FEELING_OPTIONS,
        payload
    };
};