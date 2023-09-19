import Styles from "../style/background.module.css";
const HomePage = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto mt-[100px]">
        <div className="flex gap-x-12">
          <div className="w-[50%] bg-[#54A6FF] rounded-lg h-[290px]">
            <div className={Styles.divBackgroundCarTwo}>
              <div className="flex flex-col gap-y-4 w-[180px] relative top-4 left-4">
                <h1 className="text-xl font-bold text-white">
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
          <div className="w-[50%] bg-[#3563E9] rounded-lg h-[290px] ">
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
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HomePage;
