import { AUTH_USER } from "./authType";

export function registerUser(payload) {
  return {
    type: AUTH_USER,
    payload,
  };
}
