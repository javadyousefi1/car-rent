import { NavLink } from "react-router-dom";
import Styles from "../style/background.module.css";

const Login = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto md:mt-[140px] mt-28 flex justify-center px-4">
        <div className="flex justify-between max-w-3xl overflow-hidden bg-white rounded-lg shadow-md">
          <div className="p-8 md:px-12 md:py-8">
            <h3 className="mb-3 text-4xl font-bold text-mainDarkBlue">Login</h3>
            <form>
              <div className="flex flex-col mt-10">
                <span className="mb-2 ml-2 text-xs text-mainDarkBlue">
                  Enter Your Email :
                </span>
                <input
                  name="name"
                  type="email"
                  className="focus:shadow-2xl bg-[#ededed] mb-4 outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                />

                <span className="mb-2 ml-2 text-xs text-mainDarkBlue">
                  Enter Your Password :
                </span>
                <input
                  name="name"
                  type="password"
                  className="focus:shadow-2xl bg-[#ededed] mb-4 outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                />
                <button
                  type="submit"
                  className={
                    "hover:shadow-xl mt-3 bg-mainDarkBlue outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] text-white font-semibold transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                  }
                >
                  CONFIRM
                </button>
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
