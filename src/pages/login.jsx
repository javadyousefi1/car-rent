import { NavLink, useNavigate } from "react-router-dom";
import Styles from "../style/background.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../components/authInput";
import { useEffect, useState } from "react";
import { isLogin } from "../utils/isLoggedIn";
import { useDispatch } from "react-redux";
import { authUser } from "../utils/auth";
import AuthButton from "../components/authButton";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userLoggedIn = isLogin();
    if (userLoggedIn) {
      navigate("/");
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email format in invalid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (value) => {
    const data = {
      ...value,
    };

    authUser(
      data,
      "https://car-rent.javadyousefi.com/login.php",
      dispatch,
      navigate,
      "You have login successfully",
      setLoading
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="container max-w-5xl mx-auto md:mt-[140px] mt-28 flex justify-center px-4">
        <div className="flex justify-between max-w-3xl overflow-hidden bg-white rounded-lg shadow-md">
          <div className="p-8 md:px-12 md:py-8">
            <h3 className="mb-3 text-4xl font-bold text-mainDarkBlue">Login</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mt-10">
                <AuthInput formik={formik} name={"email"} />
                <AuthInput formik={formik} name={"password"} />

                <AuthButton formik={formik} loading={loading} />

                <NavLink to="/register">
                  <p className="mt-5 text-xs text-center underline text-mainBlack">
                    Don't you have an account? register
                  </p>
                </NavLink>
              </div>
            </form>
          </div>
          <div className="w-[400px] hidden md:block">
            <div className={Styles.registerCar}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
