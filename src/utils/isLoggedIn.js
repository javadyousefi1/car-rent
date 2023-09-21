export function isLogin() {
  const getLocalStorage = JSON.parse(localStorage.getItem("user"));
  if (getLocalStorage) {
    return true;
  }
  return false;
}
