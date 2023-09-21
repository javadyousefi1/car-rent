import { NavLink } from "react-router-dom";
import { isLogin } from "../utils/isLoggedIn";
import { useSelector } from "react-redux";

const Header = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "cars",
      path: "/cars",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  const state = useSelector((state) => state);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-2 bg-white shadow-sm ">
      <div className="container max-w-6xl px-4 m-3 mx-auto ">
        {/* logo and nav */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-8">
            <NavLink to="/">
              <span className="text-lg font-bold text-mainDarkBlue">
                MORENT
              </span>
            </NavLink>

            <nav className="hidden md:block">
              <ul className="flex ml-10 gap-x-6">
                {routes.map((route, index) => (
                  <NavLink
                    key={index}
                    to={route.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-sm font-semibold text-mainDarkBlue"
                        : "text-sm font-semibold text-gray-400 transition-all duration-150 ease-linear hover:text-mainDarkBlue"
                    }
                  >
                    {/* <li className=""> */}
                    {route.name}
                    {/* </li> */}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-row-reverse items-center gap-x-4 md:gap-x-8">
            <span className="cursor-pointer md:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-all duration-300 ease-linear h-7 w-7 fill-mainDarkBlue "
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <NavLink to={isLogin() ? "/profile" : "/login"}>
              <span className="cursor-pointer ">
                {isLogin() ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.0}
                    stroke="currentColor"
                    className="transition-all duration-300 ease-linear h-7 w-7 hover:stroke-mainDarkBlue stroke-[#596780]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="transition-all duration-300 ease-linear h-6 w-6 hover:fill-mainDarkBlue fill-[#596780]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </NavLink>

            <span className="cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-all duration-300 ease-linear h-6 w-6 hover:fill-mainDarkBlue fill-[#596780]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <NavLink to="/favorite">
              <span className="hidden cursor-pointer md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-all duration-300 ease-linear h-6 w-6 hover:fill-mainDarkBlue fill-[#596780]"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
