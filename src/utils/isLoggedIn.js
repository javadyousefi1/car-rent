export function isLogin() {
  const getLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
  if (getLocalStorage.token) {
    return true;
  }
  return false;
}
