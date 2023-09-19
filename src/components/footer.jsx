const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white">
        <div className="container max-w-6xl px-6 mx-auto md:p-4">
          <div className="flex flex-col justify-between gap-x-16 md:flex-row gap-y-6">
            <div className="flex-1">
              <span className="text-2xl font-bold text-mainDarkBlue">
                MORENT
              </span>
              <p className="text-gray-400 text-xs w-[250px] mt-2">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>

            <div className="flex flex-col gap-y-6">
              <span className="font-bold text-mainBlack ">About</span>
              <ul className="flex flex-col gap-y-3">
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  How It Works
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Featured
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Partnership
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Bussiness Relation
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-6">
              <span className="font-bold text-mainBlack ">Community</span>
              <ul className="flex flex-col gap-y-3">
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Events
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Blog
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Podcast
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Invite a friend
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-6">
              <span className="font-bold text-mainBlack ">Socials</span>
              <ul className="flex flex-col gap-y-3">
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Discord
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Instagram
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Twitter
                </li>
                <li className="text-xs text-gray-400 transition-all duration-150 ease-linear cursor-pointer hover:text-mainDarkBlue">
                  Facebook
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          <div className="flex flex-col-reverse items-center md:justify-between gap-x-5 md:flex-row gap-y-4">
            <div className="md:flex-1">
              <p className="text-xs font-bold text-mainBlack">
                ©2022 MORENT. All rights reserved
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p className="text-xs font-bold text-mainBlack">
                Privacy & Policy
              </p>
              <p className="text-xs font-bold text-mainBlack">
                Terms & Condition
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
