import CarCart from "../components/carCart";
import { CheckBox } from "./cars";

const CarDetail = () => {
    return (
        <div className="container max-w-6xl mx-auto md:mt-[100px] mt-24 px-2">
          {/* filter mobile */}
          <div className="flex items-center justify-between px-4 mb-8 gap-x-4 md:hidden">
            <input
              name="name"
              type="email"
              placeholder="Search"
              className=" bg-[#ededed] text-sm  outline-none p-2 w-full rounded-lg border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            />
            <div
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="p-[8px] border-2 bg-[#ededed] rounded-lg"
            >
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
            </div>
          </div>
          {/* filter mobile toggle */}
    
          <div className="md:hidden">
            <div
              onClick={() => setIsOpen(false)}
              className={
                isOpen
                  ? "fixed top-0 left-0 right-0 z-10 w-full h-full bg-black bg-opacity-60 transition-all ease-linear duration-300"
                  : " w-full h-full bg-black bg-opacity-0 transition-all ease-linear duration-300"
              }
            ></div>
    
            <div
              className={
                isOpen
                  ? "fixed bottom-0 left-0 right-0 z-10 w-full h-[50%] rounded-tr-[40px] rounded-tl-[40px] bg-white px-8  transition-all ease-linear duration-300 "
                  : "fixed bottom-[-800px] left-0 right-0 z-10 w-full h-[50%] rounded-tr-[40px] rounded-tl-[40px] bg-white px-8  transition-all ease-linear duration-300"
              }
            >
              <div className="flex flex-col justify-center w-full h-full">
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
              <div className="sticky w-full px-6 py-4 bg-white top-20 rounded-3xl">
                {/* search */}
                <div>
                  <span className="text-xs text-gray-500 ">Search</span>
                  <input
                    name="name"
                    type="email"
                    className=" bg-[#ededed] mt-2 outline-none p-1 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                  />
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
                    max={400}
                    className=" bg-[#ededed] mt-2 w-full outline-none]  rounded-2xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
                  />
                  <p className="text-xs font-bold text-mainBlack">Max. $100.00</p>
                  <button className="w-full py-1 mt-3 font-bold text-white transition-all duration-150 ease-linear border rounded-md bg-mainDarkBlue hover:text-mainDarkBlue hover:bg-mainGray">
                    Confirm
                  </button>
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
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
                <div className="flex justify-center w-full md:block">
                  <CarCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
 
export default CarDetail;