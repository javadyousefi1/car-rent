import { NavLink } from "react-router-dom";
import Styles from "../style/background.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../components/authInput";

const Register = () => {
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
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (value) => {
    console.log(formik.values);
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

                <button
                  disabled={!formik.isValid}
                  type="submit"
                  className={
                    formik.isValid
                      ? "hover:shadow-xl mt-3 bg-mainDarkBlue outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] text-white font-semibold transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                      : "hover:shadow-xl mt-3 bg-gray-400 cursor-not-allowed outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] text-white font-semibold transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                  }
                >
                  CONFIRM
                </button>
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
