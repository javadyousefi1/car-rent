import Styles from "../style/background.module.css";
import CarCart from "../components/carCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {

  return (
    <>
      <div className="container max-w-5xl mx-auto md:mt-[100px] mt-20">
        {/* banner */}
        <div className="flex flex-col px-4 md:px-2 gap-x-12 md:flex-row">
          <div className="md:w-[50%] w-full bg-[#54A6FF] rounded-lg  h-[250px] md:h-[290px] hover:opacity-90 hover:shadow-sm transition-all ease-linear duration-150 cursor-pointer">
            <div className={Styles.divBackgroundCarTwo}>
              <div className="flex flex-col md:gap-y-4 w-[180px] relative md:top-4 md:left-4 top-3 left-3 gap-y-2">
                <h1 className="font-bold text-white text-md md:text-xl">
                  The Best Platform for Car Rental
                </h1>
                <p className="text-xs text-white">
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <button className="px-4 py-3 text-xs text-white rounded-md bg-mainDarkBlue w-[100px]">
                  Rental Car
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] md:block hidden bg-[#3563E9] rounded-lg h-[290px]  hover:opacity-90 hover:shadow-sm transition-all ease-linear duration-150 cursor-pointer">
            <div className={Styles.divBackgroundCarOne}>
              <div className="flex flex-col gap-y-4 w-[180px] relative top-4 left-4">
                <h1 className="text-xl font-bold text-white">
                  Easy way to rent a car at a low price
                </h1>
                <p className="text-xs text-white">
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                <button className="px-4 py-3 text-xs text-white rounded-md bg-[#54A6FF] w-[100px]">
                  Rental Car
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* car filter */}
        <div className="grid grid-cols-1 grid-rows-3 px-4 mt-10 md:grid-rows-1 md:grid-cols-7 lg:px-0 ">
          <div className="md:col-span-3 flex flex-col px-4 md:px-6 py-4 bg-white rounded-lg cursor-pointer gap-y-2  transition-all ease-linear duration-150 hover:shadow-[0_0_60px_-5px_rgba(84,166,255,0.3)]">
            <div className="flex gap-x-2">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="16"
                    height="16"
                    rx="8"
                    fill="#3563E9"
                    fillOpacity="0.3"
                  />
                  <circle cx="8" cy="8" r="4" fill="#3563E9" />
                </svg>
              </span>
              <span className="text-sm font-bold">Pick-up</span>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Locations
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your City
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Date
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your Date
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Time
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your Time
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:col-span-1">
            <div className="w-[50px] h-[50px] bg-mainDarkBlue rounded-xl flex justify-center items-center shadow-[0px_0px_40px_10px_rgba(84,166,255,0.4)] cursor-pointer">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.16051 0.835774L5.16051 14.4536"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.08273 4.93188L5.1605 0.835218L9.23828 4.93188"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0887 17.1671L15.0887 3.54934"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1665 13.071L15.0887 17.1677L11.0109 13.071"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col px-4 md:px-6 py-4 bg-white rounded-lg cursor-pointer gap-y-2  transition-all ease-linear duration-150 hover:shadow-[0_0_60px_-5px_rgba(84,166,255,0.3)]">
            <div className="flex gap-x-2">
              <span className="opacity-70">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="16"
                    height="16"
                    rx="8"
                    fill="#3563E9"
                    fillOpacity="0.3"
                  />
                  <circle cx="8" cy="8" r="4" fill="#3563E9" />
                </svg>
              </span>
              <span className="text-sm font-bold">Drop-up</span>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Locations
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your City
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Date
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your Date
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="font-bold md:text-lg text-mainBlack">
                  Time
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[7px] text-gray-400 transition-none ease-linear duration-0 hover:text-mainDarkBlue">
                    Your Time
                  </span>
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                        fill="#1A202C"
                        stroke="#1A202C"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* car List */}

        <div className="relative px-4 mt-10 lg:px-0">
          <span className="ml-2 text-xs text-gray-400">Popular Car</span>
          <div className="flex pb-3 mt-5 overflow-x-scroll gap-x-4">
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <div className={`md:block hidden ${Styles.CarShadowSlider}`}></div>
          </div>
        </div>

        {/* second car list */}

        <div className="relative px-4 mt-14 lg:px-0">
          <span className="ml-2 text-xs text-gray-400">Recomendation Car</span>
          <div className="flex pb-3 mt-5 overflow-x-scroll gap-x-4">
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <CarCart />
            <div className={`md:block hidden ${Styles.CarShadowSlider}`}></div>
          </div>
        </div>

        {/* show more btn */}
        <NavLink to="cars">
          <div className="flex justify-center mt-16">
            <button className="px-3 py-2 font-bold text-white transition-all duration-150 ease-linear border rounded-md bg-mainDarkBlue hover:text-mainDarkBlue hover:bg-mainGray">
              Show More
            </button>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default HomePage;
