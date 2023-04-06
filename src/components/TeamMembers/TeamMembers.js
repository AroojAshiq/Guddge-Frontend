

import React from "react";

import { Link } from "react-router-dom";
function TeamMembers() {

  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A]  text-black-600 body-font relative z-0  overflow-hidden ">
       <div className="xl:w-[550px]  xl:h-[500px]  lg:w-[380px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[280px] h-[250px] absolute   xl:left-[898px] lg:left-[643px]  md:left-[438px] left-[130px] z-10  ">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block"
          src="./Frame 915.svg"
        />
      </div>

      <div className=" xl:w-[400px] xl:h-[700px]  lg:w-[240px] lg:h-[440px] md:w-[240px] md:h-[420px] w-[220px] h-[400px] xl:top-[200px] lg:top-[160px] md:top-[180px] top-[270px] absolute  z-10  bg-gradient-to-t  ">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./Frame 916.svg"
        />
      </div>
      <div className="container w-full  px-6 py-12 mx-auto relative z-20">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          <div className="flex flex-wrap lg:w-7/12 md:w-7/12 w-full mb-8 flex-col lg:items-start ">
            <h1 className=" text-sm  font-bold title-font mb-2 text-[#959CB1]">
              Home{" > "}
              <span className="text-sm  font-bold title-font mb-2 text-black dark:text-white">
                {" "}
                Team Members page
              </span>
            </h1>
            <h1 className="sm:text-3xl text-2xl lg:text-start md:text-start text-center  font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
             Team Members
            </h1>
            <h2 className=" text-lg lg:text-start md:text-start text-center  font-bold title-font mb-2 text-[#4B4B4B] dark:text-[#959CB1] ">
              Partial Clients
            </h2>
            <p className=" lg:w-3/4 md:w-4/5 lg:text-start md:text-start text-center leading-relaxed text-[#515151] dark:text-[#959CB1] ">
              Join our dynamic team and make a positive impact. Check out our
              current job openings for growth opportunities.
            </p>
          </div>

          <div className="flex justify-center items-center lg:mt-8 md:mt-8 ">
            <div className="mb-3 xl:w-96  h-16 p-4  flex  items-center bg-white dark:bg-[#003036] rounded-lg">
              <div className="relative flex justify-center w-full flex-wrap items-stretch  gap-6 ">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-lg  bg-[#ECECEC] dark:bg-[#01434B] border-neutral-300  bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
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

        <div className=" justify-center justify-items-center xl:p-0 md:p-0 p-6  md:grid sm:block lg:grid xl:grid-cols-3 lg:grid-cols-3 lg:gap-x-8 md:grid-cols-2 md:gap-x-5 sm:grid-col-1 xl-gap-x-12 lg:gap-y-7  sm:gap-y-8 relative z-20 ">
          <div className="xl:w-[400px] xl:h-auto md:w-[330px] md:h-auto w-[330px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
                Amtrak
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Site Engineer
              </h3>
    <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[400px]  md:w-[330px]  sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Bridgestone
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          
          <div className="xl:w-[400px]  md:w-[330px]  sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Lucent Mark
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <p className=" text-black dark:text-white text-base font-normal mb-6 mt-6   ">
              Team Member Of :<span className="ml-3"> Warehouse Developer </span>
              </p>
            </div>
          </div>



          
          <div className="xl:w-[400px]  md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Warehouse Developer
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          
          <div className="xl:w-[400px]  md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black  dark:text-white rounded-lg font-medium title-font  text-center ">
              Bridgestone
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>


          
          <div className="xl:w-[400px] md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font  text-center ">
              Lucent Mark
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>


          
          <div className="xl:w-[400px]  md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B]">
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
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font  text-center ">
              Amtrak
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          
          <div className="xl:w-[400px] md:w-[330px]  sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-auto  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Bridgestone
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>



          
          <div className="xl:w-[400px] md:w-[330px]  sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font  text-center ">
              Lucent Mark
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          
          <div className="xl:w-[400px] md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Amtrak
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Site Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>


          
          <div className="xl:w-[400px] md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font  text-center ">
              Bridgestone
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>
              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
               Data Governance Team
              </p>
              </div>
            </div>
          </div>

          
          <div className="xl:w-[400px] md:w-[330px] sm:w-[390px] sm:h-auto  p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
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
              <h2 className="  text-lg text-black dark:text-white rounded-lg font-medium title-font  text-center ">
              Lucent Mark
              </h2>
              <h3 className="  text-md text-[#444444] dark:text-[#959CB1] rounded-lg font-normal title-font mb-6 text-center">
              Analytics Engineer
              </h3>

              <div className="flex justify-start gap-x-2">
              <p className=" text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
              Team Member Of :
              </p>
              <p className="text-black dark:text-white xl:text-base lg:text-md  md:text-sm text-sm font-normal  ">
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