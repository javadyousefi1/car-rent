import toast from "react-hot-toast";
import { registerUser } from "../components/redux/auth/authActions";
import { http } from "../services/httpRequest";

export const authUser = async (
  data,
  url,
  dispatch,
  navigate,
  toastText,
  setLoading
) => {
  setLoading(true);

  await http
    .post(url, {
      data,
    })
    .then((res) => {
      setLoading(false);
      dispatch(registerUser(res.data.userData));
      toast.success(toastText, { duration: 3500 });
      navigate("/");
    })
    .catch((err) => {
      setLoading(false);
      console.log("error***", err);
      toast.error(err.response.data?.message);
    });
};
