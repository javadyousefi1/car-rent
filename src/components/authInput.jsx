const AuthInput = ({ formik, name }) => {
  function capitalizeFLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
 
  return (
    <>
      <div>
        <p className="mb-2 ml-2 text-xs text-mainDarkBlue">
          Enter Your {capitalizeFLetter(name)} :
        </p>
        <input
          {...formik.getFieldProps({ name })}
          name={name}
          type={name}
          className="focus:shadow-2xl bg-[#ededed]  outline-none p-2 w-[220px] rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
        />

        <p className="mb-2 text-[10px] text-red-400 h-[15px] mt-1 ml-2 text-left">
          {formik.touched[name] && formik.errors[name]}
        </p>
      </div>
    </>
  );
};

export default AuthInput;
