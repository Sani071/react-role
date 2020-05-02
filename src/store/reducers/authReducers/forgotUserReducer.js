import { SET_FORGOT_USER, SET_FORGOT_USERS } from "../../actions/actionTypes";

const initialState = {
  isForgotUserAuthenticated: false,
  forgotUser: {},
  isForgotUsersAuthenticated: false,
  forgotUsers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FORGOT_USER:
      return {
        ...state,
        isForgotUserAuthenticated: action.payload ? true : false,
        forgotUser: action.payload
      };
    case SET_FORGOT_USERS:
      return {
        ...state,
        isForgotUsersAuthenticated: action.payload ? true : false,
        forgotUsers: action.payload
      };
    default:
      return state;
  }
}
