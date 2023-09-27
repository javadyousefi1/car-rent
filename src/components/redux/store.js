import { applyMiddleware, createStore } from "redux";
import authReducer from "./auth/authReducer";
import logger from "redux-logger";

const store = createStore(authReducer, applyMiddleware(logger));
export default store;
