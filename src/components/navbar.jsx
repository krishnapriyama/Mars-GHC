import { useState } from "react";

//assets
import global from "../assets/global.png";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl xs:items-center xs:flex xs:px-8">
          <div>
            <div className=" items-center justify-between py-3 xs:py-5 flex xs:block">
              <div className="xs:block hidden">
                <img src={global} alt="" className="w-10 h-10 " />
              </div>
              <div className="xs:hidden block">
                <img src={logo} alt="" />
              </div>

              <div className="xs:hidden">
                <button
                  className="p-2 text-gray-700 rounded-xs outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 xs:block xs:pb-0 xs:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="xs:block hidden">
                <img src={logo} alt="logo" />
              </div>

              <div className="xs:hidden flex">
                <div className="relative">
                  <img src={cart} alt="" className="w-9 h-9" />
                  <div className="absolute top-0 left-0 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                </div>
                <h1 className="justify-center items-center flex font-bold ml-2">
                  Cart
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 xs:inline-block">
            <div className="relative">
              <img src={cart} alt="Cart" className="w-9 h-9" />
              <div className="absolute top-0 left-0 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
