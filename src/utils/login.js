import toast from "react-hot-toast";
import { registerUser } from "../components/redux/auth/authActions";
import { http } from "../services/httpRequest";

export const loginHandler = async (data, url, dispatch, navigate) => {
  try {
    const response = await http.post(url, {
      data,
    });

    dispatch(registerUser(response.data.userData));

    toast.success("You have login successfully", { duration: 3500 });

    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
