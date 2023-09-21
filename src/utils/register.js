import toast from "react-hot-toast";
import { registerUser } from "../components/redux/auth/authActions";
import { http } from "../services/httpRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const registerHandler = async (data, url, dispatch, navigate) => {
  try {
    const response = await http.post(url, {
      data,
    });

    console.log(response);

    dispatch(registerUser(response.data.userData));
    toast.success("You have registered successfully", { duration: 3500 });
    // navigate("/");
  } catch (error) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
    console.log(error)
  }
};
