import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";

import errorReducer from "./errorReducer/errorReducer";
import authReducer from "./authReducers/authReducers";
import metaReducer from "./metaReducer";
import infoReducer from "./infoReducer/infoReducer";
import forgotUserReducer from "./authReducers/forgotUserReducer";
import createPostData from "./postReducer/createPostReducer"

const rootReducer = combineReducers({
  error: errorReducer,
  auth: authReducer,
  meta: metaReducer,
  info: infoReducer,
  forgotUser: forgotUserReducer,
  createPostData
});

export default rootReducer;
