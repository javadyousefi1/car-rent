import { REGISTER_USER } from "./authType";

export function registerUser(payload) {
  return {
    type: REGISTER_USER,
    payload,
  };
}
