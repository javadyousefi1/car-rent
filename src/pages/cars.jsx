import { useState } from "react";
import CarCart from "../components/carCart";
import CarCartSkeleton from "../components/carCartSkeleton";

const Cars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSort, setIsSort] = useState(false);

  const checkBoxList = [
    { id: 1, text: "sport" },
    { id: 2, text: "suv" },
    { id: 3, text: "hatchback" },
    { id: 4, text: "sedan" },
    { id: 5, text: "mpv" },
  ];

  return (
    <div className="container max-w-6xl mx-auto md:mt-[100px] mt-24 px-2">
      {/* filter mobile */}
      <div className="flex items-center justify-between px-4 mb-8 gap-x-4 md:hidden">
        {/* filter btn */}
        <div
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="w-full px-3 py-2 bg-white border rounded-3xl "
        >
          <div className="flex items-center justify-center gap-x-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#3563E9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-mainBlack">filter</span>
          </div>
        </div>
        {/* sort */}
        <div className="w-full px-3 py-2 bg-white border rounded-3xl">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-mainDarkBlue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>
            </span>

            <span className="font-bold text-mainBlack">sort</span>
          </div>
        </div>
      </div>

      {/* filter mobile toggle detail */}
      <div className="md:hidden">
        <div
          onClick={() => setIsOpen(false)}
          className={
            isOpen
              ? "fixed top-0 left-0 right-0 z-10 w-full h-full bg-black bg-opacity-70 transition-all ease-linear duration-300"
              : " w-full h-full bg-black bg-opacity-0 transition-all ease-linear duration-300"
          }
        ></div>

        <div
          className={
            isOpen
              ? "fixed bottom-0 left-0 right-0 z-10 w-full h-[60%] rounded-tr-[40px] rounded-tl-[40px] bg-white px-8  transition-all ease-linear duration-300 "
              : "fixed bottom-[-800px] left-0 right-0 z-10 w-full h-[60%] rounded-tr-[40px] rounded-tl-[40px] bg-white px-8  transition-all ease-linear duration-300"
          }
        >
          <div className="flex flex-col justify-center w-full h-full">
            {/* title */}
            <div className="flex items-center justify-center gap-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 6.5H16"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6.5H2"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 17.5H18"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 17.5H2"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                  stroke="#3563E9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-bold text-mainBlack">filter</span>
            </div>
            {/* Type */}
            <div className="my-5 ml-1">
              <span className="block mb-4 text-xs text-gray-500">Type</span>

              {checkBoxList.map((item) => (
                <CheckBox key={item.id} text={item.text} htmlFOR={item.text} />
              ))}
            </div>
            {/* range */}
            <div>
              <span className="block text-xs text-gray-500">Price</span>
              <input
                name="name"
                type="range"
                min={1}
                max={100}
                className=" bg-[#ededed] mt-2 w-full outline-none]  rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
              />
              <p className="text-xs font-bold text-mainBlack">Max. $100.00</p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-1 mt-3 font-bold text-white transition-all duration-150 ease-linear border rounded-md bg-mainDarkBlue hover:text-mainDarkBlue hover:bg-mainGray"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-12 grid-rows-1 gap-x-6">
        {/* filter */}
        <div className="hidden lg:col-span-3 md:col-span-3 md:block">
          <div className="sticky w-full px-6 py-4 transition-all duration-150 ease-linear bg-white top-20 rounded-3xl hover:bg-opacity-60">
            {/* filter toggle */}
            <div
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex flex-row-reverse items-center justify-end gap-x-2">
                <div className="font-bold">Filter</div>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6.5H16"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6.5H2"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 17.5H18"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 17.5H2"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                      stroke="#3563E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <span
                className={
                  isOpen
                    ? "text-mainDarkBlue rotate-0 transition-all duration-150 ease-linear"
                    : "text-mainDarkBlue rotate-180 transition-all duration-150 ease-linear"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </div>

            {/* filter items */}
            <div
              className={
                isOpen
                  ? "max-h-[100vh] opacity-100 transition-all duration-150 ease-linear"
                  : "max-h-[0vh] opacity-0 transition-all duration-150 ease-linear "
              }
            >
              <div className={isOpen ? "block" : "hidden"}>
                {/* Type */}
                <div className="pt-4 mb-5 ml-1">
                  <span className="block mb-4 text-xs text-gray-500">Type</span>

                  {checkBoxList.map((item) => (
                    <CheckBox
                      key={item.id}
                      text={item.text}
                      htmlFOR={item.text.toUpperCase()}
                    />
                  ))}
                </div>
                {/* range */}
                <div>
                  <span className="block text-xs text-gray-500">Price</span>
                  <input
                    name="name"
                    type="range"
                    min={1}
                    max={400}
                    className=" bg-[#ededed] mt-2 w-full outline-none]  rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                  />
                  <p className="text-xs font-bold text-mainBlack">
                    Max. $100.00
                  </p>
                  <button className="w-full py-1 mt-3 font-bold text-white transition-all duration-150 ease-linear border rounded-md bg-mainDarkBlue hover:text-mainDarkBlue hover:bg-mainGray">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* sort */}
          <div className="sticky w-full px-6 py-4 mt-5 transition-all duration-150 ease-linear bg-white top-20 rounded-3xl hover:bg-opacity-60">
            {/* sort toggle */}
            <div
              onClick={() => setIsSort((prevState) => !prevState)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex flex-row-reverse items-center justify-end gap-x-2">
                <div className="font-bold">sort</div>
                <span className="text-mainDarkBlue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                    ></path>
                  </svg>
                </span>
              </div>
              <span
                className={
                  isSort
                    ? "text-mainDarkBlue rotate-0 transition-all duration-150 ease-linear"
                    : "text-mainDarkBlue rotate-180 transition-all duration-150 ease-linear"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </div>

            {/* sort items */}
            <div
              className={
                isSort
                  ? "max-h-[100vh] opacity-100 transition-all duration-150 ease-linear"
                  : "max-h-[0vh] opacity-0 transition-all duration-150 ease-linear "
              }
            >
              <div className={isSort ? "block" : "hidden"}>not thing ...</div>
            </div>
          </div>
        </div>

        {/* cars */}
        <div className="col-span-12 lg:col-span-9 md:col-span-9">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
            <div className="flex justify-center w-full md:block">
              <CarCart />
            </div>
            <div className="flex justify-center w-full md:block">
              <CarCartSkeleton />
            </div>
            <div className="flex justify-center w-full md:block">
              <CarCart />
            </div>

            <div className="flex justify-center w-full md:block">
              <CarCartSkeleton />
            </div>
            <div className="flex justify-center w-full md:block">
              <CarCart />
            </div>
            <div className="flex justify-center w-full md:block">
              <CarCartSkeleton />
            </div>

            <div className="flex justify-center w-full md:block">
              <CarCart />
            </div>
            <div className="flex justify-center w-full md:block">
              <CarCartSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;

export const CheckBox = ({ htmlFOR, text }) => {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        className="rounded-md cursor-pointer form-checkbox h-[13px] w-[13px]"
        id={htmlFOR}
      />
      <label htmlFor={htmlFOR}>
        <p className="ml-2 text-[11px] font-semibold text-mainGray cursor-pointer">
          {text.toUpperCase()}
        </p>
      </label>
    </div>
  );
};
