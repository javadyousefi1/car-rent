import { AUTH_USER } from "./authType";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER: {
      const userData = action.payload;
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    }
    default:
      return state;
  }
};

export default authReducer;
