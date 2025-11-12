import { toast } from "react-toastify";
import { STORE_KEYS } from "../configs/store.config";
import { getLocalStorageItem } from "../utils/local-storage/localStorage";
import { ADMIN } from './../routes/paths.routes';




const logout = () => {

  // clear admin details saved on localStorage

  // redirect to ADMIN login screen
  window.location.href = ADMIN;
  toast.success("Logged out successful");

};

const getCurrentUser = () => {
  return (getLocalStorageItem(STORE_KEYS.USER));
};

const isAuthenticated = () => {
  return (getLocalStorageItem(STORE_KEYS.IS_AUTHENTICATED) && (getLocalStorageItem(STORE_KEYS.USER)));
};

const currentUser = () => {
  return (getLocalStorageItem(STORE_KEYS.USER));
};


const isSuperAdmin = () => {

  if (currentUser() && getLocalStorageItem(STORE_KEYS.ROLE) === "super_admin") {
    return true;
  } else {
    return false;
  }
};

const authService = {
  logout,
  getCurrentUser,
  isAuthenticated,
  isSuperAdmin
};

export default authService;