import React from "react";
import { Frame1, Frame2 } from "../iconComponent/Slide";

import { Link } from "react-router-dom";
function TeamMembers() {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A]  text-black-600 body-font flex justify-center items-center  relative z-0  overflow-hidden ">
      <div className="w-full absolute flex justify-end items-end">
        <div className="xl:block lg:block md:block hidden xl:w-[550px]  xl:h-[500px]  lg:w-[400px] lg:h-[380px]  md:w-[350px] md:h-[390px]  w-[280px] h-[250px] relative xl:-top-[550px] lg:-top-[920px] md:-top-[920px] -top-[850px] ">
          <Frame1 />
        </div>
      </div>
      <div className="w-full absolute flex justify-start xl:block lg:block md:block hidden">
        <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[270px] md:h-[420px] w-[220px] h-[400px] relative xl:-top-[280px] lg:-top-[620px] md:-top-[620px] -top-[600px]  bg-gradient-to-t  ">
          <Frame2 />
        </div>
      </div>
      <div className="container w-full  px-6 py-12 mx-auto relative z-20">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          <div className="flex flex-wrap lg:w-7/12 md:w-7/12 w-full mb-8 flex-col lg:items-start ">
            <h1 className=" text-base leading-[24px] font-medium mb-2 text-[#959CB1]">
              Home{" > "}
              <span className="text-base leading-[24px] font-medium mb-2 text-black dark:text-white">
                {" "}
                Team Members page
              </span>
            </h1>
            <h1 className=" xl:text-[45px] text-4xl leading-[56px] font-bold lg:text-start md:text-start text-center  mb-2 text-[#4B4B4B] dark:text-white">
              Team Members
            </h1>
            <h2 className=" text-lg font-bold leading-[29px] lg:text-start md:text-start text-center mb-2 text-[#4B4B4B] dark:text-[#959CB1] ">
              Partial Clients
            </h2>
            <p className=" xl:w-[550px] md:w-[400px] w-full lg:text-start md:text-start text-center text-lg font-normal leading-[29px]  text-[#515151] dark:text-[#959CB1] ">
              Join our dynamic team and make a positive impact. Check out our
              current job openings for growth opportunities.
            </p>
          </div>

          <div className="flex justify-center items-center lg:mt-8 md:mt-16 mt-0 ">
            <div className="mb-3 xl:w-[434px]  h-[80px] p-4  flex  items-center bg-white dark:bg-[#003036] rounded-lg">
              <div className="relative  flex flex justify-center w-full flex-wrap items-stretch  gap-6 ">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] h-[50px] min-w-0 flex-auto rounded-lg  bg-[#ECECEC] dark:bg-[#01434B] border-neutral-300 dark:border-none bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  className="relative z-[2] flex items-center rounded-lg bg-primary bg-[#078CA0] px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center justify-items-center xl:p-0 md:p-0 p-6   grid xl:grid-cols-3 md:grid-cols-2 sm:grid-col-1 xl-gap-x-12 lg:gap-x-4 lg:gap-y-7 md:gap-x-12 sm:gap-y-8 relative z-20 ">
          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white    bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className=" w-32 h-32  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./member-1.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px] text-black dark:text-white rounded-lg  text-center ">
                Amtrak
              </h2>
              <h3 className="  text-sm font-normal leading-[16px] text-[#444444] dark:text-[#959CB1] rounded-lg mb-6 text-center">
                Site Engineer
              </h3>
              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-2.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px] text-black dark:text-white rounded-lg text-center ">
                Bridgestone
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg fnt mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-3.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-xl font-semibold leading-[20px] text-black dark:text-white rounded-lg   text-center ">
                Lucent Mark
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>
              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Warehouse Developer
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-4.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-xl font-semibold leading-[20px]  text-black dark:text-white rounded-lg   text-center ">
                Warehouse Developer
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-5.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-xl font-semibold leading-[20px] text-black  dark:text-white rounded-lg  text-center ">
                Bridgestone
              </h2>
              <h3 className="  text-sm font-normal leading-[16px] text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-6.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px]  text-black dark:text-white  rounded-lg   text-center ">
                Lucent Mark
              </h2>
              <h3 className="  text-sm font-normal leading-[16px] text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-7.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px]  text-black dark:text-white  rounded-lg   text-center ">
                Amtrak
              </h2>
              <h3 className="  text-sm font-normal leading-[16px] text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-8.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px]  text-black dark:text-white rounded-lg  text-center ">
                Bridgestone
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-9.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="text-xl font-semibold leading-[20px]  text-black dark:text-white  rounded-lg  text-center ">
                Lucent Mark
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-10.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-xl font-semibold leading-[20px] text-black dark:text-white rounded-lg  text-center ">
                Amtrak
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-11.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px]  text-black dark:text-white  rounded-lg text-center ">
                Bridgestone
              </h2>
              <h3 className=" text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg mb-6 text-center">
                Analytics Engineer
              </h3>
              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  leading-[24px]">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  leading-[24px]">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="w-32 h-32  ">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover  object-center block"
                  src="./member-12.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-xl font-semibold leading-[20px]  text-black dark:text-white rounded-lg  text-center ">
                Lucent Mark
              </h2>
              <h3 className="  text-sm font-normal leading-[16px]  text-[#444444] dark:text-[#959CB1] rounded-lg  mb-6 text-center">
                Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
                <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px]  ">
                  Team Member Of :
                </p>
                <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal leading-[24px] ">
                  Data Governance Team
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center   bg-[#F5F5F5] dark:bg-[#07343A] px-4 py-3 sm:px-6 mt-6 ">
          <div className="flex flex-1 justify-center sm:hidden">
            <Link
              to="/"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
            <Link
              to="/"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-1 items-center justify-center">
            <div className="">
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-[#ABB3B6] dark:bg-[#959CB126]"
                aria-label="Pagination"
              >
                <Link
                  to="/"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#343434"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  to="/"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white dark:text-[#959CB1]  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </Link>
                <Link
                  to="/"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#343434]  dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </Link>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <Link
                  to="/"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#343434"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
