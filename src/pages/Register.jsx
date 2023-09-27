import { NavLink, useNavigate } from "react-router-dom";
import Styles from "../style/background.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../components/authInput";
import { useDispatch } from "react-redux";
import { isLogin } from "../utils/isLoggedIn";
import { useEffect, useState } from "react";
import { authUser } from "../utils/auth";
import AuthButton from "../components/authButton";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = isLogin();
    if (userLoggedIn) {
      navigate("/");
    }
  }, []);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "at least have 6 charchter"),
    email: Yup.string()
      .email("Email format in invalid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const onSubmit = (value) => {
    const data = {
      id: Math.floor(Math.random() * 1000000000 + 1),
      ...value,
      joinDate: new Date().toISOString(),
    };

    authUser(
      data,
      "https://car-rent.javadyousefi.com/register.php",
      dispatch,
      navigate,
      "You have registered successfully",
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
            <h3 className="mb-3 text-4xl font-bold text-mainDarkBlue">
              Register
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mt-10">
                <AuthInput formik={formik} name={"name"} />
                <AuthInput formik={formik} name={"email"} />
                <AuthInput formik={formik} name={"password"} />

                <div className="mt-4">
                  <AuthButton formik={formik} loading={loading} />
                </div>

                <NavLink to="/login">
                  <p className="mt-5 text-xs text-center underline text-mainBlack">
                    Already Have Account ? login
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

export default Register;
