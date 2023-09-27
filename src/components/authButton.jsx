import { CircularProgress } from "@mui/material";

const AuthButton = ({ formik, loading }) => {
  return (
    <button
      disabled={!formik.isValid}
      type="submit"
      className={
        formik.isValid
          ? "hover:shadow-xl mt-3 bg-mainDarkBlue outline-none h-[40px] w-[220px] rounded-2xl border border-[#ededed] text-white font-semibold transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue flex justify-center items-center"
          : "hover:shadow-xl mt-3 bg-gray-400  cursor-not-allowed outline-none h-[40px] w-[220px] rounded-2xl border border-[#ededed] text-white font-semibold transition-all ease-linear duration-100  focus:border-mainDarkBlue"
      }
    >
      {loading ? (
        <CircularProgress size={"20px"} sx={{ color: "#ffffff" }} />
      ) : (
        "CONFIRM"
      )}
    </button>
  );
};

export default AuthButton;
