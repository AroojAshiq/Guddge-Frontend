import React from "react";

import { useNavigate, Link } from "react-router-dom";
function Article() {
  const navigate = useNavigate();
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A] text-black-600 body-font relative z-0  overflow-hidden ">
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
      <div className="container w-full space-y-12 px-6 py-12 mx-auto relative z-20 ">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col ">
          <div className="flex flex-wrap lg:w-7/12 md:w-7/12 w-full  mb-8 flex-col ">
            <h1 className=" text-base leading-[24px] font-medium mb-2 text-[#959CB1] ">
              Home {" > "}
              <span className="text-base leading-[24px] font-medium mb-2 text-black dark:text-white">
                Articles
              </span>
            </h1>
            <h1 className="xl:text-[45px] text-3xl leading-[56px] font-bold lg:text-start md:text-start text-center font-medium  font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
              Articles
            </h1>
            <p className=" xl:w-[550px] w-full lg:text-start md:text-start text-center  text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1]  mt-2 ">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex justify-center items-center lg:mt-8 md:mt-8 ">
            <div className="mb-3 xl:w-[434px]  h-[80px] p-4  flex  items-center bg-white dark:bg-[#003036] rounded-lg">
              <div className="relative  flex flex justify-center w-full flex-wrap items-stretch  gap-6 ">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] h-[50px] min-w-0 flex-auto rounded-lg  bg-[#ECECEC] dark:bg-[#01434B] border-neutral-300 dark:border-[#04505B] bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
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
        <div className="flex flex-wrap  justify-items-center   grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 xl:gap-16 lg:gap-x-6  lg:gap-y-14 md:gap-x-2 md:gap-y-12 gap-10 relative z-20 ">
          <div className=" xl:w-96 lg:w-[410px]   md:w-[340px] w-80   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B]  ">
            <div className="w-full rounded-lg flex justify-center items-center b ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-1.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white xl:text-2xl lg:text-2xl md:text-xl text-xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base  font-medium leading-[24px] mt-6 ml-6 pr-6  text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white dark:bg-[#04505B] rounded-lg flex  justify-items-center mb-4  ">
              <div className=" xl:w-1/6 lg:w-1/6 md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-1.svg"
                />
              </div>
              <div className=" rounded-lg  flex justify-center items-center ">
                <h1 className=" text-black dark:text-white text-sm font-medium  leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson <br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16   flex justify-end items-center ml-8 lg:mt-2 md:mt-6 mt-5 ">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/article-view");
                  }}
                  className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:w-96 lg:w-[410px]  md:w-[340px] w-80    rounded-lg bg-white-900 text-white  bg-[#FFFFFF]  dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-2.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white xl:text-2xl lg:text-2xl md:text-xl  text-xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white dark:bg-[#04505B] rounded-lg flex justify-items-start mb-4 ">
              <div className="xl:w-1/6 lg:w-1/6  md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-2.svg"
                />
              </div>
              <div className=" rounded-lg   flex items-center  ">
                <h1 className=" text-black dark:text-white  text-sm  font-medium leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson<br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16 flex justify-end ml-8 ml-8 lg:mt-2 md:mt-6 mt-5  items-center ">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/article-view");
                  }}
                  className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:w-96 lg:w-[410px] md:w-[340px] w-80    rounded-lg bg-white-900 text-white  bg-[#FFFFFF]  dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-3.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white dark:text-white xl:text-2xl lg:text-2xl  text-xl md:text-xl  font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white dark:bg-[#04505B] rounded-lg flex justify-items-start mb-4 ">
              <div className="xl:w-1/6 lg:w-1/6  md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4 \ ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-3.svg"
                />
              </div>
              <div className=" rounded-lg    flex items-center ">
                <h1 className=" text-black dark:text-white  text-sm font-medium leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson<br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16 flex justify-end ml-8 ml-8 lg:mt-2 md:mt-6 mt-5  items-center ">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/article-view");
                  }}
                  className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:w-96 lg:w-[410px]  md:w-[340px] w-80    rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-4.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white xl:text-2xl lg:text-2xl md:text-xl  text-xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base font-medium leading-[24px]   mt-6 ml-6 pr-6  text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white dark:bg-[#04505B] rounded-lg flex justify-items-start mb-4 ">
              <div className=" xl:w-1/6 lg:w-1/6  md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-4.svg"
                />
              </div>
              <div className=" rounded-lg   flex items-center  ">
                <h1 className=" text-black dark:text-white  text-sm font-medium leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson<br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16 flex justify-end ml-8 ml-8 lg:mt-2 md:mt-6 mt-5 items-center ">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/article-view");
                  }}
                  className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:w-96 lg:w-[410px] md:w-[340px] w-80   rounded-lg bg-white-900 text-white  bg-[#FFFFFF]  dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-5.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white xl:text-2xl lg:text-2xl md:text-xl  text-xl font-bold  leading-[32px] mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base font-medium leading-[24px]   mt-6 ml-6 pr-6  text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white  dark:bg-[#04505B] rounded-lg flex justify-items-start  mb-4">
              <div className="xl:w-1/6 lg:w-1/6  md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-5.svg"
                />
              </div>
              <div className=" rounded-lg   flex items-center  ">
                <h1 className=" text-black dark:text-white  text-sm font-medium leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson<br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16 flex justify-end ml-8 ml-8 lg:mt-2 md:mt-6 mt-5  items-center ">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/article-view");
                  }}
                  className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:w-96 lg:w-[410px] md:w-[340px] w-80    rounded-lg bg-white-900 text-white  bg-[#FFFFFF]  dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="./article-6.svg"
              />
            </div>

            <div className=" w-[96-4]  ">
              <h1 className=" text-black dark:text-white  xl:text-2xl lg:text-2xl md:text-xl  text-xl font-bold leading-[32px]    mt-6 ml-6 pr-6  text-left">
                Best UI components for modern websites
              </h1>

              <p className=" text-black dark:text-[#959CB1] text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras sit amet dictum neque, laoreet dolor.
              </p>
            </div>
            <div className=" mt-8 bg-white dark:bg-[#04505B] rounded-lg flex justify-items-start mb-4  ">
              <div className=" xl:w-1/6 lg:w-1/6  md:w-32 w-32 rounded-lg  mb-2 mt-2  ml-4 ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./eng-6.svg"
                />
              </div>
              <div className=" rounded-lg    flex items-center ">
                <h1 className=" text-black dark:text-white  text-sm font-medium leading-[20px] ml-6 mr-6 mb-4 mt-4  rounded-lg  ">
                  Mark Nelson<br></br> <span className="text-xs font-normal leading-[16px] xl:block lg:block hidden ">Tech Engineer</span>
                </h1>
              </div>
              <div className="w-32 h-16 flex justify-end ml-8 ml-8 lg:mt-2 md:mt-6 mt-5  items-center ">
                <Link to="/article-view">
                  <button
                    type="button"
                    className=" text-white  bg-[#078CA0] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4  "
                  >
                    VIEW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center  bg-[#F5F5F5] dark:bg-[#07343A]  px-4 py-3 sm:px-6 ">
          <div className="flex flex-1 justify-center sm:hidden">
            <Link
              to="/"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-[#078CA0] dark:border-[#078CA0]  px-4 py-2 text-sm font-medium text-gray-700 dark:text-white  hover:bg-gray-50"
            >
              Previous
            </Link>
            <Link
              to="/"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-[#078CA0] dark:border-[#078CA0] dark:text-white px-7 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </Link>
                <Link
                  to="/"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]   ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
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
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]   ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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

export default Article;
