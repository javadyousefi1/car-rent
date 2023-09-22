export function isLogin() {
  const getLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
  console.log(getLocalStorage);
  if (getLocalStorage.token) {
    return true;
  }
  return false;
}
