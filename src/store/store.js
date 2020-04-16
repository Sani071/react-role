import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import Reducer from "./reducer/rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(Reducer, composeEnhancer(applyMiddleware()))