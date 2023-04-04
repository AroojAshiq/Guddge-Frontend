import React from "react";
import { Link } from "react-router-dom";

import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = ({ darkMode, setDarkMode, toggleDarkMode }) => {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);
  console.log(flyerTwo);
  return (
    <>
      <div
        className={`  sticky top-0  z-50 ${
          darkMode ? "bg-[#595959]" : "bg-[#0E292D]"
        }  `}
      >
        <div className="max-w-7xl mx-auto px-5   ">
          <div className="flex   justify-between items-center  py-4 md:justify-start  gap-4">
            <div className="flex justify-start lg:w-1/2  lg:flex-1  ">
              <Link to="/">
                <img className="h-8 w-auto sm:h-10" src="./logo.svg" alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex gap-7   lg:w-3/4 md:w-[680px]  lg:flex justify-end   ">
              <Link
                to="/"
                className="text-base font-medium dark:text-white  text-white "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                to="/client"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                Client
              </Link>
              <div className="relative">
                <button
                  type="button"
                  className="
                   group  rounded-md text-white inline-flex items-center text-base font-medium hover:text-gray-900  pb-8'
                  "
                  onClick={() => {
                    setFlyer(!flyer);
                    setFlyerTwo(false);
                  }}
                >
                  <span>Showcase</span>

                  <svg
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-60 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-5 sm:gap-8 sm:p-8">
                      <Link
                        to="/portfolio"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4 ">
                          <h1>Portfolio</h1>
                        </div>
                      </Link>
                      <Link
                        to="/article"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/cursor-click */}

                        <div className="ml-4">
                          <h1>Articles</h1>
                        </div>
                      </Link>

                      <Link
                        to="/team-members"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/cursor-click */}

                        <div className="ml-4">
                          <h1>Team Members</h1>
                        </div>
                      </Link>

                      <Link
                        to="/career"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/cursor-click */}

                        <div className="ml-4">
                          <h1>Career</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                to="/timesheet"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                TimeSheet
              </Link>

              <div className="  w-6 h-6 flex items-center  text-black justify-center ">
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  size={20}
                  className={`text-white dark:text-white`}
                />
                {/* <button onClick={() => setDarkMode(!darkMode)}>darkMode</button> */}
              </div>
            </nav>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-[#078CA0] divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 ">
              <div className="flex items-center justify-between ">
                <div>
                  <img className="h-8 w-auto" src="./logo.svg" alt="Workflow" />
                </div>
                <div className="-mr-2 ">
                  <button
                    type="button"
                    className="bg-white dark:bg-[#003036] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  "
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-gray-200 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">
                      About
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6  dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Services
                    </span>
                  </Link>
                  <Link
                    to="/client"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-people  dark:text-gray-200"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Clients
                    </span>
                  </Link>

                  <div className="relative">
                    <button
                      type="button"
                      className="
              group  rounded-md text-black inline-flex items-center text-base font-medium hover:text-gray-900   pb-8'
             "
                      onClick={() => {
                        setFlyer(!flyer);
                        setFlyerTwo(false);
                      }}
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6  dark:text-gray-200 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <span className="ml-3  dark:text-gray-200">Showcase</span>

                      <svg
                        className={
                          flyer === true
                            ? "transform rotate-180 ml-2 h-5 w-5 text-gray-200 stroke-black dark:stroke-gray-200   group-hover:text-gray-500 transition ease-out duration-200 "
                            : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5  stroke-black dark:stroke-gray-200 text-gray-200 group-hover:text-gray-500 "
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      onMouseLeave={() => setFlyer(false)}
                      className={
                        flyer
                          ? "  opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-80 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 "
                          : " opacity-0 translate-y-1 absolute z-0 -ml-4 mt-3 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
                      }
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-[#04505B]">
                        <div className="relative grid gap-4 bg-white px-5 py-6 dark:bg-[#04505B] ">
                          <Link
                            to="/portfolio"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#078CA0]"
                          >
                            <div className="ml-4  dark:text-gray-200 ">
                              <h1>Portfolio</h1>
                            </div>
                          </Link>
                          <Link
                            to="/article"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#078CA0]"
                          >
                            <div className="ml-4  dark:text-gray-200">
                              <h1>Articles</h1>
                            </div>
                          </Link>
                          <Link
                            to="/team-members"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#078CA0]"
                          >
                            <div className="ml-4  dark:text-gray-200">
                              <h1>Team Members</h1>
                            </div>
                          </Link>
                          <Link
                            to="/career"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#078CA0]"
                          >
                            <div className="ml-4  dark:text-gray-200">
                              <h1>Career</h1>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Contact
                    </span>
                  </Link>

                  <Link
                    to="/timesheet"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      TimeSheet
                    </span>
                  </Link>
                  <div className="py-6 px-5 space-y-6">
                    <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 dark:bg-[#003A42] hover:bg-indigo-700">
                      {/* <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                size={20}
                className={`text-white dark:text-white`}
              /> */}
                      <button onClick={() => toggleDarkMode()}>DarkMode</button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
